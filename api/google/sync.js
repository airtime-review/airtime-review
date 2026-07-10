const {
  cleanGoogleLocationId,
  googleDateToIso,
  googleFetch,
  ratingNumber,
  refreshAccessToken,
  sendError,
  supabase
} = require("./_utils");

const DAILY_METRICS = [
  "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
  "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
  "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
  "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
  "CALL_CLICKS",
  "WEBSITE_CLICKS",
  "BUSINESS_DIRECTION_REQUESTS"
];

module.exports = async function handler(req, res) {
  try {
    const connections = await supabase("google_connections?select=*&limit=1");
    const connection = connections[0];
    if (!connection) throw new Error("No google_connections row found. Visit /api/google/connect first.");

    const accessToken = await refreshAccessToken(connection);
    const gbpLocations = await supabase("gbp_locations?select=*&limit=20");
    if (!gbpLocations.length) throw new Error("No gbp_locations rows found. Reconnect Google from /api/google/connect.");

    let reviewCount = 0;
    let metricCount = 0;
    let skippedLocations = 0;

    for (const location of gbpLocations) {
      const googleLocationId = location.google_location_id || cleanGoogleLocationId(location.name);
      const googleAccountId = location.google_account_id || connection.google_account_id;
      const internalLocationId = location.location_id || connection.location_id || null;

      if (!googleLocationId || !googleAccountId) {
        skippedLocations += 1;
        continue;
      }

      const reviewResult = await syncReviews({
        accessToken,
        googleAccountId,
        googleLocationId,
        internalLocationId
      });
      reviewCount += reviewResult;

      const metricResult = await syncPerformance({
        accessToken,
        googleLocationId,
        internalLocationId
      });
      metricCount += metricResult;
    }

    await rebuildDashboardMetrics();

    res.status(200).json({ ok: true, reviewCount, metricCount, skippedLocations });
  } catch (error) {
    sendError(res, error);
  }
};

async function syncReviews({ accessToken, googleAccountId, googleLocationId, internalLocationId }) {
  const parent = `accounts/${googleAccountId}/locations/${googleLocationId}`;
  const data = await googleFetch(
    `https://mybusiness.googleapis.com/v4/${parent}/reviews?pageSize=50&orderBy=updateTime%20desc`,
    accessToken
  );
  const reviews = data.reviews || [];
  if (!reviews.length) return 0;

  for (const review of reviews) {
    const externalId = review.reviewId || review.name || `${googleLocationId}-${review.updateTime}`;
    const existing = await supabase(`reviews?external_review_id=eq.${encodeURIComponent(externalId)}&select=id&limit=1`);
    const row = {
      location_id: internalLocationId,
      source: "google",
      reviewer_name: review.reviewer?.displayName || "Google Customer",
      rating: ratingNumber(review.starRating),
      review_text: review.comment || "",
      review_time: review.createTime || review.updateTime || new Date().toISOString(),
      reply_text: review.reviewReply?.comment || null,
      status: review.reviewReply?.comment ? "replied" : "needs_response",
      external_review_id: externalId,
      created_at: new Date().toISOString()
    };

    if (existing[0]?.id) {
      await supabase(`reviews?id=eq.${existing[0].id}`, {
        method: "PATCH",
        body: JSON.stringify(row)
      });
    } else {
      await supabase("reviews", {
        method: "POST",
        body: JSON.stringify(row)
      });
    }
  }

  return reviews.length;
}

async function syncPerformance({ accessToken, googleLocationId, internalLocationId }) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 180);
  const params = new URLSearchParams();
  DAILY_METRICS.forEach(metric => params.append("dailyMetrics", metric));
  params.set("dailyRange.start_date.year", String(start.getUTCFullYear()));
  params.set("dailyRange.start_date.month", String(start.getUTCMonth() + 1));
  params.set("dailyRange.start_date.day", String(start.getUTCDate()));
  params.set("dailyRange.end_date.year", String(end.getUTCFullYear()));
  params.set("dailyRange.end_date.month", String(end.getUTCMonth() + 1));
  params.set("dailyRange.end_date.day", String(end.getUTCDate()));

  const data = await googleFetch(
    `https://businessprofileperformance.googleapis.com/v1/locations/${googleLocationId}:fetchMultiDailyMetricsTimeSeries?${params.toString()}`,
    accessToken
  );

  const rows = [];
  for (const multi of data.multiDailyMetricTimeSeries || []) {
    for (const series of multi.dailyMetricTimeSeries || []) {
      const metricName = String(series.dailyMetric || "").toLowerCase();
      for (const point of series.timeSeries?.datedValues || []) {
        const metricDate = googleDateToIso(point.date);
        const metricValue = Number(point.value || point.metricValue?.value || point.metricValue || 0);
        if (!metricDate) continue;
        rows.push({
          location_id: internalLocationId,
          metric_date: metricDate,
          metric_name: metricName,
          metric_value: metricValue,
          created_at: new Date().toISOString()
        });
      }
    }
  }

  if (!rows.length) return 0;

  await supabase("gbp_daily_metrics?on_conflict=location_id,metric_date,metric_name", {
    method: "POST",
    headers: {
      Prefer: "resolution=merge-duplicates,return=representation"
    },
    body: JSON.stringify(rows)
  });

  return rows.length;
}

async function rebuildDashboardMetrics() {
  const reviews = await supabase("reviews?select=rating,status,reply_text");
  const total = reviews.length;
  const ratingSum = reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  const replied = reviews.filter(review => review.reply_text || review.status === "replied").length;
  const row = {
    total_reviews: total,
    average_rating: total ? Math.round((ratingSum / total) * 10) / 10 : 0,
    response_rate: total ? Math.round((replied / total) * 1000) / 10 : 0,
    invite_conversion: 0,
    avg_response_time: "-",
    updated_at: new Date().toISOString()
  };

  const existing = await supabase("dashboard_metrics?select=id&limit=1");
  if (existing[0]?.id) {
    await supabase(`dashboard_metrics?id=eq.${existing[0].id}`, {
      method: "PATCH",
      body: JSON.stringify(row)
    });
  } else {
    await supabase("dashboard_metrics", {
      method: "POST",
      body: JSON.stringify(row)
    });
  }
}
