# Lumina website

A standalone Next.js App Router project for Lumina Speech and Development.

## Current state and continuation

The homepage, `/services/`, `/about/`, `/our-approach/`, `/fees/`, and `/get-started/` are implemented. All pages share the approved homepage’s cream, navy, sage, and gold palette, locally hosted typography, original logo, header, and footer. Navigation links directly to the completed pages and identifies the current page.

Services explains all six existing support areas, in-home and telehealth formats, evaluation, and school collaboration. About Illiana uses the approved introduction portrait, confirmed experience and credentials, approach, and all four complete colleague endorsements. Get Started explains intake, evaluation, therapy planning, neighborhoods, availability, and FAQs. Booking links lead to Get Started, where scheduling is explicitly marked as coming soon; no appointment request is collected. Service descriptions and neighborhoods are shared in `lib/practice.ts`, and rates remain shared in `lib/fees.ts`.

The October 23 source revision uses `/Users/Eyal/Illiana website/WEBSITE PLAN.docx` and the user’s shared project conversation. Our Approach contains the document’s Why Lumina material. Services restores separate phonemic awareness and reading comprehension specialties, evaluation conditions, and referral guidance. Fees includes the written report within 10 business days and the 10% discounted session rates. See `docs/content-sources.md` for the content mapping and the user’s decision to confirm package terms during intake; the parent product brief’s old Downloads path is obsolete. Additional treatment photos are extracted unchanged from the document, with provenance in `public/images/document-photos.json`.

Continue with the existing Next.js stack and Cloudflare hosting plan. Preserve the original logo in the header and footer, the document-supplied speech-practice photo in the hero, Illiana’s portrait only in her introduction, and the carousel containing all four complete colleague endorsements. Scheduling remains an explicitly labeled placeholder until the real booking link is provided.

The confirmed product brief is in `PRODUCT.md`. This repository contains only the website; the separate CMS application from the original local workspace is not included.

## Local development

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`.

## Production build and Cloudflare Pages

```sh
npm run typecheck
npm run build
```

The build writes the complete static site to `out/`. Deploy that folder to Cloudflare Pages. For a Git-connected Pages project:

- Root directory: repository root (leave the setting empty).
- Framework preset: Next.js (Static HTML Export).
- Build command: `npm run build`.
- Build output directory: `out`.
- Node.js version: 22.13 or newer.

The site uses Next.js static export, standard page links, mobile navigation, native disclosure elements, and a manual testimonial carousel. Fonts and images are hosted locally. No server or database is required for the preview.

Reference: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

### If deployment fails

Create the project through **Workers & Pages → Create application → Pages → Import an existing Git repository**. The GitHub check named **Workers Builds** belongs to a Workers project, not a Pages project.

Use the **Next.js (Static HTML Export)** preset, override the build command to `npm run build`, set the build output directory to `out`, and leave the root directory empty. Keep `output: "export"` in `next.config.ts`: `output: "standalone"` builds a Node server rather than the static files this Pages setup needs. No Next.js adapter or Wrangler deploy command is required for this static Pages site.

## Files

- `components/homepage.tsx`: homepage content and interactions.
- `components/fees-page.tsx` and `app/fees/page.tsx`: Fees page content, route, and metadata.
- `components/site-frame.tsx`: shared header, navigation, and footer.
- `components/services-page.tsx`, `components/about-page.tsx`, and `components/get-started-page.tsx`: new page content, with routes and metadata under `app/`.
- `components/approach-page.tsx` and `app/our-approach/page.tsx`: Why Lumina, flexible care options, evaluations, and transparent payment.
- `components/page-sections.tsx`: shared return link, contact section, and FAQs.
- `lib/practice.ts`: shared service descriptions and Chicago neighborhoods.
- `lib/fees.ts`: confirmed prices shared by the homepage summary and full Fees page.
- `app/globals.css`: responsive design, typefaces, and reduced-motion support.
- `app/layout.tsx`: document title and search description.
- `public/images/`: original supplied logo, portraits, and the hero photograph extracted from the supplied website-plan document.
- `public/fonts/`: Latin font subsets with their SIL Open Font Licenses.

## Before launch

1. Supply the real booking URL, practice phone number, and practice email. Intake links currently lead to Get Started, with an explicit scheduling notice; no appointment request is submitted.
2. Have Illiana review the document-aligned copy, credential wording, published rates, report turnaround, schedule, service area, assessment platforms, and colleague endorsements.
3. The user confirmed a 12-week therapy package with a 10% discount. Session count, session lengths, and makeup terms are confirmed during intake; do not invent a fixed session count or package total.
4. Confirm the telehealth service area and add the practice’s final privacy information as appropriate for the booking/intake tools selected.
5. A vector export of the same approved logo can improve sharpness when available; preserve the original artwork and lettering.

## Design guidance

The site was developed with Impeccable design guidance, installed separately in the original workspace. The repository's `PRODUCT.md` records the supplied brief and confirmed constraints. The current refinement preserves the existing visual system, displays the original logo artwork in the header and footer, uses the document's speech-practice image in the hero, and shows Illiana's portrait only in her introduction.

The original content was supplied in `WEBSITE PLAN.docx`. The testimonial carousel contains all four complete colleague endorsements, attributed to Iesha Smith, Liza Woodward, Sabrina Muhammad, and Sabrina Diaz. It supports previous/next buttons, direct slide selection, keyboard arrow keys, and touch swipes. Slides advance when the visitor chooses, so longer endorsements remain readable. No patient testimonials, outcome statistics, or additional professional credentials have been invented.
