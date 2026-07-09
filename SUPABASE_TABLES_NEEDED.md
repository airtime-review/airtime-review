# Supabase Tables Needed

The frontend is ready to read these tables. Tables can be empty at first; the dashboard will show empty states until sync jobs insert rows.

## Already Important

### `reviews`
Used by Dashboard, Reviews page, Recent Reviews, Review Velocity, Review Sources.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `source text`
- `reviewer_name text`
- `rating numeric`
- `review_text text`
- `review_time timestamptz`
- `reply_text text`
- `status text`
- `external_review_id text`
- `created_at timestamptz default now()`

### `dashboard_metrics`
Used for all-time summary cards.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `total_reviews integer`
- `average_rating numeric`
- `response_rate numeric`
- `invite_conversion numeric`
- `avg_response_time text`
- `updated_at timestamptz default now()`

### `gbp_daily_metrics`
Used by Google Business Profile Insights charts.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `metric_date date`
- `metric_name text`
- `metric_value numeric`
- `created_at timestamptz default now()`

Metric names the frontend already recognizes:
- `impressions`
- `business_impressions`
- `business_impressions_desktop_search`
- `business_impressions_mobile_search`
- `business_impressions_desktop_maps`
- `business_impressions_mobile_maps`
- `call_clicks`
- `business_conversations`
- `direction_requests`
- `business_direction_requests`
- `website_clicks`
- `business_website_clicks`

## Needed For All Menu Pages

### `invitees`
Used by Campaigns > Invites and Analytics.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `email text`
- `phone text`
- `channel text`
- `status text`
- `recent_activity text`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

### `campaigns`
Used by Campaigns, Request Reviews, Analytics.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `status text`
- `sent integer default 0`
- `opened integer default 0`
- `clicked integer default 0`
- `reviews integer default 0`
- `opt_out integer default 0`
- `rating numeric`
- `created_at timestamptz default now()`

### `campaign_events`
Recommended for detailed campaign charts.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `campaign_id uuid`
- `event_type text`
- `channel text`
- `destination text`
- `occurred_at timestamptz`
- `metadata jsonb`

### `feedback_forms`
Used by Review Tools > Feedback Forms and Analytics.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `description text`
- `visits integer default 0`
- `submissions integer default 0`
- `created_at timestamptz default now()`

### `form_events`
Recommended for "When Are Customers Visiting Review Forms?"

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `form_id uuid`
- `event_type text`
- `occurred_at timestamptz`
- `metadata jsonb`

### `qr_codes`
Used by Review Tools > QR Codes and QR Analytics.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `destination text`
- `url text`
- `scans integer default 0`
- `reviews integer default 0`
- `created_at timestamptz default now()`

### `qr_scan_events`
Recommended for QR charts.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `qr_code_id uuid`
- `occurred_at timestamptz`
- `metadata jsonb`

### `api_connections`
Used by Integrations.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `provider text`
- `status text`
- `external_account_id text`
- `external_location_id text`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

### `auto_responses`
Used by Auto Respond.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `rating_label text`
- `template text`
- `status text`
- `created_at timestamptz default now()`

### `social_proof_widgets`
Used by Social Proof.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `name text`
- `type text`
- `views integer default 0`
- `status text`
- `created_at timestamptz default now()`

### `app_settings`
Used by Settings.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `key text`
- `value text`
- `updated_at timestamptz default now()`

### `help_articles`
Used by Help.

Suggested columns:
- `id uuid primary key default gen_random_uuid()`
- `title text`
- `summary text`
- `body text`
- `created_at timestamptz default now()`

## API Syncs Still Needed

- Google Business Profile Reviews API: fills `reviews`.
- Google Business Profile Performance API: fills `gbp_daily_metrics`.
- GoHighLevel API/webhooks: fills `invitees`, `campaigns`, `campaign_events`, `form_events`.
- ServiceTitan webhook/API: creates the customer/job event that triggers GHL review request flow.
- Meta Marketing API: add `ad_accounts`, `ad_campaign_metrics`, or similar tables when you are ready for FB ads analytics.

## Environment Variables For Vercel

Add these in Vercel Project Settings > Environment Variables:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DEFAULT_LOCATION_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REDIRECT_URI`

GitHub repository secrets are not automatically available to a Vercel deployment unless you deploy through GitHub Actions. For a normal Vercel Git integration, add them in Vercel.

Use `GOOGLE_LIVE_SETUP.md` for the exact Google OAuth connection steps.
