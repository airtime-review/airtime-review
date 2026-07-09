const {
  DEFAULT_LOCATION_ID,
  cleanAccountId,
  cleanGoogleLocationId,
  exchangeCode,
  googleFetch,
  sendError,
  supabase
} = require("./_utils");

module.exports = async function handler(req, res) {
  try {
    const code = req.query?.code;
    if (!code) throw new Error("Google did not return an OAuth code.");

    const token = await exchangeCode(code, req);
    const expiresAt = new Date(Date.now() + Number(token.expires_in || 3600) * 1000).toISOString();
    const locationId = req.query?.state && req.query.state !== "default" ? req.query.state : DEFAULT_LOCATION_ID;

    const accountsResponse = await googleFetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", token.access_token);
    const accounts = accountsResponse.accounts || [];
    const account = accounts[0];
    if (!account?.name) throw new Error("Google connected, but no Business Profile accounts were returned for this user.");

    const accountId = cleanAccountId(account.name);
    const connectionRows = await supabase("google_connections", {
      method: "POST",
      headers: { Prefer: "return=representation,resolution=merge-duplicates" },
      body: JSON.stringify({
        location_id: locationId || null,
        google_account_id: accountId,
        access_token: token.access_token,
        refresh_token: token.refresh_token || null,
        expires_at: expiresAt,
        scope: token.scope || "https://www.googleapis.com/auth/business.manage",
        updated_at: new Date().toISOString()
      })
    });

    const readMask = encodeURIComponent("name,title,storefrontAddress");
    const locationsResponse = await googleFetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=${readMask}&pageSize=100`,
      token.access_token
    );

    const locations = locationsResponse.locations || [];
    if (locations.length) {
      await supabase("gbp_locations", {
        method: "POST",
        headers: { Prefer: "return=representation,resolution=merge-duplicates" },
        body: JSON.stringify(locations.map(googleLocation => ({
          location_id: locationId || null,
          google_account_id: accountId,
          google_location_id: cleanGoogleLocationId(googleLocation.name),
          business_name: googleLocation.title || "",
          city: googleLocation.storefrontAddress?.locality || "",
          created_at: new Date().toISOString()
        })))
      });
    }

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <html>
        <body style="font-family:Arial,sans-serif;padding:32px">
          <h1>Google Business Profile connected</h1>
          <p>Found ${locations.length} location${locations.length === 1 ? "" : "s"}.</p>
          <p>Next: open <code>/api/google/sync</code> once to pull reviews and analytics into Supabase.</p>
          <pre>${JSON.stringify({ connection: connectionRows?.[0]?.id || "saved", locations }, null, 2)}</pre>
        </body>
      </html>
    `);
  } catch (error) {
    sendError(res, error);
  }
};
