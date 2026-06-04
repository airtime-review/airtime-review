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
const SUPABASE_URL = "https://lhhnjsfanofraeydxzsf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaG5qc2Zhbm9mcmFleWR4enNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MjQ1MzEsImV4cCI6MjA5NjAwMDUzMX0.Pt8NML6JYmT72dTJn_XJR3XC_hoH9Lh2FpSWk5dnKzc";
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
  connections: null
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
    "qr-codes": qrCodesPage
  };
  content.innerHTML = (pages[state.page] || placeholderPage)();
  bindPageEvents();
  sidebar.classList.remove("open");
}

async function loadLiveData() {
  try {
    const [reviewRows, metricRows, performanceRows, invitees, campaigns, forms, qrCodes, locations, connections] = await Promise.all([
      supabaseRest("reviews?select=*&order=review_time.desc"),
      supabaseRest("dashboard_metrics?select=*&limit=1"),
      supabaseRest("gbp_daily_metrics?select=*&order=metric_date.desc"),
      safeSupabaseRest("invitees?select=*&order=created_at.desc"),
      safeSupabaseRest("campaigns?select=*&order=created_at.desc"),
      safeSupabaseRest("feedback_forms?select=*&order=created_at.desc"),
      safeSupabaseRest("qr_codes?select=*&order=created_at.desc"),
      safeSupabaseRest("locations?select=*"),
      safeSupabaseRest("api_connections?select=*")
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
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  return response.json();
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
  return {
    total: useStoredMetrics ? liveData.metrics.total_reviews : activeReviews.length,
    average: Number(useStoredMetrics ? liveData.metrics.average_rating : (ratings.length ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0)),
    responseRate: Number(useStoredMetrics ? liveData.metrics.response_rate : (activeReviews.length ? Math.round((replied / activeReviews.length) * 1000) / 10 : 0)),
    inviteConversion: Number(useStoredMetrics ? (liveData.metrics.invite_conversion ?? 0) : 0),
    avgResponseTime: useStoredMetrics ? (liveData.metrics.avg_response_time || "-") : "-",
    bad: activeReviews.filter(r => Number(r[3]) <= 3).length,
    needsResponse: activeReviews.filter(r => r[5] === "Respond" || r[7] === "needs_response").length
  };
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

function metricValue(row) {
  return Number(row.metric_value ?? row.value ?? row.count ?? 0) || 0;
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
      <h3>▣ Time Period</h3>
      ${period()}
    </div>
    <section class="grid overview-grid">
      <div class="card card-pad reputation">
        <div class="soft-icon amber">${icons.star}</div>
        <p>Overall Reputation</p>
        <div class="rating-big">${average} <span>/ 5</span></div>
        <div class="positive">↑ +0.0 vs last month</div>
        <div class="stars">★★★★★</div>
        <div class="breakdown">View Breakdown⌄</div>
      </div>
      <div class="stacked-metrics">
        ${metric("Total Reviews", String(summary.total), "↑ +0% vs last month", "blue", "chat")}
        ${metric("Response Rate", `${summary.responseRate}%`, "↑ +0.0% vs last month", "purple", "clock")}
      </div>
      <div class="stacked-metrics">
        ${metric("Invite Conversion", `${summary.inviteConversion}%`, "↓ -0.1% vs last month", "green", "trend", true)}
        ${metric("Avg. Response Time", summary.avgResponseTime, "↑ +0m vs last month", "blue", "clock")}
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
  return `<div class="card card-pad metric">
    <div><p>${label}</p><div class="value">${value}</div><div class="${negative ? "negative" : "positive"}">${delta.replace(" vs", "</span><span class='muted'> vs")}</span></div></div>
    <div class="soft-icon ${color}">${icons[icon]}</div>
  </div>`;
}

function blueHero() {
  const summary = getSummary();
  const reviews = getReviews();
  const last30 = countReviewsBetween(30, 0);
  const previous30 = countReviewsBetween(60, 30);
  const trendText = previous30 ? `${Math.abs(Math.round(((last30 - previous30) / previous30) * 100))}% ${last30 >= previous30 ? "increase" : "decrease"}` : "No previous data";
  const average = summary.average.toFixed(1);
  return `<section class="blue-panel">
    <div class="hero-grid">
      <div>
        <span class="pill">G Google</span>
        <h2>${summary.total ? "Keep collecting reviews" : "Waiting for live reviews"}</h2>
        <p>${summary.total ? `Current live rating is <strong>${average}</strong> from <strong>${summary.total}</strong> reviews.` : "Once Supabase has Google reviews, this section will update automatically."}</p>
        <div class="notice"><strong>Why this matters:</strong> Higher ratings help you show up first when people search on Google Maps and Google Search. More stars = more customers finding your business!</div>
        <div class="notice"><strong>Live data status</strong><br>${reviews.length ? "This panel is using reviews from Supabase." : "No synced review rows for this selected period yet."}</div>
        <div class="blue-stats">
          <div class="blue-card"><small>LAST 30 DAYS</small><strong>${last30}</strong>reviews<br><b style="color:#ffe25c">${trendText}</b></div>
          <div class="blue-card"><small>PREVIOUS 30 DAYS</small><strong>${previous30}</strong>reviews</div>
        </div>
        <div class="blue-card">
          <small>REVIEW MOMENTUM</small>
          <h3>${last30 ? `${last30} review${last30 === 1 ? "" : "s"} collected in the last 30 days.` : "No reviews collected in the last 30 days."}</h3>
          <div class="progress"><span style="width:${Math.min(100, last30 * 5)}%"></span></div>
        </div>
      </div>
      <div class="blue-card" style="align-self:center;text-align:center;padding:44px">
        <small>CURRENT RATING</small>
        <div class="rating-big">${average} &#9733;</div>
        <div class="stars" style="color:white">${ratingStars(summary.average)}</div>
        <hr style="border-color:rgba(255,255,255,.22)">
        <div class="blue-stats"><div><strong>${summary.total}</strong><small>TOTAL REVIEWS</small></div><div><strong>5.0</strong><small>NEXT GOAL</small></div></div>
        <div class="notice">Revenue calculator is not connected yet.<br><button class="button" style="margin-top:12px;background:rgba(255,255,255,.25);color:white" disabled>Connect revenue data first</button></div>
      </div>
    </div>
  </section>`;
  return `<section class="blue-panel">
    <div class="hero-grid">
      <div>
        <span class="pill">G Google</span>
        <h2>Almost there! Keep going! 🎯</h2>
        <p>Just <strong>48 more reviews</strong> to reach <strong>5.0!</strong></p>
        <div class="notice"><strong>Why this matters:</strong> Higher ratings help you show up first when people search on Google Maps and Google Search. More stars = more customers finding your business!</div>
        <div class="notice"><strong>⚠ Let's Pick Up the Pace</strong><br>Your review collection has slowed down. Time to ask more customers!</div>
        <div class="blue-stats">
          <div class="blue-card"><small>LAST 30 DAYS</small><strong>18</strong>reviews<br><b style="color:#ffe25c">↓ 66% decrease</b></div>
          <div class="blue-card"><small>PREVIOUS 30 DAYS</small><strong>53</strong>reviews</div>
        </div>
        <div class="blue-card">
          <small>YOUR FORECAST</small>
          <h3>At your pace, you'll hit 5.0 ⭐ in 3 months.</h3>
          <div class="progress"><span style="width:42%"></span></div>
        </div>
      </div>
      <div class="blue-card" style="align-self:center;text-align:center;padding:44px">
        <small>CURRENT RATING</small>
        <div class="rating-big">4.9 ★</div>
        <div class="stars" style="color:white">★★★★☆</div>
        <hr style="border-color:rgba(255,255,255,.22)">
        <div class="blue-stats"><div><strong>152</strong><small>TOTAL REVIEWS</small></div><div><strong>5.0</strong><small>NEXT GOAL</small></div></div>
        <div class="notice">See Your Revenue Potential<br><button class="button" style="margin-top:12px;background:rgba(255,255,255,.25);color:white">+ Calculate My Revenue Impact</button></div>
      </div>
    </div>
  </section>`;
}

function googleInsights() {
  const perf = getPerformanceSummary();
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
      <div class="search-stats"><div class="search-stat"><strong>0</strong>SEARCH TERMS</div><div class="search-stat" style="background:#eef2ff;color:#4f46e5"><strong>0%</strong>BRAND SEARCHES</div><div class="search-stat" style="background:#e9fbf3;color:#12a66c"><strong>0%</strong>DISCOVERY SEARCHES</div></div>
      <div class="empty-inline">Waiting for Google keyword impression rows.</div>
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
  return `<div class="card card-pad"><div class="soft-icon blue" style="width:38px;height:38px">◎</div><p style="margin-top:12px;font-weight:800">${label}</p><div class="value" style="font-size:30px">${value}</div><span class="positive">↑ +100%</span> <span class="muted">vs prior</span></div>`;
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

function searchTable() {
  const rows = ["airtime plumbing heating and air", "airtime", "ac repair murrieta", "ac repair near me", "airtime heating and air", "airtime hvac", "airtime plumbing heating & air", "airtime plumbing heating and air, innovation court, murrieta, ca", "hvac", "hvac contractor", "plumbing", "water heater"];
  return `<table class="table"><thead><tr><th>#</th><th>Search Term</th><th>Impressions</th><th>Change</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${r} ${i===2||i===7?'<span class="badge">BRAND</span>':''}</td><td>${i===0?'86':i===1?'40':'&lt; 15'}</td><td>${i===0?'<span class="negative">↓ -2.3%</span>':i===1?'<span class="positive">↑ +11.1%</span>':'—'}</td></tr>`).join("")}</tbody></table>`;
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

function performanceTable() {
  const rows = getPerformanceRows().slice(0, 12);
  return `<table class="table"><thead><tr><th>Date</th><th>Metric</th><th>Value</th></tr></thead><tbody>${rows.map(row => `<tr><td>${row.metric_date || row.date || ""}</td><td>${row.metric_name || row.metric || row.name || "Metric"}</td><td>${formatNumber(metricValue(row))}</td></tr>`).join("")}</tbody></table>`;
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
  const max = Math.max(1, ...rows.map(metricValue));
  const labels = allDates.length ? allDates : ["Start", "", "", "", "Now"];
  return `<svg class="chart" viewBox="0 0 1280 330" preserveAspectRatio="none">
    ${[50,100,150,200,250].map(y => `<line class="gridline" x1="40" x2="1240" y1="${y}" y2="${y}"/>`).join("")}
    <line class="axis" x1="40" x2="1240" y1="255" y2="255"/>
    ${series.map(([name, color, aliases]) => {
      const points = chartPoints(allDates, byMetric, aliases, max);
      return points ? `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="3"/>` : "";
    }).join("")}
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
    const y = 255 - (value / max) * 210;
    return `${x},${y}`;
  }).join(" ");
}

function breakdownCard(title, sub, type) {
  const rows = getPerformanceRows();
  const hasData = rows.length > 0;
  const bg = hasData ? "conic-gradient(#6366f1 0 50%, #18bf8f 50% 100%)" : "conic-gradient(#e7ebf2 0 100%)";
  const a = type === "device" ? "Desktop" : "Google Search";
  const b = type === "device" ? "Mobile" : "Google Maps";
  return `<div class="card card-pad"><h3>${title}</h3><p>${sub}</p><div class="donut-wrap"><div class="donut" style="background:${bg}"><div class="donut-center">Total<strong>${formatNumber(rows.reduce((sum, row) => sum + metricValue(row), 0))}</strong></div></div><div class="legend"><span><i class="dot" style="background:#6366f1"></i>${a}</span><span><i class="dot" style="background:#18bf8f"></i>${b}</span></div>${hasData ? "" : `<div class="empty-inline">Waiting for breakdown metrics.</div>`}</div></div>`;
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
    ? `${activeReviews.map(r => reviewCard(r, true)).join("")}<button class="button" style="width:100%;margin-top:12px">⌄ Load More Reviews</button>`
    : `<div class="card card-pad empty-inline">No reviews found in Supabase yet.</div>`;
  return `<section class="section"><h2>Recent Reviews</h2>${body}</section>`;
}

function analyticsTab() {
  const summary = getSummary();
  return `${head("Good Evening!", "See how your review requests are performing and get more reviews.", "analytics")}
  ${dataNotice()}
  <div class="card card-pad"><h2>How Are We Doing? <span class="badge">${state.period}</span></h2><div class="grid stat-grid section">
    ${metric("Review Requests Sent", "0", "Connect GHL campaign data", "blue", "share")}
    ${metric("Clicks to Review Sites", "0", "Connect GHL campaign data", "green", "trend")}
    ${metric("Success Rate", "0%", "Connect GHL campaign data", "purple", "trend")}
    ${metric("Private Messages", "0", "Connect GHL campaign data", "blue", "chat")}
  </div></div>
  <div class="grid two-grid section">
    <div class="card card-pad"><h2>Review Performance</h2><div class="search-stats" style="text-align:center"><div><strong style="font-size:34px;color:#f59e0b">${summary.average.toFixed(1)}</strong><p>Rating</p></div><div><strong style="font-size:34px;color:#373ba3">${summary.total}</strong><p>Reviews</p></div><div><strong style="font-size:34px;color:#373ba3">${summary.responseRate}%</strong><p>Response Rate</p></div></div></div>
    <div class="card card-pad empty-inline"><h2>Campaign Data Not Connected</h2><p>GHL invite/campaign events need to be synced into Supabase before this tab can show live sends, opens, clicks, QR scans, and form visits.</p></div>
  </div>`;
  return `${head("Good Evening!", "See how your review requests are performing and get more reviews.", "analytics")}
  <div class="card card-pad"><h2>How Are We Doing? <span class="badge">This month</span></h2><div class="grid stat-grid section">${metric("Review Requests Sent", "11", "← -31.3% vs prior period", "blue", "share", true)}${metric("Clicks to Review Sites", "0", "← -100.0% vs prior period", "green", "trend", true)}${metric("Success Rate", "0.0%", "← -6.3% vs prior period", "purple", "trend", true)}${metric("Private Messages", "0", "→ +0% vs prior period", "blue", "chat")}</div></div>
  <div class="card card-pad section"><h2>What's Working Best? <span class="badge">This month</span></h2><div class="grid stat-grid section">${channel("Email Campaigns",4)}${channel("QR Code Scans",0)}${channel("SMS Campaigns",7)}${channel("Direct Form Visits",0)}</div></div>
  <div class="card card-pad section"><h2>Campaign Activity Insights <span class="badge">All time</span></h2><p>Track how your email, SMS & WhatsApp campaigns are performing</p><div class="grid two-grid section">${delivery("Email","286 attempts","100%","286","0","23","8%")}${delivery("Sms","308 attempts","98.4%","303","5","83","27.4%")}</div></div>
  <div class="card card-pad section"><h2>Where Customers Are Sent for Reviews <span class="badge">Last 12 months</span></h2>${barChart()}</div>
  <div class="card card-pad section"><h2>When Are Customers Visiting Review Forms? <span class="badge">Last 30 days</span></h2>${lineMini()}<div class="notice" style="background:#eaf3ff;color:#2357c5">This shows when customers are most active on your review forms throughout the day.</div></div>
  <div class="card card-pad section"><h2>Review Activity Over Time <span class="badge">Last 12 months</span></h2>${barChart()}</div>`;
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
    <div class="filter-row"><input class="search" placeholder="Search reviews..."><strong>${summary.total} <span class="muted">reviews</span></strong><span style="flex:1"></span><button class="button">↧ Export (${summary.total})</button><button class="button primary">+ Add Reviews⌄</button></div>
    <div class="filter-row">${chips.map(x=>`<button class="chip">${x}</button>`).join("")}</div>
    <div class="reviews-layout">
      <aside class="card filters"><strong>Filters</strong><label>Sources</label><div class="select-like">Nothing Selected⌄</div><label>Tags</label><div class="select-like">Nothing Selected⌄</div><label>Rating</label><div class="rating-filter">${[5,4,3,2,1].map(n=>`<button>★<br>${n}</button>`).join("")}</div><label>Time Period</label><div class="date-like">▣</div><label>Response Status</label><div class="dual-filter"><button>✓ Responded</button><button>☏ Pending</button></div><label>Visibility</label><div class="dual-filter"><button>◉ Visible</button><button>◌ Hidden</button></div><label>Review Content</label><div class="dual-filter"><button>With Text</button><button>Rating Only</button></div></aside>
      <section>${reviewsBody}</section>
    </div>`;
}

function reviewCard(r, compact = false) {
  const filledStars = "&#9733;".repeat(Math.max(0, Math.min(5, Number(r[3]))));
  const emptyStars = "&#9734;".repeat(Math.max(0, 5 - Math.min(5, Number(r[3]))));
  const stars = filledStars + emptyStars;
  return `<article class="card review-card">
    <div><div class="review-top"><div class="avatar">${r[6]}</div><div><h3>${r[0]} ${r[2] === "Private Feedback" ? '<span class="badge" style="color:#2f80ff">🔒 Private Feedback</span>' : ""}</h3><p>${r[1]} via ${r[2]}</p><div class="review-stars">${stars} <span class="muted">${r[3]}</span> 😊</div>${!compact ? `<p style="margin-top:14px;color:#465366">${r[4]}</p><div class="reply-box">${r[8] || `Thank you for the ${r[3]}-star review. We're glad we could help and appreciate you sharing your experience.`}</div>` : ""}<p style="margin-top:18px"><span class="dot" style="background:#22c55e"></span>Positive</p></div></div></div>
    <div class="review-actions">${r[5] === "Respond" ? '<button class="button green">✧ Respond</button>' : '<span class="status-pill">✓ Replied</span>'}</div>
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
  <div class="filter-row"><input class="search" placeholder="Search name, email, phone..."><strong>304 invitees</strong><span style="flex:1"></span><button class="button">↧ Export (304)</button><button class="button primary">+ Invite⌄</button></div>
  <div class="card invite-table"><table class="table"><thead><tr><th>□</th><th>Customer (Invitee)</th><th>Status</th><th>Recent Activity</th></tr></thead><tbody>${names.map((n,i)=>`<tr><td>□</td><td><strong>${n}</strong><br><span class="muted">${n.split(" ")[0].toLowerCase()}@gmail.com<br>+1951${2000000+i*5311}</span></td><td><span class="badge">${i===0?"Not Sent":i===3?"Review Attempted":"Invite Sent"}</span></td><td>${i===0?"⚠ Not Sent 51 seconds ago":"💬 Invite Sent "+(i+1)*6+" minutes ago"} ›</td></tr>`).join("")}</tbody></table></div>`;
}

function requestReviewsPage() {
  const campaigns = liveData.campaigns || [];
  return `<div class="page-head"><h1>Request Reviews</h1></div>
  ${dataNotice()}
  <div class="filter-row"><input class="search" placeholder="Search campaigns..." data-search-table="campaigns"><span style="flex:1"></span><button class="button dark" disabled>+ New Campaign</button></div>
  ${campaigns.length ? campaigns.map(campaignCard).join("") : `<div class="card card-pad empty-inline"><h2>No campaigns found in Supabase</h2><p>Sync GHL campaign/request-review records into a <strong>campaigns</strong> table to make this page live.</p></div>`}`;
  return `<div class="page-head"><h1>Request Reviews</h1></div><div class="filter-row"><input class="search" placeholder="Search campaigns..."><span style="flex:1"></span><button class="button dark">+ New Campaign</button></div>
  <div class="card card-pad"><div style="display:flex;justify-content:space-between;gap:20px"><div><h3>Review Campaign</h3><span class="badge" style="background:#dcfce7;color:#16a34a">● Active</span> <span class="muted">Created 2 months ago</span></div><button class="button green">✎ Edit</button></div>
  <div class="kpi-row">${["304|Sent","0|0% opened","98|32% clicked","49|Reviews","4|Opt-out","4.0 ★|Rating"].map(x=>{const [a,b]=x.split("|");return `<div class="card kpi"><strong>${a}</strong><p>${b}</p></div>`}).join("")}</div>
  <div class="actions-row"><button class="button">▣ Opt-in Page</button><button class="button">▣ Copy</button><button class="button">◷ Schedule</button><button class="button primary">△ Send Now</button></div></div>`;
}

function feedbackFormsPage() {
  const forms = liveData.forms || [];
  return `<div class="page-head"><h1>Feedback Forms</h1></div>
  ${dataNotice()}
  <div class="filter-row"><input class="search" placeholder="Search forms..." data-search-table="forms" style="width:360px"><span style="flex:1"></span><button class="button primary" disabled>+ Create 
