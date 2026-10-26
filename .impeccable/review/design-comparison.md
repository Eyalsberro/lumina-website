# Design comparison — full source alignment, October 23, 2026

Disposition: **SHIP** at the approved informational-page scope. This is an ordinary extension of the approved homepage; no design-system change was approved or introduced.

## Comparison and sources

The latest independent finish review compared all six pages with the approved homepage system, inspecting the 12 desktop (1440px) and mobile (390px) captures below and the source/code. This record supersedes the initial five-route comparison. Content authority is now the available `/Users/Eyal/Illiana website/WEBSITE PLAN.docx` and the successfully read project conversation, mapped in [content-sources.md](../../docs/content-sources.md). The original missing-Downloads-path notes describe an earlier state.

- Palette: the existing cream, navy, ink, muted gray, gold, and sage tokens remain the basis of all pages. Sage bands, quiet dividers, navy closing sections, and gold actions continue the homepage treatment.
- Typography: locally hosted Cormorant Garamond display headings and DM Sans body text are reused, including gold italic emphasis. New headings and reading widths respond to their content without redefining the global type system.
- Layout: the shared container, generous section rhythm, split desktop compositions, stacked mobile layouts, shared navigation, and original-logo footer remain recognizable. Services expands the support cards into readable groups; Get Started uses a sage status panel within that grammar.
- Imagery and behavior: the approved homepage hero and original logo remain. Four activity photographs were extracted unchanged from the supplied document; [document-photos.json](../../public/images/document-photos.json) records embedded paths and SHA-256 provenance. Display crops use CSS. About keeps Illiana’s portrait in her introduction and reuses the manual carousel with all four complete endorsements. Native FAQs and the existing mobile menu continue the incumbent interaction patterns. No generated imagery or new visual world was added.
- Navigation change: shared navigation links to the completed routes, including the dedicated `/our-approach/` page based on Why Lumina, and marks the current page. Intake CTAs, including Fees, link to `/get-started/`; scheduling is explicitly coming soon and no appointment request is collected.
- Source alignment: all pages now use the six actual specialties and appropriate referral boundaries, assessment conditions, the written-report turnaround of 10 business days, and document-backed credentials and experience. Fees shows the confirmed 10% discount as $72/$99/$126 per session. The user resolved the conflicting package descriptions by retaining the discount and confirming session count, duration, and makeup terms during intake. No package total or promised progress timeline is invented.

## Evidence

| Surface | Desktop | Mobile |
| --- | --- | --- |
| Incumbent homepage | [home-desktop.png](home-desktop.png) | [home-mobile.png](home-mobile.png) |
| Services | [services-desktop.png](services-desktop.png) | [services-mobile.png](services-mobile.png) |
| About Illiana | [about-desktop.png](about-desktop.png) | [about-mobile.png](about-mobile.png) |
| Our Approach | [our-approach-desktop.png](our-approach-desktop.png) | [our-approach-mobile.png](our-approach-mobile.png) |
| Fees | [fees-desktop.png](fees-desktop.png) | [fees-mobile.png](fees-mobile.png) |
| Get Started | [get-started-desktop.png](get-started-desktop.png) | [get-started-mobile.png](get-started-mobile.png) |

Production export, typecheck, and source assertions passed. The latest independent full-site finish review reported **SHIP** with no material findings; the detector returned `[]`. [checks.json](checks.json) records six routes at seven widths (320–1600px), 26 internal destinations, loaded imagery, no overflow, current navigation, menu/Escape focus, native FAQ keyboard use, all four carousel endorsements and keyboard controls, explicit scheduling status, no request collection, and no browser errors. This documentation update consumes that completed verification; it does not claim another test run.

## Documentation boundary

Updated the additional-pages surface with implementation evidence and corrected the Fees surface’s obsolete dialog behavior. `DESIGN.md` and `.impeccable/design.json` were already absent; they remain absent because this extension did not authorize a new system or repair unrelated documentation drift. The parent product record’s reference to an intake dialog is pre-existing drift and was left untouched within this documentation-only boundary. No defects were canonized as design rules.
