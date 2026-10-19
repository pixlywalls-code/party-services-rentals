# Party Services & Rentals — Advertising & More concept

A custom **responsive, interactive landing page concept** for the Advertising & More [Freelancer design contest](https://www.freelancer.in/contest/custom-party-services-rentals-webpage-2796137).

This is an **independent demonstration**, not an official company website or booking system. The visuals and service catalogue are **conceptual**. The catalogue reproduces all 100 attraction ideas across the ten categories from the client's attached ChatGPT text document. The company must verify actual offering availability, event inventory, pricing, imagery rights, and marketing claims before public use.

## Features
- Brand-inspired royal-blue / warm-cream / gold visual system and coffee-cup CTAs
- Responsive header, navigation and mobile menu
- Horizontally animated marquee of brands visible on the original agency website (not party-service endorsements)
- All **100 requested adult ballroom party attractions**, faithfully grouped into the **10 original categories**, with search, category filters, selective illustrative imagery, and click-to-enquire actions
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
1. Verify service titles and descriptions against the client's final approved brief. The list is managed in `src/data/party-services.ts` and currently mirrors the provided 100-attraction text.
2. Replace stock concept images with licensed or approved brand-owned assets.
3. Confirm permitted use of the company identity and referenced client logos.
4. Connect the enquiry form to a real, company-approved email/API endpoint before presenting it as live bookings. Currently it only prepares and copies text.
5. Check final spelling, layout, mobile screenshots, and use a PNG/JPG export for the Freelancer contest (accepted formats are images).

## Source website
https://advertisingandmore.com
