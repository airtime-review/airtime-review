const { sendError, supabase } = require("../google/_utils");

const DEFAULT_LOCATION_ID = process.env.DEFAULT_LOCATION_ID || "17541f25-1b19-4a2c-9a40-1e20593ed9f2";

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      res.status(405).json({ ok: false, error: "Use POST from the GHL workflow webhook step." });
      return;
    }

    const payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const contact = payload.contact || payload.contactData || payload;
    const customData = payload.customData || payload.custom_data || {};

    const row = {
      location_id: customData.location_id || payload.location_id || payload.locationId || DEFAULT_LOCATION_ID,
      ghl_contact_id: contact.id || contact.contact_id || contact.contactId || payload.contact_id || payload.contactId || null,
      first_name: contact.first_name || contact.firstName || payload.first_name || payload.firstName || null,
      last_name: contact.last_name || contact.lastName || payload.last_name || payload.lastName || null,
      email: contact.email || payload.email || null,
      phone: contact.phone || payload.phone || null,
      source: "ghl_workflow",
      sent_at: new Date().toISOString()
    };

    await supabase("review_requests_sent", {
      method: "POST",
      body: JSON.stringify(row)
    });

    res.status(200).json({ ok: true, saved: true });
  } catch (error) {
    sendError(res, error);
  }
};
