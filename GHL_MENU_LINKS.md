# GHL Custom Menu Links

Replace `https://your-dashboard-domain.com` with the public HTTPS domain where this folder is hosted.

| GHL Menu Item | URL |
| --- | --- |
| Dashboard | `https://your-dashboard-domain.com/dashboard/` |
| Reviews | `https://your-dashboard-domain.com/reviews/` |
| Campaigns | `https://your-dashboard-domain.com/campaigns/` |
| Invites | `https://your-dashboard-domain.com/campaigns/invites/` |
| Request Reviews | `https://your-dashboard-domain.com/campaigns/request-reviews/` |
| Feedback Forms | `https://your-dashboard-domain.com/review-tools/forms/` |
| QR Codes | `https://your-dashboard-domain.com/review-tools/qr-codes/` |

Use iframe/open-in-current-window mode in GHL. These routes automatically hide the app's own sidebar, topbar, and footer so GHL's sidebar remains the only navigation.

For live data, the hosted frontend needs a backend API that stores OAuth tokens and syncs:

- GHL location/account data
- Google Business Profile reviews and ratings
- invite/campaign stats
- review replies and statuses

Do not put GHL or Google credentials in `app.js`.
