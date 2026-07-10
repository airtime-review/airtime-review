const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4"/><path d="M9 13h.01M15 13h.01"/><path d="M8 8V6h8v2"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="M9 12h6M9 16h4"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-1.9.3 1.7 1.7 0 0 0-.8 1.7V22H9v-.3a1.7 1.7 0 0 0-.8-1.7 1.7 1.7 0 0 0-1.9-.3l-.2.1-2-3.4.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1.1H3V10h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.2.1a1.7 1.7 0 0 0 1.9-.3A1.7 1.7 0 0 0 9 1.7V1h6v.7a1.7 1.7 0 0 0 .8 1.7 1.7 1.7 0 0 0 1.9.3l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9A1.7 1.7 0 0 0 21 10h.1v3.3H21a1.7 1.7 0 0 0-1.6 1.7Z"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.8 2.8 0 1 1 4.7 2c-.9.7-1.7 1.2-1.7 2.5"/><path d="M12 17h.01"/></svg>',
  paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 9 18-9-4-9 4Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-8 8H5l-2 2v-9a8 8 0 1 1 18-1Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = icons[el.dataset.icon] || "");

const routeMap = {
  "/": ["dashboard", "overview", false],
  "/dashboard": ["dashboard", "overview", true],
  "/dashboard/overview": ["dashboard", "overview", true],
  "/dashboard/analytics": ["dashboard", "analytics", true],
  "/dashboard/qr-analytics": ["dashboard", "qr", true],
  "/reviews": ["reviews", "overview", true],
  "/campaigns": ["campaign-insights", "analytics", true],
  "/campaigns/invites": ["invitees", "overview", true],
  "/campaigns/request-reviews": ["request-reviews", "overview", true],
  "/review-tools/forms": ["feedback-forms", "overview", true],
  "/review-tools/qr-codes": ["qr-codes", "overview", true],
  "/auto-respond": ["auto", "overview", true],
  "/social-proof": ["social-proof", "overview", true],
  "/integrations": ["integrations", "overview", true],
  "/settings": ["settings", "overview", true],
  "/help": ["help", "overview", true]
};

const state = getInitialRoute();
state.period = "All Time";
const content = document.getElementById("appContent");
const sidebar = document.getElementById("sidebar");
let supabaseConfig = null;
const liveData = {
  loaded: false,
  error: null,
  reviews: null,
  metrics: null,
  performance: null,
  invitees: null,
  campaigns: null,
  forms: null,
  qrCodes: null,
  locations: null,
  connections: null,
  autoResponses: null,
  socialProof: null,
  appSettings: null,
  searchKeywords: null,
  reviewRequestsSent: null,
  helpArticles: null
};

const fallbackReviews = [];

function render() {
  document.body.classList.toggle("embedded", state.embedded);
  document.querySelectorAll(".nav-item,.subnav button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === state.page || (state.page === "dashboard" && btn.dataset.page === "dashboard"));
    if (btn.classList.contains("has-children")) btn.classList.toggle("open", isSectionOpen(btn.dataset.page));
  });
  document.querySelectorAll(".subnav").forEach(el => el.classList.toggle("open", isSectionOpen(el.dataset.parent)));
  const pages = {
    dashboard: dashboardPage,
    reviews: reviewsPage,
    "campaign-insights": campaignInsightsPage,
    invitees: inviteesPage,
    "request-reviews": requestReviewsPage,
    "feedback-forms": feedbackFormsPage,
    "qr-codes": qrCodesPage,
    auto: autoRespondPage,
    "social-proof": socialProofPage,
    integrations: integrationsPage,
    settings: settingsPage,
    help: helpPage
  };
  content.innerHTML = (pages[state.page] || placeholderPage)();
  bindPageEvents();
  sidebar.classList.remove("open");
}

async function loadLiveData() {
  try {
    supabaseConfig = await loadRuntimeConfig();
    const [reviewRows, metricRows, performanceRows, invitees, campaigns, forms, qrCodes, locations, connections, autoResponses, socialProof, appSettings, searchKeywords, reviewRequestsSent, helpArticles] = await Promise.all([
      supabaseRest("reviews?select=*&order=review_time.desc"),
      supabaseRest("dashboard_metrics?select=*&order=updated_at.desc&limit=1"),
      supabaseRest("gbp_daily_metrics?select=*&order=metric_date.desc"),
      safeSupabaseRest("invitees?select=*&order=created_at.desc"),
      safeSupabaseRest("campaigns?select=*&order=created_at.desc"),
      safeSupabaseRest("feedback_forms?select=*&order=created_at.desc"),
      safeSupabaseRest("qr_codes?select=*&order=created_at.desc"),
      safeSupabaseRest("locations?select=*"),
      safeSupabaseRest("api_connections?select=*"),
      safeSupabaseRest("auto_responses?select=*&order=created_at.desc"),
      safeSupabaseRest("social_proof_widgets?select=*&order=created_at.desc"),
      safeSupabaseRest("app_settings?select=*"),
      safeSupabaseRest("gbp_search_keywords?select=*&order=month.desc&order=impressions.desc"),
      safeSupabaseRest("review_requests_sent?select=*&order=sent_at.desc"),
      safeSupabaseRest("help_articles?select=*&order=created_at.desc")
    ]);
    liveData.reviews = reviewRows.map(mapReviewRow);
    liveData.metrics = metricRows[0] || null;
    liveData.performance = performanceRows || [];
    liveData.invitees = invitees || [];
    liveData.campaigns = campaigns || [];
    liveData.forms = forms || [];
    liveData.qrCodes = qrCodes || [];
    liveData.locations = locations || [];
    liveData.connections = connections || [];
    liveData.autoResponses = autoResponses || [];
    liveData.socialProof = socialProof || [];
    liveData.appSettings = appSettings || [];
    liveData.searchKeywords = searchKeywords || [];
    liveData.reviewRequestsSent = reviewRequestsSent || [];
    liveData.helpArticles = helpArticles || [];
    liveData.loaded = true;
    liveData.error = null;
  } catch (error) {
    liveData.loaded = true;
    liveData.error = error.message;
    console.warn("Supabase live data failed:", error);
  }
  render();
}

async function supabaseRest(path) {
  if (!supabaseConfig?.url || !supabaseConfig?.anonKey) {
    throw new Error("Missing Supabase runtime config. Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel Environment Variables.");
  }
  const response = await fetch(`${supabaseConfig.url}/rest/v1/${path}`, {
    headers: {
      apikey: supabaseConfig.anonKey,
      Authorization: `Bearer ${supabaseConfig.anonKey}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  return response.json();
}

async function loadRuntimeConfig() {
  if (supabaseConfig) return supabaseConfig;
  const response = await fetch("/api/config", { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Config endpoint failed: ${response.status}`);
  const config = await response.json();
  return {
    url: config.supabaseUrl,
    anonKey: config.supabaseAnonKey
  };
}

async function safeSupabaseRest(path) {
  try {
    return await supabaseRest(path);
  } catch (error) {
    console.warn(`Optional Supabase table not available: ${path}`, error);
    return [];
  }
}

function mapReviewRow(row) {
  const name = row.reviewer_name || "Google Customer";
  const reply = row.reply_text || row.review_reply || "";
  return [
    name,
    formatReviewDate(row.review_time || row.create_time),
    sourceLabel(row.source),
    Number(row.rating || 0),
    row.review_text || row.comment || "",
    reply ? "Replied" : "Respond",
    initials(name),
    row.status || (reply ? "replied" : "needs_response"),
    reply,
    row.review_time || row.create_time || null
  ];
}

function getReviews() {
  if (!liveData.loaded) return fallbackReviews;
  return filterByPeriod(liveData.reviews || [], review => review[9]);
}

function dataNotice() {
  if (!liveData.loaded) return `<div class="data-notice">Loading Supabase data...</div>`;
  if (liveData.error) return `<div class="data-notice error">Could not load Supabase data. ${liveData.error}</div>`;
  return "";
}

function getSummary() {
  const activeReviews = getReviews();
  const ratings = activeReviews.map(r => Number(r[3] || 0)).filter(Boolean);
  const replied = activeReviews.filter(r => r[5] === "Replied" || r[7] === "replied").length;
  const useStoredMetrics = state.period === "All Time" && liveData.metrics;
  const requestRows = getReviewRequestRows();
  const requestCount = requestRows.length;
  const inviteConversion = requestCount ? Math.round((activeReviews.length / requestCount) * 1000) / 10 : 0;
  return {
    total: useStoredMetrics ? liveData.metrics.total_reviews : activeReviews.length,
    average: Number(useStoredMetrics ? liveData.metrics.average_rating : (ratings.length ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0)),
    responseRate: Number(useStoredMetrics ? liveData.metrics.response_rate : (activeReviews.length ? Math.round((replied / activeReviews.length) * 1000) / 10 : 0)),
    inviteConversion,
    reviewRequestsSent: requestCount,
    avgResponseTime: useStoredMetrics ? (liveData.metrics.avg_response_time || "-") : "-",
    bad: activeReviews.filter(r => Number(r[3]) <= 3).length,
    needsResponse: activeReviews.filter(r => r[5] === "Respond" || r[7] === "needs_response").length
  };
}

function getReviewRequestRows() {
  const rows = liveData.reviewRequestsSent || [];
  return filterByPeriod(rows, row => row.sent_at || row.created_at);
}

function getPeriodStart(period) {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  if (period === "7 Days") start.setDate(start.getDate() - 7);
  else if (period === "30 Days") start.setDate(start.getDate() - 30);
  else if (period === "90 Days") start.setDate(start.getDate() - 90);
  else if (period === "This Month") start.setDate(1);
  else if (period === "Last Month") {
    start.setMonth(start.getMonth() - 1, 1);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    return { start, end };
  } else if (period === "This Year") {
    start.setMonth(0, 1);
  } else {
    return null;
  }
  return { start, end: now };
}

function filterByPeriod(rows, dateGetter) {
  const range = getPeriodStart(state.period);
  if (!range) return rows;
  return rows.filter(row => {
    const raw = dateGetter(row);
    if (!raw) return false;
    const date = new Date(raw);
    return !Number.isNaN(date.getTime()) && date >= range.start && date <= range.end;
  });
}

function getPerformanceRows() {
  return filterByPeriod(liveData.performance || [], row => row.metric_date || row.date || row.created_at);
}

function getSearchKeywordRows() {
  return filterByPeriod(liveData.searchKeywords || [], row => row.month || row.metric_date || row.created_at);
}

function getSearchKeywordSummary() {
  const grouped = new Map();
  getSearchKeywordRows().forEach(row => {
    const term = String(row.search_term || row.keyword || "").trim();
    if (!term) return;
    const key = term.toLowerCase();
    const existing = grouped.get(key) || {
      term,
      impressions: 0,
      isBrand: false,
      month: row.month || row.metric_date || ""
    };
    existing.impressions += Number(row.impressions || row.metric_value || row.value || 0) || 0;
    existing.isBrand = existing.isBrand || Boolean(row.is_brand);
    if ((row.month || "") > existing.month) existing.month = row.month;
    grouped.set(key, existing);
  });

  const terms = [...grouped.values()].sort((a, b) => b.impressions - a.impressions);
  const totalImpressions = terms.reduce((sum, row) => sum + row.impressions, 0);
  const brandImpressions = terms.filter(row => row.isBrand).reduce((sum, row) => sum + row.impressions, 0);
  const discoveryImpressions = Math.max(0, totalImpressions - brandImpressions);
  return {
    terms,
    totalTerms: terms.length,
    totalImpressions,
    brandPercent: totalImpressions ? Math.round((brandImpressions / totalImpressions) * 100) : 0,
    discoveryPercent: totalImpressions ? Math.round((discoveryImpressions / totalImpressions) * 100) : 0
  };
}

function metricValue(row) {
  return Number(row.metric_value ?? row.value ?? row.count ?? 0) || 0;
}

function metricLabel(name) {
  const key = String(name || "").toLowerCase();
  const labels = {
    business_impressions_mobile_search: "Mobile Google Search Views",
    business_impressions_desktop_search: "Desktop Google Search Views",
    business_impressions_mobile_maps: "Mobile Google Maps Views",
    business_impressions_desktop_maps: "Desktop Google Maps Views",
    website_clicks: "Website Clicks",
    business_website_clicks: "Website Clicks",
    business_direction_requests: "Direction Requests",
    direction_requests: "Direction Requests",
    call_clicks: "Call Button Clicks",
    business_conversations: "Message / Conversation Clicks",
    impressions: "Profile Views",
    business_impressions: "Profile Views"
  };
  return labels[key] || String(name || "Metric")
    .replace(/^business_/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function metricTotal(names) {
  const allowed = names.map(name => String(name).toLowerCase());
  return getPerformanceRows()
    .filter(row => allowed.includes(String(row.metric_name || row.metric || row.name || "").toLowerCase()))
    .reduce((sum, row) => sum + metricValue(row), 0);
}

function getPerformanceSummary() {
  const rows = getPerformanceRows();
  return {
    hasData: rows.length > 0,
    impressions: metricTotal(["impressions", "business_impressions", "business_impressions_desktop_search", "business_impressions_mobile_search", "business_impressions_desktop_maps", "business_impressions_mobile_maps"]),
    calls: metricTotal(["calls", "call_clicks", "business_conversations"]),
    directions: metricTotal(["directions", "direction_requests", "business_direction_requests"]),
    websiteClicks: metricTotal(["website_clicks", "website clicks", "business_website_clicks"])
  };
}

function formatReviewDate(value) {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function sourceLabel(source) {
  if (!source) return "Google";
  return source.charAt(0).toUpperCase() + source.slice(1);
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "G";
}

function getInitialRoute() {
  const url = new URL(window.location.href);
  const cleanPath = url.pathname.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  const routeKey = routeMap[cleanPath]
    ? cleanPath
    : Object.keys(routeMap)
        .filter(route => route !== "/" && cleanPath.endsWith(route))
        .sort((a, b) => b.length - a.length)[0] || "/";
  const fromPath = routeMap[routeKey] || routeMap["/"];
  const page = url.searchParams.get("page") || fromPath[0];
  const tab = url.searchParams.get("tab") || fromPath[1];
  const embedded = url.searchParams.get("embed") === "ghl" || url.searchParams.get("embedded") === "1" || fromPath[2];
  return { page, tab, embedded };
}

function routeFor(page, tab = "overview") {
  if (page === "dashboard" && tab === "analytics") return "/dashboard/analytics/";
  if (page === "dashboard" && tab === "qr") return "/dashboard/qr-analytics/";
  const routes = {
    dashboard: "/dashboard/",
    reviews: "/reviews/",
    "campaign-insights": "/campaigns/",
    invitees: "/campaigns/invites/",
    "request-reviews": "/campaigns/request-reviews/",
    "feedback-forms": "/review-tools/forms/",
    "qr-codes": "/review-tools/qr-codes/",
    auto: "/auto-respond/",
    "social-proof": "/social-proof/",
    integrations: "/integrations/",
    settings: "/settings/",
    help: "/help/"
  };
  return routes[page] || "/";
}

function syncRoute() {
  if (!state.embedded) return;
  const next = routeFor(state.page, state.tab);
  if (window.location.pathname !== next) history.pushState({}, "", next);
}

function isSectionOpen(page) {
  if (page === "campaign-insights") return ["campaign-insights", "invitees", "request-reviews"].includes(state.page);
  if (page === "feedback-forms") return ["feedback-forms", "qr-codes"].includes(state.page);
  return state.page === page;
}

function head(title, subtitle, tab = state.tab) {
  return `<div class="page-head center-ish">
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <div class="tabs">
      ${["overview", "analytics", "qr"].map(([].constructor === Array) ? x => x : x => x).map(t => {
        const label = t === "qr" ? "QR Analytics" : t[0].toUpperCase() + t.slice(1);
        return `<button class="${tab === t ? "active" : ""}" data-tab="${t}">${label}</button>`;
      }).join("")}
    </div>
  </div>`;
}

function dashboardPage() {
  if (state.tab === "analytics") return analyticsTab();
  if (state.tab === "qr") return qrAnalyticsTab();
  const summary = getSummary();
  const average = summary.average.toFixed(1);
  return `${head("Good Evening!", "Here's your business reputation at a glance.", "overview")}
    ${dataNotice()}
    <div class="toolbar">
      <h3>Time Period</h3>
      ${period()}
    </div>
    <section class="grid overview-grid">
      <div class="card card-pad reputation">
        <div class="soft-icon amber">${icons.star}</div>
        <p>Overall Reputation</p>
        <div class="rating-big">${average} <span>/ 5</span></div>
        <div class="stars">${ratingStars(summary.average)}</div>
        <div class="breakdown">View Breakdown</div>
      </div>
      <div class="stacked-metrics">
        ${metric("Total Reviews", String(summary.total), "", "blue", "chat")}
        ${metric("Response Rate", `${summary.responseRate}%`, "", "purple", "clock")}
      </div>
      <div class="stacked-metrics">
        ${metric("Invite Conversion", `${summary.inviteConversion}%`, "", "green", "trend")}
        ${metric("Avg. Response Time", summary.avgResponseTime, "", "blue", "clock")}
      </div>
    </section>
    ${blueHero()}
    ${googleInsights()}
    ${reviewAnalyticsSections()}
    ${recentReviews()}`;
}
function period() {
  return `<div class="period">${["All Time","7 Days","30 Days","90 Days","This Month","Last Month","This Year","Custom"].map(x => `<button class="${state.period === x ? "active" : ""}" data-period="${x}">${x}</button>`).join("")}</div>`;
}

function metric(label, value, delta, color, icon, negative = false) {
  const deltaHtml = delta
    ? `<div class="${negative ? "negative" : "positive"}">${delta.replace(" vs", "</span><span class='muted'> vs")}</span></div>`
    : "";
  return `<div class="card card-pad metric">
    <div><p>${label}</p><div class="value">${value}</div>${deltaHtml}</div>
    <div class="soft-icon ${color}">${icons[icon]}</div>
  </div>`;
}

function blueHero() {
  const summary = getSummary();
  const last30 = countReviewsBetween(30, 0);
  const previous30 = countReviewsBetween(60, 30);
  const average = summary.average.toFixed(1);
  const reviewGoal = getNumericSetting(["review_goal_count", "target_review_count", "next_review_goal_reviews"]);
  const reviewsNeeded = reviewGoal > summary.total
    ? Math.ceil(reviewGoal - summary.total)
    : reviewsNeededForDisplayedRating(summary.average, summary.total);
  const trendPercent = previous30 ? Math.round(((last30 - previous30) / previous30) * 100) : null;
  const trendGood = last30 >= previous30 && last30 > 0;
  const trendText = trendPercent === null
    ? "No previous data"
    : `${trendPercent >= 0 ? "&uarr;" : "&darr;"} ${Math.abs(trendPercent)}% ${trendPercent >= 0 ? "increase" : "decrease"}`;
  const forecastMonths = last30 > 0 && reviewsNeeded > 0 ? Math.max(1, Math.ceil(reviewsNeeded / last30)) : 0;
  const progressPercent = reviewsNeeded > 0 ? Math.min(100, Math.round((last30 / reviewsNeeded) * 100)) : 100;
  const revenuePerReview = getNumericSetting(["revenue_per_review_month", "monthly_revenue_per_review", "review_monthly_value"]);
  const potentialRevenue = revenuePerReview > 0 && reviewsNeeded > 0 ? reviewsNeeded * revenuePerReview : 0;
  const visibilityBoost = Math.max(0, Math.round((5 - Number(average)) * 100));
  const ratingDelta = Math.max(0, 5 - Number(average)).toFixed(1);
  return `<section class="blue-panel">
    <div class="hero-grid">
      <div>
        <span class="pill">G Google</span>
        <h2>${reviewsNeeded ? `Almost there! Keep going! <span class="hero-accent">&#127919;</span>` : "You're at the goal. Keep going!"}</h2>
        <p>${reviewsNeeded ? `Just <strong>${reviewsNeeded} more reviews</strong> to reach <strong>5.0!</strong>` : `Current live rating is <strong>${average}</strong> from <strong>${summary.total}</strong> reviews.`}</p>
        <div class="notice"><strong>Why this matters:</strong> Higher ratings help you show up first when people search on Google Maps and Google Search. More stars = more customers finding your business!</div>
        <div class="notice momentum ${trendGood ? "momentum-good" : "momentum-watch"}"><strong>${trendGood ? "You're on Fire!" : "Let's Pick Up the Pace"}</strong><br>${trendGood ? "Both your review count and rating are moving in the right direction. Keep this momentum going!" : "Your review collection has slowed down. Time to ask more customers!"}</div>
        <div class="blue-stats">
          <div class="blue-card"><small>LAST 30 DAYS</small><strong>${last30}</strong>reviews<br><b style="color:#ffe25c">${trendText}</b></div>
          <div class="blue-card"><small>PREVIOUS 30 DAYS</small><strong>${previous30}</strong>reviews</div>
        </div>
        <div class="blue-card">
          <small>YOUR FORECAST</small>
          <h3>${forecastMonths ? `At your pace, you'll hit 5.0 &#9733; in ${forecastMonths} month${forecastMonths === 1 ? "" : "s"}.` : reviewsNeeded ? "Collect new reviews to start the forecast." : "You have reached the 5.0 display goal."}</h3>
          <div class="forecast-row"><strong>${forecastMonths || "-"}</strong><span>months</span><em>&rarr;</em><strong>5.0 &#9733;</strong><span>rating</span></div>
          <div class="progress-label"><span>Keep up the pace!</span><b>${reviewsNeeded} reviews needed</b></div>
          <div class="progress"><span style="width:${progressPercent}%"></span></div>
        </div>
        <div class="progress-label milestone"><span>Progress to next milestone</span><b>${progressPercent}%</b></div>
        <div class="progress milestone-bar"><span style="width:${progressPercent}%"></span></div>
      </div>
      <div class="blue-card rating-side">
        <small>CURRENT RATING</small>
        <div class="rating-big">${average} &#9733;</div>
        <div class="stars" style="color:white">${ratingStars(summary.average)}</div>
        <hr style="border-color:rgba(255,255,255,.22)">
        <div class="blue-stats"><div><strong>${summary.total}</strong><small>TOTAL REVIEWS</small></div><div><strong>5.0</strong><small>NEXT GOAL</small></div></div>
        <div class="notice revenue-box">
          <small>POTENTIAL EXTRA REVENUE</small>
          <strong>${potentialRevenue ? formatMoney(potentialRevenue) : "$--"}</strong>
          <span>per month</span>
          <p>${potentialRevenue ? `Based on ${formatMoney(revenuePerReview)} monthly value per review.` : "Add revenue_per_review_month in app_settings to calculate this."}</p>
        </div>
        <div class="blue-stats compact">
          <div class="blue-card"><strong>+${visibilityBoost}%</strong><small>Visibility Boost</small></div>
          <div class="blue-card"><strong>5.0</strong><small>Next Goal</small></div>
        </div>
        <button class="button ghost-button" type="button">Update Business Details</button>
        <hr style="border-color:rgba(255,255,255,.22)">
        <div class="milestone-card">
          <strong>REVENUE IMPACT PER RATING MILESTONE</strong>
          <div class="milestone-row"><span>${average} &#9733;</span><em>&rarr;</em><span>5.0 &#9733;</span><b>+${ratingDelta}</b><strong>${potentialRevenue ? `+${formatMoney(potentialRevenue)}` : "+$--"}</strong></div>
          <p>Just ${reviewsNeeded} more 5-star reviews</p>
        </div>
      </div>
    </div>
  </section>`;
}

function googleInsights() {
  const perf = getPerformanceSummary();
  const keywordSummary = getSearchKeywordSummary();
  return `<section class="section">
    <div class="section-title"><div class="soft-icon blue" style="width:34px;height:34px">G</div><div><h2>Google Business Profile Insights</h2><p>How customers find and interact with your business on Google</p></div></div>
    <div class="grid stat-grid">
      ${smallStat("IMPRESSIONS", formatNumber(perf.impressions))}
      ${smallStat("CALL CLICKS", formatNumber(perf.calls))}
      ${smallStat("DIRECTIONS", formatNumber(perf.directions))}
      ${smallStat("WEBSITE CLICKS", formatNumber(perf.websiteClicks))}
    </div>
    <div class="card card-pad section">
      <h3>Performance Trends <span class="badge" style="float:right">${state.period}</span></h3>
      <div class="legend"><span><i class="dot" style="background:#6b6cf6"></i>Impressions</span><span><i class="dot" style="background:#ff4747"></i>Website Clicks</span><span><i class="dot" style="background:#f59e0b"></i>Direction Requests</span><span><i class="dot" style="background:#18bf8f"></i>Call Clicks</span></div>
      ${performanceTrendChart()}
      ${perf.hasData ? performanceTable() : `<div class="empty-inline chart-note">Waiting for Google Business Profile analytics sync. Once rows are added to <strong>gbp_daily_metrics</strong>, this chart will draw real lines.</div>`}
    </div>
    <div class="grid two-grid section">
      ${breakdownCard("How People Find You", "Google Search vs Google Maps", "search")}
      ${breakdownCard("Device Breakdown", "Desktop vs Mobile", "device")}
    </div>
    <div class="card card-pad section">
      <h3>How People Search for You <span class="badge" style="float:right">${state.period}</span></h3>
      <p>Search terms people use to find your business on Google</p>
      <div class="search-stats"><div class="search-stat"><strong>${formatNumber(keywordSummary.totalTerms)}</strong>SEARCH TERMS</div><div class="search-stat" style="background:#eef2ff;color:#4f46e5"><strong>${keywordSummary.brandPercent}%</strong>BRAND SEARCHES</div><div class="search-stat" style="background:#e9fbf3;color:#12a66c"><strong>${keywordSummary.discoveryPercent}%</strong>DISCOVERY SEARCHES</div></div>
      ${keywordSummary.terms.length ? searchTable(keywordSummary.terms) : `<div class="empty-inline">Waiting for Google keyword impression rows.</div>`}
    </div>
  </section>`;
  return `<section class="section">
    <div class="section-title"><div class="soft-icon blue" style="width:34px;height:34px">G</div><div><h2>Google Business Profile Insights</h2><p>How customers find and interact with your business on Google</p></div></div>
    <div class="grid stat-grid">
      ${smallStat("IMPRESSIONS", "1,892", "blue")} ${smallStat("CALL CLICKS", "45", "blue")} ${smallStat("DIRECTIONS", "252", "blue")} ${smallStat("WEBSITE CLICKS", "119", "blue")}
    </div>
    <div class="card card-pad section">
      <h3>Performance Trends <span class="badge" style="float:right">Monthly</span></h3>
      <div class="legend"><span><i class="dot" style="background:#6b6cf6"></i>Impressions</span><span><i class="dot" style="background:#ff4747"></i>Website Clicks</span><span><i class="dot" style="background:#f59e0b"></i>Direction Requests</span><span><i class="dot" style="background:#18bf8f"></i>Call Clicks</span></div>
      ${lineChart()}
    </div>
    <div class="grid two-grid section">
      ${donutCard("How People Find You", "Google Search vs Google Maps", "conic-gradient(#6366f1 0 74%, #18bf8f 74% 100%)", "Google Search", "Google Maps")}
      ${donutCard("Device Breakdown", "Desktop vs Mobile", "conic-gradient(#8b5cf6 0 54%, #f59e0b 54% 100%)", "Desktop", "Mobile")}
    </div>
    <div class="card card-pad section">
      <h3>How People Search for You <span class="badge" style="float:right">Apr 2026</span></h3>
      <p>Search terms people use to find your business on Google</p>
      <div class="search-stats"><div class="search-stat"><strong>12</strong>SEARCH TERMS</div><div class="search-stat" style="background:#eef2ff;color:#4f46e5"><strong>11%</strong>BRAND SEARCHES</div><div class="search-stat" style="background:#e9fbf3;color:#12a66c"><strong>89%</strong>DISCOVERY SEARCHES</div></div>
      ${searchTable()}
    </div>
    <div class="card card-pad section">
      <h3>Brand vs Discovery Trend</h3><p>How your search visibility is shifting over time</p>
      ${barChart("stacked")}
    </div>
  </section>`;
}

function smallStat(label, value) {
  return `<div class="card card-pad"><div class="soft-icon blue" style="width:38px;height:38px">&#9678;</div><p style="margin-top:12px;font-weight:800">${label}</p><div class="value" style="font-size:30px">${value}</div><span class="positive">&uarr; +100%</span> <span class="muted">vs prior</span></div>`;
}

function donutCard(title, sub, bg, a, b) {
  return `<div class="card card-pad"><h3>${title}</h3><p>${sub}</p><div class="donut-wrap"><div class="donut" style="background:${bg}"><div class="donut-center">Total<strong>1892</strong></div></div><div class="legend"><span><i class="dot" style="background:#6366f1"></i>${a}</span><span><i class="dot" style="background:#18bf8f"></i>${b}</span></div></div></div>`;
}

function lineChart() {
  const pts = "10,255 120,255 230,255 340,255 450,255 560,255 670,255 780,255 890,254 1000,45 1100,80 1220,42";
  return `<svg class="chart" viewBox="0 0 1280 330" preserveAspectRatio="none">
    ${[50,100,150,200,250].map(y => `<line class="gridline" x1="40" x2="1240" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="40" x2="1240" y1="255" y2="255"/>
    <polyline points="${pts}" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <polyline points="10,255 920,255 1010,244 1110,220 1220,204" fill="none" stroke="#ff4747" stroke-width="3"/>
    <polyline points="10,255 920,255 1010,250 1110,238 1220,242" fill="none" stroke="#18bf8f" stroke-width="3"/>
    ${["Sep 2...","Nov 2...","Jan 2...","Mar 2...","May 2...","Jul 2...","Sep 2...","Nov 2...","Jan 2...","Mar 2...","May 2..."].map((m,i)=>`<text x="${40+i*118}" y="292">${m}</text>`).join("")}
  </svg>`;
}

function barChart(type = "normal") {
  const values = type === "stacked" ? [130, 260, 278] : [0,0,0,0,0,0,24,15,41,53,22,0];
  const labels = type === "stacked" ? ["Feb 2026","Mar 2026","Apr 2026"] : ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];
  return `<svg class="chart" viewBox="0 0 1180 320" preserveAspectRatio="none">
    ${[70,120,170,220,270].map(y => `<line class="gridline" x1="45" x2="1140" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="45" x2="1140" y1="270" y2="270"/>
    ${values.map((v, i) => {
      const h = v / (type === "stacked" ? 300 : 60) * 220;
      const x = type === "stacked" ? 170 + i * 360 : 65 + i * 90;
      const w = type === "stacked" ? 180 : 46;
      const extra = type === "stacked" ? `<rect x="${x}" y="${270 - h}" width="${w}" height="${h}" rx="5" fill="#37ce99"/><rect x="${x}" y="${270 - Math.max(18,h*.25)}" width="${w}" height="${Math.max(18,h*.25)}" rx="5" fill="#7c83f6"/>` : `<rect x="${x}" y="${270-h}" width="${w}" height="${h}" rx="5" fill="#5592f6"/><text x="${x+w/2-5}" y="${260-h}">${v}</text>`;
      return `${extra}<text x="${x}" y="304">${labels[i]}</text>`;
    }).join("")}
  </svg>`;
}

function searchTable(rows) {
  return `<table class="table"><thead><tr><th>#</th><th>Search Term</th><th>Type</th><th>Impressions</th></tr></thead><tbody>${rows.slice(0, 12).map((row, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(row.term)}</td><td>${row.isBrand ? '<span class="badge">BRAND</span>' : '<span class="badge">DISCOVERY</span>'}</td><td>${formatNumber(row.impressions)}</td></tr>`).join("")}</tbody></table>`;
}

function reviewAnalyticsSections() {
  const summary = getSummary();
  const monthly = reviewsByMonth();
  const sources = reviewSources();
  return `<div class="grid two-grid section">
    <div class="card card-pad"><h2>Response Rate</h2><div class="metric-lite"><strong>${summary.responseRate}%</strong><p>Based on ${summary.total} review${summary.total === 1 ? "" : "s"} in ${state.period}</p></div></div>
    <div class="card card-pad"><h2>Rating Summary</h2><div class="search-stats" style="text-align:center"><div><strong style="font-size:34px;color:#f59e0b">${summary.average.toFixed(1)}</strong><p>Current Rating</p></div><div><strong style="font-size:34px;color:#373ba3">${summary.total}</strong><p>Total Reviews</p></div><div><strong style="font-size:34px;color:#373ba3">${summary.needsResponse}</strong><p>Need Response</p></div></div></div>
  </div>
  <div class="card card-pad section"><h2>Review Velocity</h2>${reviewVelocityChart(monthly)}</div>
  <div class="card card-pad section"><h2>Review Sources</h2>${sources.length ? sourceList(sources) : `<div class="empty-inline">No review source data available for this period.</div>`}</div>`;
  return `<div class="grid two-grid section">
    <div class="card card-pad"><h2>Response Rate</h2>${lineMini()}</div>
    <div class="card card-pad"><p>Since joining on Mar 19, 2026</p><div class="search-stats" style="text-align:center"><div><strong style="font-size:34px;color:#f59e0b">4.9</strong><p>Current Rating</p></div><div><strong style="font-size:34px;color:#373ba3">+0.0</strong><p>Increase</p></div><div><strong style="font-size:34px;color:#373ba3">90</strong><p>New Reviews</p></div></div>${barChart()}</div>
  </div>
  <div class="card card-pad section"><h2>Review Velocity</h2>${barChart()}<div class="search-stats" style="text-align:center"><div><strong>12.9</strong><p>Avg/Month</p></div><div><strong>155</strong><p>Total (12m)</p></div><div><strong>53</strong><p>Best: Apr</p></div></div></div>
  <div class="card card-pad section"><h2>Review Sources</h2><div class="grid two-grid"><div class="donut-wrap"><div class="donut" style="background:conic-gradient(#6366f1 0 97%, #18bf8f 97% 99%, #f59e0b 99% 100%)"><div class="donut-center">Total<strong>157</strong></div></div></div><div style="align-self:center">${sourceLine("Google", 152, 97, "#6366f1")}${sourceLine("Private Feedback", 3, 2, "#f59e0b")}${sourceLine("Facebook", 2, 1, "#18bf8f")}</div></div></div>`;
}

function lineMini() {
  return `<svg class="chart" viewBox="0 0 500 320" preserveAspectRatio="none">
    ${[70,130,190,250].map(y => `<line class="gridline" x1="40" x2="470" y1="${y}" y2="${y}"/>`).join("")}
    <path d="M45 70 C90 120,95 180,130 160 S170 45,205 72 S290 75,320 90 S360 100,390 95 S430 290,455 300" fill="none" stroke="#3b82f6" stroke-width="4"/>
    <line x1="40" x2="470" y1="100" y2="100" stroke="#373ba3" stroke-width="3" stroke-dasharray="8 8"/>
    ${["Jan","Feb","Mar","Apr","May","Jun"].map((m,i)=>`<text x="${42+i*78}" y="300">${m}</text>`).join("")}
  </svg>`;
}

function sourceLine(name, count, pct, color) {
  return `<div style="margin:18px 0"><strong>${name}<span style="float:right">${count}</span></strong><div class="progress" style="background:#edf1f6;margin-top:8px"><span style="width:${pct}%;background:${color}"></span></div><span class="muted">${pct}%</span></div>`;
}

function countReviewsBetween(daysAgoStart, daysAgoEnd) {
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() - daysAgoStart);
  const end = new Date(now);
  end.setDate(end.getDate() - daysAgoEnd);
  return (liveData.reviews || []).filter(review => {
    const date = new Date(review[9]);
    return !Number.isNaN(date.getTime()) && date >= start && date < end;
  }).length;
}

function ratingStars(value) {
  const filled = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
  return "&#9733;".repeat(filled) + "&#9734;".repeat(5 - filled);
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-US");
}

function formatMoney(value) {
  return `$${Number(value || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

function reviewsNeededForDisplayedRating(average, total) {
  const count = Number(total || 0);
  const currentAverage = Number(average || 0);
  if (!count || currentAverage >= 4.95) return 0;
  const currentPoints = currentAverage * count;
  return Math.max(0, Math.ceil(((4.95 * count) - currentPoints) / 0.05));
}

function getNumericSetting(keys) {
  const allowed = keys.map(key => key.toLowerCase());
  const row = (liveData.appSettings || []).find(setting => {
    const key = String(setting.key || setting.name || setting.setting || setting.setting_key || "").toLowerCase();
    return allowed.includes(key);
  });
  const value = row?.value ?? row?.setting_value ?? row?.number_value ?? row?.amount;
  return Number(value || 0) || 0;
}

function performanceTable() {
  const rows = getPerformanceRows().slice(0, 12);
  return `<table class="table"><thead><tr><th>Date</th><th>Metric</th><th>Value</th></tr></thead><tbody>${rows.map(row => {
    const rawMetric = row.metric_name || row.metric || row.name || "Metric";
    return `<tr><td>${row.metric_date || row.date || ""}</td><td>${metricLabel(rawMetric)}</td><td>${formatNumber(metricValue(row))}</td></tr>`;
  }).join("")}</tbody></table>`;
}

function performanceTrendChart() {
  const rows = getPerformanceRows();
  const byMetric = groupMetricSeries(rows);
  const series = [
    ["impressions", "#6b6cf6", ["impressions", "business_impressions", "business_impressions_desktop_search", "business_impressions_mobile_search", "business_impressions_desktop_maps", "business_impressions_mobile_maps"]],
    ["website", "#ff4747", ["website_clicks", "website clicks", "business_website_clicks"]],
    ["directions", "#f59e0b", ["directions", "direction_requests", "business_direction_requests"]],
    ["calls", "#18bf8f", ["calls", "call_clicks", "business_conversations"]]
  ];
  const allDates = [...new Set(rows.map(row => row.metric_date || row.date || row.created_at).filter(Boolean))].sort();
  const max = chartMax(allDates, byMetric, series.map(([, , aliases]) => aliases));
  const labels = allDates.length ? allDates : ["Start", "", "", "", "Now"];
  return `<svg class="chart performance-chart" viewBox="0 0 1280 330" preserveAspectRatio="none">
    <defs><clipPath id="performanceChartClip"><rect x="40" y="35" width="1200" height="220" rx="0"/></clipPath></defs>
    ${[50,100,150,200,250].map(y => `<line class="gridline" x1="40" x2="1240" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="40" x2="1240" y1="255" y2="255"/>
    <g clip-path="url(#performanceChartClip)">
    ${series.map(([name, color, aliases]) => {
      const points = chartPoints(allDates, byMetric, aliases, max);
      return points ? `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="3"/>` : "";
    }).join("")}
    </g>
    ${chartHoverAreas(allDates, byMetric, series)}
    ${labels.slice(0, 10).map((m,i)=>`<text x="${40+i*(1180/Math.max(1, labels.slice(0, 10).length - 1))}" y="292">${String(m).slice(0, 10)}</text>`).join("")}
    ${rows.length ? "" : `<text x="520" y="160" class="chart-empty">No GBP analytics rows yet</text>`}
  </svg>`;
}

function groupMetricSeries(rows) {
  return rows.reduce((map, row) => {
    const metric = String(row.metric_name || row.metric || row.name || "").toLowerCase();
    const date = row.metric_date || row.date || row.created_at;
    if (!metric || !date) return map;
    map[metric] = map[metric] || {};
    map[metric][date] = (map[metric][date] || 0) + metricValue(row);
    return map;
  }, {});
}

function chartPoints(dates, byMetric, aliases, max) {
  if (!dates.length) return "";
  const lowerAliases = aliases.map(alias => alias.toLowerCase());
  const values = dates.map(date => lowerAliases.reduce((sum, alias) => sum + (byMetric[alias]?.[date] || 0), 0));
  if (!values.some(Boolean)) return "";
  return values.map((value, index) => {
    const x = 40 + index * (1180 / Math.max(1, dates.length - 1));
    const y = Math.max(35, Math.min(255, 255 - (value / max) * 210));
    return `${x},${y}`;
  }).join(" ");
}

function chartMax(dates, byMetric, aliasGroups) {
  const totals = aliasGroups.flatMap(aliases => {
    const lowerAliases = aliases.map(alias => alias.toLowerCase());
    return dates.map(date => lowerAliases.reduce((sum, alias) => sum + (byMetric[alias]?.[date] || 0), 0));
  });
  return Math.max(1, ...totals);
}

function chartHoverAreas(dates, byMetric, series) {
  if (!dates.length) return "";
  const step = 1180 / Math.max(1, dates.length - 1);
  const width = Math.max(8, step);
  return dates.map((date, index) => {
    const x = 40 + index * step - width / 2;
    const values = series.map(([name, color, aliases]) => {
      const value = aliases
        .map(alias => alias.toLowerCase())
        .reduce((sum, alias) => sum + (byMetric[alias]?.[date] || 0), 0);
      return `data-${name}="${value}" data-${name}-color="${color}"`;
    }).join(" ");
    return `<rect class="chart-hover-zone" x="${Math.max(40, x)}" y="35" width="${Math.min(width, 1240 - Math.max(40, x))}" height="220" data-date="${escapeHtml(date)}" ${values}/>`;
  }).join("");
}

function breakdownCard(title, sub, type) {
  const segments = type === "device"
    ? [
        ["Desktop", "#6366f1", ["business_impressions_desktop_search", "business_impressions_desktop_maps", "desktop"]],
        ["Mobile", "#f59e0b", ["business_impressions_mobile_search", "business_impressions_mobile_maps", "mobile"]]
      ]
    : [
        ["Google Search", "#6366f1", ["business_impressions_desktop_search", "business_impressions_mobile_search", "search"]],
        ["Google Maps", "#18bf8f", ["business_impressions_desktop_maps", "business_impressions_mobile_maps", "maps"]]
      ];
  const values = segments.map(([label, color, aliases]) => ({
    label,
    color,
    value: sumPerformanceMetrics(aliases)
  }));
  const total = values.reduce((sum, item) => sum + item.value, 0);
  const bg = total ? donutGradient(values, total) : "conic-gradient(#e7ebf2 0 100%)";
  return `<div class="card card-pad"><h3>${title}</h3><p>${sub}</p><div class="donut-wrap"><div class="donut interactive-donut" style="background:${bg}" ${donutTooltipData(title, values, total)}><div class="donut-center">Total<strong>${formatNumber(total)}</strong></div></div><div class="legend donut-legend">${values.map(item => {
    const percent = total ? Math.round((item.value / total) * 100) : 0;
    return `<span><i class="dot" style="background:${item.color}"></i>${item.label} <b>${formatNumber(item.value)} (${percent}%)</b></span>`;
  }).join("")}</div>${total ? "" : `<div class="empty-inline">Waiting for matching GBP breakdown metrics.</div>`}</div></div>`;
}

function donutTooltipData(title, values, total) {
  const attrs = [
    `data-donut-title="${escapeHtml(title)}"`,
    `data-donut-total="${total}"`,
    `data-donut-count="${values.length}"`
  ];
  values.forEach((item, index) => {
    attrs.push(`data-donut-label${index}="${escapeHtml(item.label)}"`);
    attrs.push(`data-donut-value${index}="${item.value}"`);
    attrs.push(`data-donut-color${index}="${escapeHtml(item.color)}"`);
  });
  return attrs.join(" ");
}

function sumPerformanceMetrics(aliases) {
  const allowed = aliases.map(alias => alias.toLowerCase());
  return getPerformanceRows()
    .filter(row => {
      const metric = String(row.metric_name || row.metric || row.name || "").toLowerCase();
      return allowed.some(alias => metric === alias || metric.includes(alias));
    })
    .reduce((sum, row) => sum + metricValue(row), 0);
}

function donutGradient(values, total) {
  let start = 0;
  const stops = values.map(item => {
    const end = start + (item.value / total) * 100;
    const stop = `${item.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
    start = end;
    return stop;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

function reviewsByMonth() {
  const map = new Map();
  getReviews().forEach(review => {
    const date = new Date(review[9]);
    if (Number.isNaN(date.getTime())) return;
    const key = date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
    map.set(key, (map.get(key) || 0) + 1);
  });
  return [...map.entries()].reverse();
}

function reviewVelocityChart(rows) {
  if (!rows.length) {
    return `<svg class="chart" viewBox="0 0 1180 320" preserveAspectRatio="none">
      ${[70,120,170,220,270].map(y => `<line class="gridline" x1="45" x2="1140" y1="${y}" y2="${y}"/>`).join("")}
      <line class="axis" x1="45" x2="1140" y1="270" y2="270"/>
      <text x="500" y="160" class="chart-empty">No review rows for this period</text>
    </svg>`;
  }
  const max = Math.max(...rows.map(row => row[1]), 1);
  return `<div class="velocity-bars">${rows.map(([label, count]) => `<div><div class="velocity-bar"><span style="height:${Math.max(8, (count / max) * 180)}px"></span></div><strong>${count}</strong><p>${label}</p></div>`).join("")}</div>`;
}

function reviewSources() {
  const counts = new Map();
  getReviews().forEach(review => counts.set(review[2], (counts.get(review[2]) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function sourceList(sources) {
  const total = sources.reduce((sum, source) => sum + source[1], 0) || 1;
  return `<div>${sources.map(([name, count], index) => {
    const colors = ["#6366f1", "#18bf8f", "#f59e0b", "#9a50ff"];
    const pct = Math.round((count / total) * 100);
    return sourceLine(name, count, pct, colors[index % colors.length]);
  }).join("")}</div>`;
}

function countBy(rows, getter) {
  return rows.reduce((counts, row) => {
    const key = getter(row);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function normalizeStatus(status) {
  return String(status || "waiting").toLowerCase().replace(/[\s-]+/g, "_");
}

function emptyTable(message) {
  return `<div class="card-pad empty-inline">${message}</div>`;
}

function inviteeTable(rows) {
  return `<table class="table"><thead><tr><th></th><th>Customer (Invitee)</th><th>Status</th><th>Recent Activity</th></tr></thead><tbody>${rows.map(row => {
    const name = row.name || row.customer_name || row.full_name || row.email || "Invitee";
    const email = row.email || "";
    const phone = row.phone || row.phone_number || "";
    const status = row.status || "Waiting";
    const activity = row.recent_activity || row.last_activity || row.updated_at || row.created_at || "";
    return `<tr><td><input type="checkbox" disabled></td><td><strong>${escapeHtml(name)}</strong><br><span class="muted">${escapeHtml(email)}${phone ? `<br>${escapeHtml(phone)}` : ""}</span></td><td><span class="badge">${escapeHtml(status)}</span></td><td>${escapeHtml(String(activity))}</td></tr>`;
  }).join("")}</tbody></table>`;
}

function campaignCard(row) {
  const name = row.name || row.campaign_name || "Review Campaign";
  const sent = Number(row.sent || row.total_sent || 0);
  const opened = Number(row.opened || row.total_opened || 0);
  const clicked = Number(row.clicked || row.clicks || 0);
  const reviews = Number(row.reviews || row.review_count || 0);
  const rating = Number(row.rating || row.average_rating || 0);
  return `<div class="card card-pad section"><div style="display:flex;justify-content:space-between;gap:20px"><div><h3>${escapeHtml(name)}</h3><span class="badge">${escapeHtml(row.status || "Draft")}</span> <span class="muted">${formatReviewDate(row.created_at)}</span></div><button class="button green" disabled>Edit</button></div>
  <div class="kpi-row">${[
    `${sent}|Sent`,
    `${opened}|Opened`,
    `${clicked}|Clicked`,
    `${reviews}|Reviews`,
    `${Number(row.opt_out || row.optouts || 0)}|Opt-out`,
    `${rating ? rating.toFixed(1) : "-"}|Rating`
  ].map(x=>{const [a,b]=x.split("|");return `<div class="card kpi"><strong>${a}</strong><p>${b}</p></div>`}).join("")}</div></div>`;
}

function formCard(row) {
  const name = row.name || row.form_name || "Feedback Form";
  return `<div class="card"><div class="form-card-preview"><div class="mini-form"><strong>${escapeHtml(name)}</strong><p>${escapeHtml(row.description || "Feedback form synced from Supabase.")}</p><div class="stars" style="color:#b8bec8">&#9733;&#9733;&#9733;&#9733;&#9733;</div><small>Powered by Airtime Heating Cooling and Air</small></div></div><div class="card-pad"><h3>${escapeHtml(name)}</h3><p>${formatReviewDate(row.created_at)}</p><div class="grid two-grid" style="margin-top:16px;gap:8px"><button class="button primary" disabled>Edit</button><button class="button" disabled>Install</button></div></div></div>`;
}

function qrCard(row) {
  const name = row.name || row.qr_name || "QR Code";
  const scans = Number(row.scans || row.scan_count || 0);
  const reviews = Number(row.reviews || row.review_count || 0);
  return `<div class="card card-pad"><div class="soft-icon blue" style="width:44px;height:44px">${icons.qr}</div><h3 style="margin-top:14px">${escapeHtml(name)}</h3><p>${escapeHtml(row.destination || row.url || "No destination saved")}</p><div class="kpi-row" style="grid-template-columns:1fr 1fr;margin-bottom:0"><div class="card kpi"><strong>${scans}</strong><p>Scans</p></div><div class="card kpi"><strong>${reviews}</strong><p>Reviews</p></div></div></div>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function recentReviews() {
  const activeReviews = getReviews();
  const body = activeReviews.length
    ? `${activeReviews.map(r => reviewCard(r, true)).join("")}<button class="button" style="width:100%;margin-top:12px">Load More Reviews</button>`
    : `<div class="card card-pad empty-inline">No reviews found in Supabase yet.</div>`;
  return `<section class="section"><h2>Recent Reviews</h2>${body}</section>`;
}

function analyticsTab() {
  const summary = getSummary();
  const campaigns = liveData.campaigns || [];
  const invitees = liveData.invitees || [];
  const sent = summary.reviewRequestsSent || countMatching(invitees, ["sent", "invite_sent", "opened", "completed"]);
  const opened = countMatching(invitees, ["opened", "completed"]);
  const completed = countMatching(invitees, ["completed", "review_attempted"]);
  const successRate = summary.inviteConversion || (sent ? Math.round((completed / sent) * 1000) / 10 : 0);
  return `${head("Good Evening!", "See how your review requests are performing and get more reviews.", "analytics")}
  ${dataNotice()}
  <div class="card card-pad"><h2>How Are We Doing? <span class="badge">${state.period}</span></h2><div class="grid stat-grid section">
    ${metric("Review Requests Sent", String(sent), "", "blue", "share")}
    ${metric("Reviews Received", String(summary.total), "", "green", "chat")}
    ${metric("Request Conversion", `${successRate}%`, "", "purple", "trend")}
    ${metric("Opened", String(opened), "", "blue", "trend")}
  </div></div>
  <div class="card card-pad section"><h2>What's Working Best? <span class="badge">${state.period}</span></h2><div class="grid stat-grid section">
    ${channel("Email Campaigns", countChannel(invitees, "email"))}
    ${channel("QR Code Scans", (liveData.qrCodes || []).reduce((sum, row) => sum + Number(row.scans || row.scan_count || 0), 0))}
    ${channel("SMS Campaigns", countChannel(invitees, "sms"))}
    ${channel("Direct Form Visits", (liveData.forms || []).reduce((sum, row) => sum + Number(row.visits || row.visit_count || 0), 0))}
  </div></div>
  <div class="card card-pad section"><h2>Campaign Activity Insights <span class="badge">${state.period}</span></h2><p>Track how your email, SMS and WhatsApp campaigns are performing</p>${campaigns.length ? campaigns.map(campaignCard).join("") : emptyChart("No campaign rows in Supabase yet.")}</div>
  <div class="card card-pad section"><h2>Where Customers Are Sent for Reviews <span class="badge">${state.period}</span></h2>${emptyBarChart("Waiting for review destination events from GHL.")}</div>
  <div class="card card-pad section"><h2>When Are Customers Visiting Review Forms? <span class="badge">${state.period}</span></h2>${emptyLineChart("Waiting for form visit events.")}<div class="notice" style="background:#eaf3ff;color:#2357c5">This will show when customers are most active on review forms once form events are synced.</div></div>
  <div class="card card-pad section"><h2>Review Activity Over Time <span class="badge">${state.period}</span></h2>${reviewVelocityChart(reviewsByMonth())}<div class="notice" style="background:#f8fafc;color:#4b5870">Bars come from Supabase review dates. GHL redirects can be added once campaign event rows exist.</div></div>`;
}
function countMatching(rows, statuses) {
  const allowed = statuses.map(status => status.toLowerCase());
  return rows.filter(row => allowed.includes(normalizeStatus(row.status))).length;
}

function countChannel(rows, channelName) {
  return rows.filter(row => String(row.channel || row.type || "").toLowerCase() === channelName).length;
}

function emptyChart(message) {
  return `<div class="empty-inline chart-note">${message}</div>`;
}

function emptyBarChart(message) {
  return `<svg class="chart" viewBox="0 0 1180 320" preserveAspectRatio="none">
    ${[70,120,170,220,270].map(y => `<line class="gridline" x1="45" x2="1140" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="45" x2="1140" y1="270" y2="270"/>
    <text x="460" y="160" class="chart-empty">${message}</text>
  </svg>`;
}

function emptyLineChart(message) {
  return `<svg class="chart" viewBox="0 0 1180 320" preserveAspectRatio="none">
    ${[70,120,170,220,270].map(y => `<line class="gridline" x1="45" x2="1140" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="45" x2="1140" y1="270" y2="270"/>
    <text x="470" y="160" class="chart-empty">${message}</text>
  </svg>`;
}

function channel(title, visits) {
  return `<div class="card card-pad"><h3>${title}</h3><div style="margin-top:22px"><p>Success Rate <strong style="float:right;color:#101828">0%</strong></p><p style="margin-top:12px">Visits <strong style="float:right;color:#101828">${visits}</strong></p><p style="margin-top:12px">Clicks to Review Sites <strong style="float:right;color:#101828">0</strong></p><div class="progress" style="margin-top:16px;background:#e5e7eb"><span style="width:0"></span></div></div></div>`;
}

function delivery(name, attempts, rate, delivered, failed, engaged, engagement) {
  return `<div class="card card-pad"><div style="display:flex;justify-content:space-between"><div><h3>${name}</h3><p>${attempts}</p></div><div class="value" style="font-size:32px">${rate}<p>Delivery Rate</p></div></div><p style="margin-top:18px">Delivered <strong class="positive" style="float:right">${delivered}</strong></p><p style="margin-top:14px">Failed <strong class="negative" style="float:right">${failed}</strong></p><p style="margin-top:14px">Engaged <strong style="float:right;color:#2563eb">${engaged}</strong></p><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><p>Engagement Rate <strong style="float:right;color:#2563eb">${engagement}</strong></p><div class="progress" style="margin-top:10px;background:#e5e7eb"><span style="width:${parseFloat(engagement)*2.5}%;background:#4f46e5"></span></div></div>`;
}

function qrAnalyticsTab() {
  return `${head("QR Code Analytics", "Track how your QR codes are performing and directing customers to leave reviews.", "qr")}
  <div class="empty-state"><div><div class="soft-icon blue" style="margin:0 auto 26px;width:78px;height:78px">${icons.qr}</div><h2>No QR Codes Yet</h2><p>Create your first QR code to start tracking how customers<br>are finding and leaving reviews.</p><button class="button primary" style="margin-top:26px">+ Create QR Code</button></div></div>`;
}

function reviewsPage() {
  const summary = getSummary();
  const activeReviews = getReviews();
  const chips = ["Flagged 0", `Needs Response ${summary.needsResponse}`, `Bad Reviews ${summary.bad}`, "Private Feedback 0"];
  const reviewsBody = activeReviews.length
    ? activeReviews.map(r => reviewCard(r)).join("")
    : `<div class="card card-pad empty-inline">No reviews found in Supabase yet.</div>`;
  return `<div class="page-head"><h1>Reviews</h1></div>
    ${dataNotice()}
    <div class="filter-row"><input class="search" placeholder="Search reviews..."><strong>${summary.total} <span class="muted">reviews</span></strong><span style="flex:1"></span><button class="button">Export (${summary.total})</button><button class="button primary">+ Add Reviews</button></div>
    <div class="filter-row">${chips.map(x=>`<button class="chip">${x}</button>`).join("")}</div>
    <div class="reviews-layout">
      <aside class="card filters"><strong>Filters</strong><label>Sources</label><div class="select-like">Nothing Selected</div><label>Tags</label><div class="select-like">Nothing Selected</div><label>Rating</label><div class="rating-filter">${[5,4,3,2,1].map(n=>`<button>&#9733;<br>${n}</button>`).join("")}</div><label>Time Period</label><div class="date-like">Date</div><label>Response Status</label><div class="dual-filter"><button>&#10003; Responded</button><button>Pending</button></div><label>Visibility</label><div class="dual-filter"><button>Visible</button><button>Hidden</button></div><label>Review Content</label><div class="dual-filter"><button>With Text</button><button>Rating Only</button></div></aside>
      <section>${reviewsBody}</section>
    </div>`;
}

function reviewCard(r, compact = false) {
  const filledStars = "&#9733;".repeat(Math.max(0, Math.min(5, Number(r[3]))));
  const emptyStars = "&#9734;".repeat(Math.max(0, 5 - Math.min(5, Number(r[3]))));
  const stars = filledStars + emptyStars;
  const privateBadge = r[2] === "Private Feedback" ? '<span class="badge" style="color:#2f80ff">&#128274; Private Feedback</span>' : "";
  const actionHtml = r[5] === "Respond"
    ? '<button class="button green">Respond</button>'
    : '<span class="status-pill">&#10003; Replied</span>';
  return `<article class="card review-card">
    <div><div class="review-top"><div class="avatar">${r[6]}</div><div><h3>${r[0]} ${privateBadge}</h3><p>${r[1]} via ${r[2]}</p><div class="review-stars">${stars} <span class="muted">${r[3]}</span></div>${!compact ? `<p style="margin-top:14px;color:#465366">${r[4]}</p><div class="reply-box">${r[8] || `Thank you for the ${r[3]}-star review. We're glad we could help and appreciate you sharing your experience.`}</div>` : ""}<p style="margin-top:18px"><span class="dot" style="background:#22c55e"></span>Positive</p></div></div></div>
    <div class="review-actions">${actionHtml}</div>
  </article>`;
}

function campaignInsightsPage() {
  state.tab = "analytics";
  return analyticsTab();
}

function inviteesPage() {
  const invitees = liveData.invitees || [];
  const counts = countBy(invitees, row => normalizeStatus(row.status));
  return `<div class="page-head"><h1>Invitees</h1></div>
  ${dataNotice()}
  <div class="card card-pad"><p><strong>SUPABASE INVITEE DATA</strong></p><p>${invitees.length ? "Showing invitees from Supabase." : "No invitee rows found yet. Create/sync an invitees table from GHL to populate this page."}</p></div>
  <div class="kpi-row">${[
    `${invitees.length}|Total`,
    `${counts.waiting || 0}|Waiting`,
    `${counts.sent || 0}|Sent`,
    `${counts.opened || 0}|Opened`,
    `${counts.completed || 0}|Completed`,
    `${counts.issue || counts.issues || 0}|Issues`
  ].map(x=>{const [a,b]=x.split("|");return `<div class="card kpi"><strong>${a}</strong><p>${b}</p></div>`}).join("")}</div>
  <div class="filter-row"><input class="search" placeholder="Search name, email, phone..." data-search-table="invitees"><strong>${invitees.length} invitees</strong><span style="flex:1"></span><button class="button" disabled>Export</button><button class="button primary" disabled>+ Invite</button></div>
  <div class="card invite-table">${invitees.length ? inviteeTable(invitees) : emptyTable("No invitees in Supabase yet.")}</div>`;
  const names = ["David Tichich", "Jason Foraker", "Silvestre Flores", "Paola Jungbluth", "Will Valencia", "Mark Szerlip"];
  return `<div class="page-head"><h1>Invitees</h1></div>
  <div class="card card-pad"><p><strong>ESTIMATED CREDIT USAGE</strong></p><p>Email <span style="float:right">879 remaining after sends</span></p><div class="progress"><span style="width:3%;background:#3b82f6"></span></div><p style="margin-top:12px">SMS <span style="float:right">990 remaining after sends</span></p><div class="progress"><span style="width:1%;background:#22c55e"></span></div></div>
  <div class="kpi-row">${["304|Total","0|Waiting","248|Sent","10|Opened","42|Completed","6|Issues"].map(x=>{const [a,b]=x.split("|");return `<div class="card kpi"><strong>${a}</strong><p>${b}</p></div>`}).join("")}</div>
  <div class="actions-row"><button class="chip" style="background:var(--indigo);color:white">All</button><button class="chip">Waiting</button><button class="chip">Sent</button><button class="chip">Opened</button><button class="chip">Completed</button><button class="chip">Issues</button></div>
  <div class="filter-row"><input class="search" placeholder="Search name, email, phone..."><strong>304 invitees</strong><span style="flex:1"></span><button class="button">Export (304)</button><button class="button primary">+ Invite</button></div>
  <div class="card invite-table"><table class="table"><thead><tr><th></th><th>Customer (Invitee)</th><th>Status</th><th>Recent Activity</th></tr></thead><tbody>${names.map((n,i)=>`<tr><td></td><td><strong>${n}</strong><br><span class="muted">${n.split(" ")[0].toLowerCase()}@gmail.com<br>+1951${2000000+i*5311}</span></td><td><span class="badge">${i===0?"Not Sent":i===3?"Review Attempted":"Invite Sent"}</span></td><td>${i===0?"Not Sent 51 seconds ago":"Invite Sent "+(i+1)*6+" minutes ago"}</td></tr>`).join("")}</tbody></table></div>`;
}

function requestReviewsPage() {
  const campaigns = liveData.campaigns || [];
  return `<div class="page-head"><h1>Request Reviews</h1></div>
  ${dataNotice()}
  <div class="filter-row"><input class="search" placeholder="Search campaigns..." data-search-table="campaigns"><span style="flex:1"></span><button class="button dark" disabled>+ New Campaign</button></div>
  ${campaigns.length ? campaigns.map(campaignCard).join("") : `<div class="card card-pad empty-inline"><h2>No campaigns found in Supabase</h2><p>Sync GHL campaign/request-review records into a <strong>campaigns</strong> table to make this page live.</p></div>`}`;
  return `<div class="page-head"><h1>Request Reviews</h1></div><div class="filter-row"><input class="search" placeholder="Search campaigns..."><span style="flex:1"></span><button class="button dark">+ New Campaign</button></div>
  <div class="card card-pad"><div style="display:flex;justify-content:space-between;gap:20px"><div><h3>Review Campaign</h3><span class="badge" style="background:#dcfce7;color:#16a34a">Active</span> <span class="muted">Created 2 months ago</span></div><button class="button green">Edit</button></div>
  <div class="kpi-row">${["304|Sent","0|0% opened","98|32% clicked","49|Reviews","4|Opt-out","4.0 &#9733;|Rating"].map(x=>{const [a,b]=x.split("|");return `<div class="card kpi"><strong>${a}</strong><p>${b}</p></div>`}).join("")}</div>
  <div class="actions-row"><button class="button">Opt-in Page</button><button class="button">Copy</button><button class="button">Schedule</button><button class="button primary">Send Now</button></div></div>`;
}

function feedbackFormsPage() {
  const forms = liveData.forms || [];
  return `<div class="page-head"><h1>Feedback Forms</h1></div>
  ${dataNotice()}
  <div class="filter-row"><input class="search" placeholder="Search forms..." data-search-table="forms" style="width:360px"><span style="flex:1"></span><button class="button primary" disabled>+ Create Form</button></div>
  <div class="form-grid">${forms.length ? forms.map(formCard).join("") : `<div class="card card-pad empty-inline"><h2>No feedback forms found</h2><p>Create/sync rows in <strong>feedback_forms</strong> to show real forms here.</p></div>`}<div class="create-tile"><div><div class="soft-icon" style="margin:0 auto 16px">+</div><h3>Create Form</h3><p>Connect Supabase insert logic before enabling this.</p></div></div></div>`;
  return `<div class="page-head"><h1>Feedback Forms</h1></div><div class="filter-row"><input class="search" placeholder="Search forms..." style="width:360px"><span style="flex:1"></span><button class="button primary">+ Create Form</button></div>
  <div class="form-grid"><div class="card"><div class="form-card-preview"><div class="mini-form"><strong>How would you rate us?</strong><p>Please take a moment to review your experience with us.</p><div class="stars" style="color:#b8bec8">&#9733;&#9733;&#9733;&#9733;&#9733;</div><small>Powered by Airtime Heating Cooling and Air</small></div></div><div class="card-pad"><h3>Default</h3><p>19 Mar 2026</p><div class="grid two-grid" style="margin-top:16px;gap:8px"><button class="button primary">Edit</button><button class="button">&lt;/&gt; Install</button></div></div></div><div class="create-tile"><div><div class="soft-icon" style="margin:0 auto 16px">+</div><h3>Create Form</h3><p>Capture feedback from another channel.</p></div></div></div>`;
}

function qrCodesPage() {
  const qrCodes = liveData.qrCodes || [];
  return `<div class="page-head"><h1>QR Codes</h1></div>
  ${dataNotice()}
  ${qrCodes.length ? `<div class="grid stat-grid">${qrCodes.map(qrCard).join("")}</div>` : `<div class="empty-state" style="min-height:620px"><div style="width:100%;max-width:850px"><div class="soft-icon blue" style="margin:0 auto 24px;width:58px;height:58px">${icons.qr}</div><h2>No QR Codes in Supabase Yet</h2><p>Sync or create rows in a <strong>qr_codes</strong> table to show real QR code records, scan counts, and conversion data here.</p><button class="button primary" style="margin-top:28px" disabled>Create QR Code after backend is connected</button></div></div>`}`;
  return `<div class="page-head"><h1>QR Codes</h1></div><div class="empty-state" style="min-height:760px"><div style="width:100%;max-width:1350px"><div class="soft-icon blue" style="margin:0 auto 24px;width:58px;height:58px">${icons.qr}</div><h2>Start Collecting Reviews with QR Codes</h2><p>QR codes make it super easy for customers to leave reviews. Simply scan and go - no<br>typing required!</p><div class="feature-row">${feature("Lightning Fast","Customers scan and review in seconds. No typing, no hassle - just point and shoot!","green")}${feature("Prevent Negative Reviews","Direct unhappy customers to private feedback forms instead of public review sites.","blue")}${feature("Track Performance","See exactly how many scans each QR code gets and which ones drive the most reviews.","purple")}</div><div class="card card-pad"><h2 style="text-align:left">Perfect for:</h2><div class="perfect section"><div><strong>Restaurants</strong></div><div><strong>Retail Stores</strong></div><div><strong>Service Businesses</strong></div><div><strong>Hotels</strong></div></div></div><button class="button primary" style="margin-top:48px;height:56px;font-size:18px">Create Your First QR Code</button><p style="margin-top:14px">Get started in less than 2 minutes</p></div></div>`;
}

function feature(title, text, color) {
  return `<div class="card card-pad" style="text-align:left"><div class="soft-icon ${color}" style="width:38px;height:38px">+</div><h3 style="margin-top:14px">${title}</h3><p style="margin-top:18px">${text}</p></div>`;
}

function autoRespondPage() {
  const rules = liveData.autoResponses || [];
  return `<div class="page-head"><h1>Auto Respond</h1><p>Manage review response rules and reply templates.</p></div>
    ${dataNotice()}
    <div class="grid two-grid">
      <div class="card card-pad"><h2>Response Rules</h2>${rules.length ? rules.map(rule => `<div class="source-row"><strong>${escapeHtml(rule.name || rule.rating_label || "Rule")}</strong><span class="badge">${escapeHtml(rule.status || "Draft")}</span></div>`).join("") : `<div class="empty-inline">No auto-response rules in Supabase yet. Add rows to <strong>auto_responses</strong>.</div>`}</div>
      <div class="card card-pad"><h2>Responder Status</h2><div class="metric-lite"><strong>${rules.filter(rule => String(rule.status).toLowerCase() === "active").length}</strong><p>Active rules</p></div></div>
    </div>`;
}

function socialProofPage() {
  const widgets = liveData.socialProof || [];
  return `<div class="page-head"><h1>Social Proof</h1><p>Display review widgets and testimonial feeds.</p></div>
    ${dataNotice()}
    <div class="grid stat-grid">${widgets.length ? widgets.map(widget => `<div class="card card-pad"><h3>${escapeHtml(widget.name || "Widget")}</h3><p>${escapeHtml(widget.type || "Review widget")}</p><div class="value" style="font-size:30px">${Number(widget.views || 0)}</div><p>Views</p></div>`).join("") : `<div class="card card-pad empty-inline"><h2>No social proof widgets yet</h2><p>Add rows to <strong>social_proof_widgets</strong>.</p></div>`}</div>`;
}

function integrationsPage() {
  const connections = liveData.connections || [];
  const labels = ["Google Business Profile", "GoHighLevel", "ServiceTitan", "Meta Ads"];
  return `<div class="page-head"><h1>Integrations</h1><p>Connection status for the systems feeding this dashboard.</p></div>
    ${dataNotice()}
    <div class="card card-pad" style="margin-bottom:22px;display:flex;align-items:center;gap:18px;justify-content:space-between;flex-wrap:wrap">
      <div><h2>Google Business Profile</h2><p>Connect with OAuth, then run the sync endpoint to fill Supabase with live reviews and analytics.</p></div>
      <a class="button primary" href="/api/google/connect">Connect Google</a>
    </div>
    <div class="grid two-grid">${labels.map(label => {
      const row = connections.find(connection => String(connection.provider || connection.name || "").toLowerCase().includes(label.split(" ")[0].toLowerCase()));
      return `<div class="card card-pad"><h3>${label}</h3><p>${row ? escapeHtml(row.status || "Connected") : "Not connected in Supabase yet"}</p><span class="badge">${row ? "Configured" : "Waiting"}</span></div>`;
    }).join("")}</div>`;
}

function settingsPage() {
  const settings = liveData.appSettings || [];
  return `<div class="page-head"><h1>Settings</h1><p>Business and dashboard settings.</p></div>
    ${dataNotice()}
    <div class="card card-pad">${settings.length ? `<table class="table"><thead><tr><th>Setting</th><th>Value</th></tr></thead><tbody>${settings.map(row => `<tr><td>${escapeHtml(row.key || row.name || row.setting || "Setting")}</td><td>${escapeHtml(row.value || row.setting_value || "")}</td></tr>`).join("")}</tbody></table>` : `<div class="empty-inline">No settings rows yet. Add rows to <strong>app_settings</strong>.</div>`}</div>`;
}

function helpPage() {
  const articles = liveData.helpArticles || [];
  return `<div class="page-head"><h1>Help</h1><p>Support articles and dashboard notes.</p></div>
    ${dataNotice()}
    <div class="grid two-grid">${articles.length ? articles.map(article => `<div class="card card-pad"><h3>${escapeHtml(article.title || "Help Article")}</h3><p>${escapeHtml(article.summary || article.body || "")}</p></div>`).join("") : `<div class="card card-pad empty-inline"><h2>No help articles yet</h2><p>Add rows to <strong>help_articles</strong>.</p></div>`}</div>`;
}
function placeholderPage() {
  const title = state.page.split("-").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
  return `<div class="empty-state"><div><h1>${title}</h1><p>This page shell is ready for the matching GHL route or backend data.</p></div></div>`;
}

function bindPageEvents() {
  document.querySelectorAll("[data-tab]").forEach(btn => btn.addEventListener("click", () => {
    state.page = "dashboard";
    state.tab = btn.dataset.tab;
    syncRoute();
    render();
  }));
  document.querySelectorAll("[data-period]").forEach(btn => btn.addEventListener("click", () => {
    state.period = btn.dataset.period;
    render();
  }));
  bindPerformanceTooltips();
  bindDonutTooltips();
}

function getChartTooltip() {
  let tooltip = document.getElementById("chartTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "chartTooltip";
    tooltip.className = "chart-tooltip";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function positionTooltip(tooltip, event) {
  const offset = 16;
  const rect = tooltip.getBoundingClientRect();
  const left = Math.min(window.innerWidth - rect.width - 12, event.clientX + offset);
  const top = Math.max(12, event.clientY - rect.height - offset);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.classList.add("show");
}

function bindPerformanceTooltips() {
  const zones = document.querySelectorAll(".chart-hover-zone");
  if (!zones.length) return;

  const tooltip = getChartTooltip();

  const rows = [
    ["Impressions", "impressions", "#6b6cf6"],
    ["Website Clicks", "website", "#ff4747"],
    ["Direction Requests", "directions", "#f59e0b"],
    ["Call Clicks", "calls", "#18bf8f"]
  ];

  const updateTooltip = (event, zone) => {
    tooltip.innerHTML = `<strong>${escapeHtml(zone.dataset.date || "")}</strong>${rows.map(([label, key, fallbackColor]) => {
      const value = formatNumber(Number(zone.dataset[key] || 0));
      const color = zone.dataset[`${key}Color`] || fallbackColor;
      return `<span><i style="background:${color}"></i>${label}<b>${value}</b></span>`;
    }).join("")}`;

    positionTooltip(tooltip, event);
  };

  zones.forEach(zone => {
    zone.addEventListener("mousemove", event => updateTooltip(event, zone));
    zone.addEventListener("mouseenter", event => updateTooltip(event, zone));
    zone.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
  });
}

function bindDonutTooltips() {
  const donuts = document.querySelectorAll(".interactive-donut");
  if (!donuts.length) return;

  const tooltip = getChartTooltip();

  const updateTooltip = (event, donut) => {
    const count = Number(donut.dataset.donutCount || 0);
    const total = Number(donut.dataset.donutTotal || 0);
    const rows = Array.from({ length: count }, (_, index) => {
      const label = donut.dataset[`donutLabel${index}`] || "Segment";
      const value = Number(donut.dataset[`donutValue${index}`] || 0);
      const color = donut.dataset[`donutColor${index}`] || "#6366f1";
      const percent = total ? Math.round((value / total) * 100) : 0;
      return `<span><i style="background:${color}"></i>${escapeHtml(label)}<b>${formatNumber(value)} (${percent}%)</b></span>`;
    }).join("");

    tooltip.innerHTML = `<strong>${escapeHtml(donut.dataset.donutTitle || "Breakdown")} · Total ${formatNumber(total)}</strong>${rows}`;
    positionTooltip(tooltip, event);
  };

  donuts.forEach(donut => {
    donut.addEventListener("mousemove", event => updateTooltip(event, donut));
    donut.addEventListener("mouseenter", event => updateTooltip(event, donut));
    donut.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
  });
}

document.querySelectorAll(".nav-item,.subnav button").forEach(btn => btn.addEventListener("click", () => {
  state.page = btn.dataset.page;
  state.tab = btn.dataset.tab || state.tab || "overview";
  if (state.page !== "dashboard") state.tab = "overview";
  syncRoute();
  render();
}));
document.getElementById("menuToggle").addEventListener("click", () => sidebar.classList.toggle("open"));
render();
loadLiveData();









