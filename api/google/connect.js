const { GOOGLE_CLIENT_ID, GOOGLE_SCOPE, redirectUri, requireEnv, sendError } = require("./_utils");

module.exports = function handler(req, res) {
  try {
    requireEnv(["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]);
    const state = req.query?.location_id || process.env.DEFAULT_LOCATION_ID || "default";
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    authUrl.searchParams.set("client_id", GOOGLE_CLIENT_ID);
    authUrl.searchParams.set("redirect_uri", redirectUri(req));
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", GOOGLE_SCOPE);
    authUrl.searchParams.set("access_type", "offline");
    authUrl.searchParams.set("prompt", "consent");
    authUrl.searchParams.set("state", state);
    res.redirect(authUrl.toString());
  } catch (error) {
    sendError(res, error);
  }
};
