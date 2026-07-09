const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const DEFAULT_LOCATION_ID = process.env.DEFAULT_LOCATION_ID;

const GOOGLE_SCOPE = "https://www.googleapis.com/auth/business.manage";

function appUrl(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || "https";
  return `${proto}://${host}`;
}

function redirectUri(req) {
  return GOOGLE_REDIRECT_URI || `${appUrl(req)}/api/google/callback`;
}

function requireEnv(names) {
  const missing = names.filter(name => !process.env[name]);
  if (missing.length) {
    const error = new Error(`Missing environment variables: ${missing.join(", ")}`);
    error.statusCode = 500;
    throw error;
  }
}

async function jsonFetch(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    const error = new Error(typeof data === "string" ? data : JSON.stringify(data));
    error.statusCode = response.status;
    throw error;
  }
  return data;
}

async function supabase(path, options = {}) {
  requireEnv(["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"]);
  return jsonFetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {})
    }
  });
}

async function googleFetch(url, accessToken, options = {}) {
  return jsonFetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
}

async function exchangeCode(code, req) {
  requireEnv(["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]);
  return jsonFetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri(req),
      grant_type: "authorization_code"
    })
  });
}

async function refreshAccessToken(connection) {
  requireEnv(["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]);
  const refreshToken = connection.refresh_token || connection.google_refresh_token;
  if (!refreshToken) throw new Error("No Google refresh token found in google_connections.");

  const token = await jsonFetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token"
    })
  });

  const expiresAt = new Date(Date.now() + Number(token.expires_in || 3600) * 1000).toISOString();
  await supabase(`google_connections?id=eq.${connection.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      access_token: token.access_token,
      expires_at: expiresAt,
      updated_at: new Date().toISOString()
    })
  });

  return token.access_token;
}

function cleanAccountId(accountName) {
  return String(accountName || "").replace("accounts/", "");
}

function cleanGoogleLocationId(locationName) {
  return String(locationName || "").replace("locations/", "").replace(/^accounts\/[^/]+\/locations\//, "");
}

function ratingNumber(starRating) {
  const map = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5
  };
  return map[starRating] || Number(starRating) || null;
}

function googleDateToIso(date) {
  if (!date) return null;
  if (date.year && date.month && date.day) {
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
  }
  return null;
}

function sendError(res, error) {
  const status = error.statusCode || 500;
  res.status(status).json({
    ok: false,
    error: error.message || "Unknown error"
  });
}

module.exports = {
  DEFAULT_LOCATION_ID,
  GOOGLE_CLIENT_ID,
  GOOGLE_SCOPE,
  appUrl,
  cleanAccountId,
  cleanGoogleLocationId,
  exchangeCode,
  googleDateToIso,
  googleFetch,
  ratingNumber,
  redirectUri,
  refreshAccessToken,
  requireEnv,
  sendError,
  supabase
};
