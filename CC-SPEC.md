# endpnt.dev Hub Site — CC Spec (Part 6 of 6)
**Version:** 1.0
**Date:** April 13, 2026
**Author:** Opus (planning only — CC executes all code changes)
**Agent:** Start with architect → then frontend-agent for implementation
**Project:** endpnt.dev — Developer API platform
**Repo:** endpnt-dev/web

---

## CRITICAL: Environment Setup (READ FIRST)

Before doing ANYTHING, run these commands to ensure you're in the right place:

```bash
cd /mnt/c/Repositories/endpnt/web
pwd
# Must show: /mnt/c/Repositories/endpnt/web

git branch
# Must show: * dev
# If not on dev, run: git checkout dev

git status
# Should be clean. If not, stash or commit existing changes.
```

**Git workflow for this project:**
- Work on `dev` branch
- Push to `dev` when done — Vercel auto-deploys a preview URL
- DO push to dev
- JK will review the preview, then open a PR to main on GitHub for production deploy

---

## Overview

Build the endpnt.dev hub site — the central marketing and discovery site for the endpnt platform. This is NOT an API. It's a Next.js website where developers discover all 5 APIs, understand the platform, see pricing, read documentation, and sign up.

Think of this as the Stripe.com to Stripe's API. The APIs live on their subdomains. This site ties them all together and is the front door for organic traffic.

Deployed at endpnt.dev (root domain).

---

## Requirements

1. Home page showcasing all 5 APIs with descriptions and links to their subdomains
2. APIs page with detailed feature comparisons
3. Pricing page showing platform-wide tier comparison across all APIs
4. Documentation overview page explaining auth, rate limits, response format, error codes
5. About page (who built this, why, contact info)
6. Blog section for SEO content (can be placeholder for now with 1-2 example posts)
7. Consistent dark theme matching all API sites
8. Mobile responsive
9. Fast — this is a static marketing site, should score 95+ on Lighthouse
10. SEO optimized — proper meta tags, OG tags, structured data
11. Links to all 5 API subdomains prominently
12. "Get Started" flow that directs to pricing/signup

---

## Suggestions & Context

### Tech Stack
- **Framework:** Next.js 14+ App Router, TypeScript
- **Styling:** Tailwind CSS, dark theme
- **Content:** Hardcoded for now (no CMS). Blog posts as MDX files if architect prefers, or just React components
- **Fonts:** Monospace for logo/code (`JetBrains Mono` or `Fira Code`), sans-serif for body (`Inter` or system font stack)
- **Icons:** `lucide-react` for consistent iconography

### Folder Structure

```
web/
  app/
    page.tsx                  ← Home page
    apis/
      page.tsx                ← All APIs listing with details
    pricing/
      page.tsx                ← Platform-wide pricing
    docs/
      page.tsx                ← Documentation overview
    about/
      page.tsx                ← About endpnt
    blog/
      page.tsx                ← Blog index
      [slug]/
        page.tsx              ← Individual blog post
    layout.tsx                ← Root layout
    globals.css
  components/
    Header.tsx                ← Navigation bar
    Footer.tsx                ← Site footer
    ApiCard.tsx               ← Reusable card for each API
    PricingTable.tsx          ← Tier comparison component
    CodeBlock.tsx             ← Syntax-highlighted code examples
    Hero.tsx                  ← Home page hero section
  lib/
    apis.ts                   ← API metadata (names, descriptions, URLs, features)
    blog.ts                   ← Blog post metadata and content
  public/
    og-image.png              ← Default OG image for social sharing
  package.json
  tsconfig.json
  next.config.js
  tailwind.config.ts
  postcss.config.js
  .env.example
  vercel.json
  README.md
```

### Home Page (/)

**Sections in order:**

1. **Hero**
   - Headline: "Developer APIs that just work"
   - Subheadline: "Screenshot, QR codes, link previews, image processing, and validation — all from one platform. No AI dependencies. No bloat. Just clean, fast endpoints."
   - CTA buttons: "Browse APIs" (→ /apis) and "Get Started Free" (→ /pricing)
   - Animated code example showing a real API call with response

2. **API Grid**
   - 5 cards in a responsive grid (3 across on desktop, 1 on mobile)
   - Each card shows: API name, one-line description, key feature badges, "View Docs →" link
   - Cards link to the respective subdomain

3. **How It Works**
   - 3 steps: Get your API key → Make a request → Get your response
   - Simple, visual, with code snippet

4. **Features Strip**
   - "No AI dependencies", "99.9% uptime", "Free tier forever", "< 2s response times", "One API key for all services"

5. **Pricing Preview**
   - Compact version of pricing table showing just the 4 tier names and prices
   - "See full pricing →" link

6. **Footer**
   - Links: APIs, Pricing, Docs, About, Blog, GitHub, Twitter/X, Status
   - "Built by JK in San Diego" or similar personal touch
   - "© 2026 endpnt.dev"

### API Metadata
Store this in `lib/apis.ts` so it's reusable across pages:

```typescript
const APIS = [
  {
    name: "Screenshot API",
    slug: "screenshot",
    url: "https://screenshot.endpnt.dev",
    description: "Capture any webpage as an image",
    longDescription: "Send a URL, get back a pixel-perfect screenshot. Supports full-page capture, device emulation, dark mode, element targeting, and multiple output formats.",
    features: ["Full-page capture", "Device emulation", "Dark mode", "CSS selector targeting", "PNG/JPEG/WebP/PDF"],
    icon: "camera",  // lucide icon name
    color: "#0F6E56",
  },
  {
    name: "QR Code API",
    slug: "qr",
    url: "https://qr.endpnt.dev",
    description: "Generate styled QR codes instantly",
    longDescription: "Create QR codes with custom colors, embedded logos, configurable error correction, and multiple output formats. Perfect for marketing materials, tickets, and product packaging.",
    features: ["Custom colors", "Logo embedding", "SVG output", "Error correction levels", "Bulk generation"],
    icon: "qr-code",
    color: "#534AB7",
  },
  {
    name: "URL Preview API",
    slug: "preview",
    url: "https://preview.endpnt.dev",
    description: "Extract rich link previews from any URL",
    longDescription: "Fetch Open Graph tags, Twitter Cards, favicons, titles, and descriptions from any URL. Build link previews like Slack, Discord, and iMessage.",
    features: ["OG tag extraction", "Twitter Cards", "Favicon detection", "Redirect following", "< 500ms response"],
    icon: "link",
    color: "#D85A30",
  },
  {
    name: "Image Conversion API",
    slug: "convert",
    url: "https://convert.endpnt.dev",
    description: "Convert, resize, and optimize images",
    longDescription: "Upload an image or provide a URL. Convert between formats, resize with smart cropping, compress for web, add watermarks, and strip metadata. Powered by Sharp.",
    features: ["Format conversion", "Smart resize", "Compression", "Watermarking", "Metadata stripping"],
    icon: "image",
    color: "#1D9E75",
  },
  {
    name: "Validation API",
    slug: "validate",
    url: "https://validate.endpnt.dev",
    description: "Verify emails, phones, and domains",
    longDescription: "Validate email addresses with MX record checks, detect disposable domains, verify phone number formats, and check domain DNS health. Batch support for up to 50 items.",
    features: ["Email validation", "Phone formatting", "Domain DNS checks", "Disposable detection", "Batch processing"],
    icon: "shield-check",
    color: "#378ADD",
  },
];
```

### APIs Page (/apis)
- Full-width cards for each API with:
  - Name, full description, feature list
  - Live code example specific to that API
  - "View Documentation →" and "Try it Free →" buttons
  - Badge showing "No AI required" on each

### Pricing Page (/pricing)
- Platform-wide pricing table showing all tiers:

| Feature | Free | Starter ($29/mo) | Pro ($99/mo) | Enterprise |
|---------|------|-------------------|--------------|------------|
| Requests/month | 100 | 5,000 | 25,000 | Unlimited |
| Rate limit | 10/min | 60/min | 300/min | Custom |
| APIs included | All 5 | All 5 | All 5 | All 5 |
| Support | Community | Email | Priority | Dedicated |
| SLA | — | — | 99.9% | Custom |

- Toggle between monthly and annual (20% discount for annual)
- FAQ section below
- "All plans include access to all 5 APIs with a single API key"

### Docs Page (/docs)
- Overview documentation (NOT individual API docs — those live on each subdomain):
  - How authentication works (x-api-key header, ek_ prefix)
  - Rate limiting explained (tiers, sliding window)
  - Response format ({ success, data, meta } envelope)
  - Error codes reference table
  - "For API-specific documentation, visit each API's docs page"
  - Links to each API's /docs page

### About Page (/about)
- Brief story: who you are, why you built endpnt
- "Built for developers who need reliable, no-nonsense APIs"
- Contact: email, Twitter/X, GitHub
- Tech stack transparency: "Built with Next.js, deployed on Vercel, rate-limited with Upstash"

### Blog (/blog)
- For launch, include 2-3 placeholder posts:
  1. "Introducing endpnt.dev — Developer APIs that just work"
  2. "Why we built 5 APIs with zero AI dependencies"
  3. "How to capture website screenshots with the endpnt Screenshot API"
- These drive SEO for keywords like "screenshot API", "QR code API", "free developer APIs"
- Blog post pages should have proper meta tags, OG images, and structured data

### Design Direction
- **Dark theme** — nearly black background (#0a0a0a or similar), white/light gray text
- **Accent color:** Teal (#0F6E56) for primary buttons and links
- **Logo:** "endpnt" in monospace font + ".dev" in gray. Simple, no icon needed.
- **Navigation:** Sticky header with: Logo | APIs | Pricing | Docs | Blog | GitHub icon | "Get Started" button
- **Typography:** System font stack or Inter for body, JetBrains Mono or similar for code
- **Cards:** Subtle border (1px rgba white 10%), slight hover effect, no shadows
- **Code blocks:** Dark card with syntax highlighting, copy button
- **Mobile:** Hamburger menu, stacked cards, full-width CTAs
- **Inspiration:** vercel.com, resend.com, linear.app, cal.com — clean, dark, developer-focused

---

## DO NOT TOUCH

- Do not modify any files outside `/mnt/c/Repositories/endpnt/web/`
- Do not touch any API repos (screenshot, preview, qr, convert, validate)

---

## Edge Cases

1. All external links to API subdomains should open in the same tab (not new tab) — they're part of the same platform
2. Mobile navigation must work cleanly with 6+ nav items
3. Pricing page should handle the case where Stripe isn't set up yet — show "Coming soon" or "Contact us" instead of broken checkout links
4. Blog post slugs should be URL-friendly (lowercase, hyphens, no special chars)
5. OG images should be generated or at minimum have a default fallback
6. 404 page should be branded and helpful (link back to home)

---

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://endpnt.dev
NEXT_PUBLIC_SCREENSHOT_URL=https://screenshot.endpnt.dev
NEXT_PUBLIC_QR_URL=https://qr.endpnt.dev
NEXT_PUBLIC_PREVIEW_URL=https://preview.endpnt.dev
NEXT_PUBLIC_CONVERT_URL=https://convert.endpnt.dev
NEXT_PUBLIC_VALIDATE_URL=https://validate.endpnt.dev
```

---

## Git Commit & Push

```bash
git add -A && git commit -m "feat: initial endpnt.dev hub site — home, APIs, pricing, docs, about, blog" && git push origin dev
```

**DO push to dev.**

---

## Smoke Tests

| # | Scenario | Steps | Expected Result | Pass/Fail |
|---|----------|-------|-----------------|-----------|
| 1 | Home page loads | Visit / | Hero, API grid, features, pricing preview render | |
| 2 | API cards link correctly | Click each API card on home page | Each links to correct subdomain | |
| 3 | APIs page | Visit /apis | All 5 APIs listed with descriptions and code examples | |
| 4 | Pricing page | Visit /pricing | 4-tier table renders, monthly/annual toggle works | |
| 5 | Docs page | Visit /docs | Auth, rate limits, response format, error codes documented | |
| 6 | About page | Visit /about | Story, contact info, tech stack render | |
| 7 | Blog index | Visit /blog | Blog post cards render | |
| 8 | Blog post | Click a blog post | Full post renders with proper formatting | |
| 9 | Navigation | Click each nav link | All pages accessible, active state shown | |
| 10 | Mobile navigation | View on mobile width | Hamburger menu works, all links accessible | |
| 11 | 404 page | Visit /nonexistent-page | Branded 404 page with link to home | |
| 12 | Meta tags | Inspect page source on home page | Title, description, OG tags present | |
| 13 | External API links | Click "View Docs" on any API card | Goes to the correct subdomain /docs page | |
| 14 | Dark theme | Load any page | Dark background, light text, teal accents | |
| 15 | Lighthouse score | Run Lighthouse on home page | Performance 90+, SEO 90+ | |
