---
target: components/homepage.tsx
total_score: 23
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 1
target_identity: "file:/Users/Eyal/Documents/ChatGPT/Website for Illiana/lumina-website/components/homepage.tsx"
target_fingerprint: "sha256:3f8df150a363fc5a0c016b175296dc79d135ce1d6a1b77fdf3e75f988fea5bad"
target_path: /Users/Eyal/Documents/ChatGPT/Website for Illiana/lumina-website/components/homepage.tsx
timestamp: 2026-10-21T17-46-58Z
slug: components-homepage-tsx
---
Method: dual-agent (A: /root/homepage_design_review · B: /root/homepage_evidence)

Source-based critique of components/homepage.tsx and its supporting CSS/carousel. No isolated browser was available; rendered layout, contrast, and interaction behavior remain unverified.

The homepage establishes warmth and trust. Its biggest opportunity is to give practical fit and the next step the same clarity as its reassuring visual language.

## Design specificity

Illiana’s first-person introduction, school collaboration, Chicago neighborhoods, published fees, and named colleague endorsements give the page real character. Cream surfaces, gold italic serif headings, an arched photograph, sunbursts, and repeated aspirational headlines are more interchangeable with other boutique wellness sites. Bring the concrete differentiators higher into the hierarchy while retaining the approved logo, image placements, and all four complete endorsements.

## Provisional design health

| Heuristic | Score | Main observation |
|---|---:|---|
| Visibility of status | 2/4 | Unavailable scheduling disclosed after the click. |
| Match with real world | 3/4 | Warm language; reimbursement terminology needs explanation. |
| User control and freedom | 3/4 | Native dialog/disclosures and manual carousel; behavior untested. |
| Consistency and standards | 3/4 | Coherent components; different intake labels share one destination. |
| Error prevention | 2/4 | Useful caveats, but CTA wording creates the wrong expectation. |
| Recognition over recall | 3/4 | Good section labels; practical fit is buried in FAQs. |
| Flexibility and efficiency | n/a | Expert accelerators are not a requirement for this landing page. |
| Aesthetic and minimalist design | 3/4 | Restrained styling; inspirational copy receives most emphasis. |
| Error recovery | 2/4 | Instagram does not complete the intended scheduling task. |
| Help and documentation | 2/4 | Useful FAQ, with answers distant from relevant decisions. |
| Total | 23/36 | Acceptable; source-based and provisional. |

## What works

- Trust is accurately attributed: the endorsements are clearly from colleagues, with complete text and names.
- Fees, private-pay status, and reimbursement uncertainty are stated concretely.
- Native disclosures, dialog focus restoration, manual carousel controls, and reduced-motion support provide considerate foundations.

## Priority issues

1. **[P1] The intake button promises scheduling that is unavailable.** Hero and closing buttons say “Schedule an intake call” (homepage.tsx:241, :616); only the dialog discloses that booking is disconnected (:704), then offers Instagram (:711). This is an expectation mismatch in the preview, not a request to invent contact details. Label the current action as intake information and disclose the limitation before the click; connect the real route when supplied. Suggested command: `$impeccable clarify`.

2. **[P2] Supporting text and actions remain too small.** The recent overrides raise most main prose to 15–16px, but mobile hero button/link labels remain 10px (globals.css:2335, :2338), location information 9px (:2341), and the booking privacy note 9px with `!important` (:1271). Raise these functional roles and allow wrapping rather than shrinking. Suggested command: `$impeccable typeset`.

3. **[P2] Families must read too far to establish practical fit.** The hero says “In-home care in Chicago” (homepage.tsx:248), while specific neighborhoods and appointment windows appear in the late FAQ (:557, :561). Surface a compact area/availability summary near the first CTA using confirmed facts. Do not invent telehealth coverage. Suggested command: `$impeccable clarify`.

4. **[P2, verify visually] Endorsement changes may move the controls and following content.** Complete endorsements vary in length; inactive slides use `display:none`, and controls follow the active text in normal flow (testimonial-carousel.tsx:104; globals.css:831). Confirm the height change on mobile, then stabilize the control position or reserve responsive space. Preserve all complete endorsement text. Suggested command: `$impeccable layout`.

## Cognitive load and emotional journey

Overall load appears moderate: grouping, progressive disclosure, and one consistent intake goal help; the weighting of inspirational copy over practical facts makes comparison harder. Five fee/FAQ entries are manageable lists, not proof of overload. The strongest emotional moment is meeting Illiana. The weakest ending is the scheduling invitation becoming a coming-soon notice.

## Persona red flags

- First-time caregiver: expects scheduling, receives an explanation of unavailable booking.
- Methodical evaluator: searches late FAQs for neighborhood and appointment eligibility.
- Distracted mobile visitor: reads larger paragraphs but still encounters 10px action labels and 9px supporting details.

## Minor observations

Retain the manually operated carousel and its labeled arrow buttons. Pagination targets are narrower (28×44px on mobile) than the 44×44px arrows; widening them would improve touch comfort, but this alone does not establish an accessibility violation. Explain “superbill” briefly. Give repeated aspirational headings more specific information about Illiana’s experience and school collaboration.

## Detector evidence

The independent markup scan of both components returned zero findings (exit 0, `[]`). It did not detect the action-label mismatch or the remaining small CSS text. No visual overlay was injected; the successful source scan and manual CSS review are the fallback evidence.
