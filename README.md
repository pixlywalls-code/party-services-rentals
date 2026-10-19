# Party Services & Rentals — Advertising & More concept

A custom **responsive, interactive landing page concept** for the Advertising & More [Freelancer design contest](https://www.freelancer.in/contest/custom-party-services-rentals-webpage-2796137).

This is an **independent demonstration**, not an official company website or booking system. The visuals and service catalogue are **conceptual**. The company must verify the full services list (the contest's ChatGPT share link could not be accessed), event inventory, pricing, imagery rights, and any marketing claims prior to public use.

## Features
- Brand-inspired royal-blue / warm-cream / gold visual system and coffee-cup CTAs
- Responsive header, navigation and mobile menu
- Horizontally animated marquee of brands visible on the original agency website (not party-service endorsements)
- Sixteen filterable service concepts with click-to-enquire actions
- Five-step process, values, concept event image gallery with modal, FAQ accordion
- Accessible enquiry planner with required fields, client-side validation, and copyable enquiry draft
- Reduced-motion support and semantic HTML
- No backend or invented booking confirmation

## Running locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```
Visit http://localhost:3000. Check types with `npm run typecheck`, build with `npm run build`.

## Deploy
Import the GitHub repository into Vercel as a Next.js project. Default settings should work. No environment variables required.

## Before submitting / launching
1. Verify all services against the client's complete linked ChatGPT document and edit the `services` array in `src/app/page.tsx`.
2. Replace stock concept images with licensed or approved brand-owned assets.
3. Confirm permitted use of the company identity and referenced client logos.
4. Connect the enquiry form to a real, company-approved email/API endpoint before presenting it as live bookings. Currently it only prepares and copies text.
5. Check final spelling, layout, mobile screenshots, and use a PNG/JPG export for the Freelancer contest (accepted formats are images).

## Source website
https://advertisingandmore.com
