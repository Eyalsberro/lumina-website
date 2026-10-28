# Homepage Instagram carousel

Mode: Persuade. Primary target: `components/instagram-carousel.tsx`. Related targets: `components/instagram-carousel.module.css`, `components/homepage.tsx`.

## Scope and direction

The user requested the latest five Instagram posts with automatic updates, then selected an **Elfsight public-account widget** to avoid connecting Illiana's Instagram account. The target is `@luminaspeechanddevelopment`. This supersedes the original direct Meta API implementation.

Keep the existing “A little more Lumina.” section before the final homepage contact section. Preserve the incumbent cream/navy/sage/gold palette, Cormorant Garamond headings, DM Sans body, section rhythm, container widths, and profile link. The provider should display a manually controlled carousel, newest posts first, capped at five. No new visual system or imagery.

## Integration and verification

`lib/instagram.ts` includes the published public Elfsight widget UUID `2357ab5a-c85c-4a1f-9bd0-f473866619cb`, with an optional `NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID` override. The component uses Next.js Script with `lazyOnload` and the provider's `data-elfsight-app-lazy` flag. An empty/invalid override or script failure shows the profile fallback. The direct Meta endpoint, Cloudflare route file, API-specific tests, and private-secret requirements were removed.

Widget-source configuration, limits, and setup are documented in `../../docs/instagram-feed.md`. The actual public source collected one Lumina post; maximum five, publication-date sorting, responsive 3/2/1 columns, auto-slide off, swipe/arrows enabled, and direct Instagram links were configured. Elfsight confirmed publication and displayed the installation code. The Free plan was selected (200 views/month, provider branding). The real post was verified loading on the local homepage. A subsequent single-post sizing adjustment caps the feed at 420px while exactly one post image is present, allowing full section width when more arrive. Final mobile and multi-post navigation checks remain limited by the unstable active browser window and the source currently having one post. Earlier fixture screenshots and the independent review describe the superseded custom carousel and do not verify the Elfsight embed.

The surrounding layout retains the original design decisions. No product facts, typefaces, or design tokens changed, so existing project design records remain authoritative. Provider branding and plan limits are governed by Elfsight.
