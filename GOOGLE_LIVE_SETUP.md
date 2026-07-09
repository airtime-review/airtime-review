# Google Live Setup

The Google Business Profile dashboard does not use a simple browser API key for private reviews and analytics. It needs OAuth 2.0 access with the `https://www.googleapis.com/auth/business.manage` scope.

## Vercel Environment Variables

Add these in Vercel Project Settings > Environment Variables:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DEFAULT_LOCATION_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REDIRECT_URI`

Use this value for `GOOGLE_REDIRECT_URI`:

```text
https://airtime-review.vercel.app/api/google/callback
```

Also add that same URL in Google Cloud > OAuth Client > Authorized redirect URIs.

## Connect Google

After deploy, open:

```text
https://airtime-review.vercel.app/api/google/connect
```

Choose the Google account that manages the Airtime Business Profile.

## Sync Google Data

After the connect page succeeds, open:

```text
https://airtime-review.vercel.app/api/google/sync
```

That pulls:

- Google reviews into `reviews`
- Google Business Profile performance metrics into `gbp_daily_metrics`
- Summary totals into `dashboard_metrics`

## Supabase Columns Needed

Make sure `google_connections` has these columns:

- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `google_account_id text`
- `access_token text`
- `refresh_token text`
- `expires_at timestamptz`
- `scope text`
- `updated_at timestamptz default now()`

Make sure `gbp_locations` has these columns:

- `id uuid primary key default gen_random_uuid()`
- `location_id uuid`
- `google_account_id text`
- `google_location_id text`
- `business_name text`
- `city text`
- `created_at timestamptz default now()`

For best duplicate prevention, add unique constraints:

```sql
alter table reviews add constraint reviews_external_review_id_key unique (external_review_id);
alter table gbp_locations add constraint gbp_locations_google_location_id_key unique (google_location_id);
```

## Important

If you only received a Google API key, keep it out of this app for now. Reviews, locations, and performance data require OAuth user consent, not an API key.
