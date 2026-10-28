# Automatic Instagram feed with Elfsight

The homepage uses an Elfsight Instagram Feed widget with **Account (Public)** as the source. It reads `@luminaspeechanddevelopment` by username; Illiana does not need to sign into Instagram or authorize an API connection. The profile must be public and have no age or country restrictions.

## Widget settings

In the Elfsight editor:

1. Choose **Instagram Feed** and add an **Account (Public)** source: `luminaspeechanddevelopment`.
2. Select a **Slider / Carousel** layout, with three columns on desktop and one on mobile. Use one row and manual arrows/swipe navigation. Disable auto-slide.
3. Under **Settings → Content**, sort by publication date with newest posts first. Enable **Limit Total Number of Posts** and set it to **5**. Disable load-more pagination if offered.
4. Choose **Open in Instagram** for post clicks. Use a transparent background, navy text (`#172f42`), and gold accent (`#a67a30`) to match the homepage. The website already provides the heading and profile link, so hide the widget's duplicate title/header when available.
5. Save the widget and copy its installation code. The public widget ID is the UUID after `elfsight-app-` in the supplied `<div>` class. For example, `elfsight-app-<widget-id>`.

The widget was published on October 28, 2026 using Elfsight's Free plan: 200 widget views per month, one widget, and Elfsight branding. No paid subscription was selected. Updates happen on Elfsight's schedule, without rebuilding the website for each Instagram post. The provider's plan determines update frequency, view limits, and branding.

## Website configuration

The saved widget ID `2357ab5a-c85c-4a1f-9bd0-f473866619cb` is included in `lib/instagram.ts`, so the normal build needs no environment configuration. Its installation code was verified in the signed-in Elfsight dashboard. This ID is public installation metadata, not a password or Instagram access token.

To use a different widget, optionally override the public build variable `NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID`. An explicitly empty value disables the embed and shows the profile fallback.

- Locally, put the variable in the ignored `.env.local` file and restart `npm run dev`.
- In Cloudflare Pages, add the override under **Settings → Variables and Secrets** only if changing widgets, then rebuild/deploy (`npm run build`, output `out`). No Cloudflare Function, server, Meta app, or private Instagram token is required.

The component loads `https://elfsightcdn.com/platform.js` through Next.js's idle-time Script strategy, with Elfsight's `data-elfsight-app-lazy` on the widget. An empty/invalid widget ID or failed script shows the Instagram profile link. The heading's profile link also remains available if the provider cannot retrieve posts.

The live public source was collected successfully in the editor. It currently has one post, `https://www.instagram.com/p/Dep608EM04m/`; the configured maximum is five, ordered by publication date. Desktop column counts are three, tablet two, and mobile one; auto-slide is off, swipe and arrows are enabled, and clicking a post opens Instagram.

## Verification

Run `npm run typecheck` and `npm run build`. With the real widget ID configured, check:

- The posts belong to Lumina and are ordered newest first, with at most five total.
- Desktop and mobile layouts fit within the page and post links open Instagram.
- Arrows, keyboard focus, and touch navigation work; auto-slide is disabled.
- Setting the widget ID override to empty, or blocking the provider script, leaves a usable profile link.

The real Lumina post was verified loading on the local homepage, along with the provider's installation code and published widget. A scoped observer keeps a feed with exactly one post at a maximum width of 420px rather than allowing the provider to stretch it across the full section; it restores the available width when more post images arrive. This uses the provider's descriptive post-image alt text, so recheck it after major provider updates. Full mobile and navigation verification remains limited while only one post is available; earlier fixture captures do not verify this provider embed.

The previous direct Meta API endpoint, runtime-secret setup, and API-specific tests were removed when the user selected this public widget approach.

References: [Elfsight public connection requirements](https://help.elfsight.com/article/1375-instagram-feed-connection-types-benefits-and-differences), [sorting, post limits, and carousel settings](https://help.elfsight.com/article/1224-step-3-mastering-colors-on-the-style-tab-of-your-instagram-feed), [lazy loading](https://help.elfsight.com/article/1099-how-to-improve-pagespeed-score-of-a-page-with-our-widget).
