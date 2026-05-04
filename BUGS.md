# BUGS.md — Web Bug Tracker

**Scope:** Bugs specific to the endpnt.dev web hub (`endpnt.dev`, the marketing/landing site). Cross-cutting bugs live at `../BUGS.md`.

**ID prefix:** `W-NNN` (sequential, do not reuse).

**Last updated:** 2026-05-04.

---

## Open bugs

### W-004 — `app/error.tsx` missing — no global error boundary

- **Severity:** Low (fallback error handling absent)
- **File:** `app/error.tsx` (needs to be created)
- **Discovered:** 2026-04-24 (biweekly code health audit)
- **Symptom:** Next.js App Router uses `app/error.tsx` as the global error boundary for uncaught rendering errors. Without it, unhandled errors in any Server or Client Component fall through to Next.js's default error page (which shows a generic message in prod and a stack trace in dev). The web hub has no `app/error.tsx`.
- **Root cause:** Omitted during initial scaffolding.
- **Impact:** If any component throws an unhandled error, users see a generic Next.js crash page with no branding. Not likely to trigger in normal operation, but poor experience when it does.
- **Fix approach:** Create `app/error.tsx` following the Next.js App Router error boundary pattern. Show a friendly branded error message with a "Return to home" link. Log the error to console for Vercel log visibility.
- **Status:** Open. Low priority. Bundle with frontend polish pass.

### W-005 — Unused packages: `shiki` and MDX dependencies

- **Severity:** Low (bloat — unused packages increase bundle size and cold-start time)
- **File:** `package.json`
- **Discovered:** 2026-04-24 (biweekly code health audit)
- **Symptom:** `shiki` (syntax highlighting) and MDX-related packages (`@next/mdx`, `@mdx-js/loader`, or similar) are listed in `package.json` but are not imported or used anywhere in the codebase.
- **Root cause:** Added during planning/scaffolding for a documentation feature that was never implemented.
- **Impact:** Dead dependencies increase `npm install` time, `node_modules` size, and potentially the Vercel function bundle. `shiki` in particular can be large (it bundles language grammars).
- **Fix approach:**
  1. Confirm these packages are truly unused: `grep -r "from 'shiki'" .` and `grep -r "@next/mdx" .` (and MDX variants).
  2. If confirmed unused, remove from `package.json` and run `npm install`.
  3. Verify build still passes after removal.
- **Status:** Open. Low priority. Clean up before public launch.

### W-006 — Code example parameter names and response fields use wrong casing/naming

- **Severity:** Medium (developer experience — copy-pasted examples fail at runtime)
- **Files:** `lib/apis.ts`, `components/Hero.tsx`, `app/docs/page.tsx`, `app/blog/[slug]/page.tsx`
- **Discovered:** 2026-04-28 (surfaced during W-002 audit)
- **Symptom:** Code examples use camelCase parameter names and response field names instead of the snake_case names the APIs actually accept/return. Also, blog post documents non-existent parameters and response fields, and uses wrong device names.
- **Known wrong parameter names:**
  - `fullPage` → `full_page` (screenshot, multiple files)
  - `foregroundColor` / `backgroundColor` → `color` / `background` (QR, apis.ts)
  - `text` → `data` (QR input, apis.ts and Hero.tsx)
  - `checkMx` / `checkDisposable` → `check_mx` / `check_disposable` (validate, apis.ts)
  - `darkMode` → `dark_mode` (screenshot blog post)
- **Known wrong response fields (docs/page.tsx):**
  - `imageUrl` → `image` (base64 string, not URL)
  - `processingTime` → `processing_ms`
  - `requestId` → `request_id`
  - `apiVersion` — not a real field in the response envelope
- **Blog post extra issues:** Documents parameters that don't exist (`blockAds`, `blockMedia`, `cache`, `headers`, `cookies`, `padding`, `paperSize`, `waitFor` as object) and wrong device names (`iPhone 12 Pro`, `Samsung Galaxy S21` instead of `desktop`, `mobile`, `tablet`).
- **Fix approach:** Audit all code examples against `docs/API-CATALOG.md` (platform root). Correct parameter names, response field names, and remove non-existent parameters. Verify against each API's actual route handler.
- **Status:** Open. Fix before public launch — misleads integrators and generates support requests.

### W-007 — Footer API list hardcodes 5 APIs, missing 4

- **Severity:** Medium (navigation — users cannot reach Barcode, Cipher, Color, PDF from the footer)
- **File:** `components/Footer.tsx`
- **Discovered:** 2026-05-04 (pre-merge QA review)
- **Symptom:** Footer `apis` array is a hardcoded list of 5 APIs (Screenshot, QR, URL Preview, Image Conversion, Validation). W-003 fixed `lib/apis.ts` and all pages that import from it, but the Footer uses a standalone static array that was not updated. Barcode, Cipher, Color, and PDF have no footer navigation link.
- **Root cause:** Footer was implemented with a local static array instead of importing from `lib/apis.ts`. W-003 missed it.
- **Impact:** Visitors navigating from the footer cannot reach 4 of 9 APIs.
- **Fix approach:** Either import `APIS` from `lib/apis.ts` and map over it, or manually add the missing 4 entries to the static array.
- **Cross-reference:** W-003 (W-003 resolution missed the Footer component)
- **Status:** Open. Fix before public launch.

### W-008 — PricingTable CTA buttons are non-functional

- **Severity:** Low (conversion — CTAs on pricing page do nothing on click)
- **File:** `components/PricingTable.tsx`
- **Discovered:** 2026-05-04 (pre-merge QA review)
- **Symptom:** "Get Started" and "Contact Us" buttons on pricing tiers are plain `<button>` elements with no `onClick` handler and no `href`. Clicking them produces no navigation or action.
- **Root cause:** Placeholder buttons added during scaffolding; sign-up/contact flow not yet implemented.
- **Impact:** Pricing page CTAs are dead. No conversion path for interested visitors.
- **Fix approach:** Replace `<button>` elements with `<a>` tags. Free tier "Get Started" → link to `/docs` or future sign-up page. Paid tier "Contact Us" → `mailto:hello@endpnt.dev`.
- **Status:** Open. Fix before public launch.

### W-009 — `public/og-image.png` placeholder removed — real branded OG image needed

- **Severity:** Medium (marketing — no social sharing image for any page)
- **File:** `public/og-image.png` (deleted), `app/layout.tsx` (og image reference removed)
- **Discovered:** 2026-05-04 (pre-merge QA review)
- **Symptom:** `public/og-image.png` contained a data-URI text string instead of a binary PNG file. The broken file was deleted and all `og-image.png` references stripped from `app/layout.tsx` metadata (Twitter card downgraded to `summary`). No OG image now ships with the site.
- **Root cause:** Placeholder data-URI committed in place of a real image during scaffolding.
- **Impact:** Link previews on Twitter/X, LinkedIn, Slack, Discord show no image for any endpnt.dev URL.
- **Fix approach:** Design a 1200×630 PNG (endpnt.dev branding, dark background per site theme). Place at `public/og-image.png`. Restore `images` arrays in `app/layout.tsx` openGraph and twitter blocks, and change twitter card back to `summary_large_image`.
- **Status:** Open. Fix before public launch.

---

## Resolved bugs

### W-003 — `lib/apis.ts` lists only 5 of 9 APIs

- **Originally:** Medium, discovered 2026-04-24
- **Resolved:** 2026-04-28
- **Resolution commit:** 09f0b35
- **Files changed:** `lib/apis.ts` (4 new entries), `app/page.tsx`, `app/apis/page.tsx`, `app/pricing/page.tsx`, `app/docs/page.tsx`, `components/PricingTable.tsx`, `lib/pricing.ts`
- **What changed:** Added barcode, cipher, color, and pdf entries to `lib/apis.ts`. Updated all customer-visible "5 APIs" count references to "9 APIs" across product pages, pricing, and docs. Blog post historical references to "5 APIs" intentionally left as-is (founding narrative). Color palette entry correctly describes algorithmic generation from a seed color (not image-based) — partially closes P-007. Note: W-003 bug said "10 APIs" but the platform has 9 customer-facing APIs (web hub is not in the catalog).
- **Secondary note:** W-006 (camelCase param names in existing entries) is a pre-existing tracked issue not addressed in this fix.

---

### W-002 — Stale API endpoint paths in code examples

- **Originally:** Medium, discovered 2026-04-24
- **Resolved:** 2026-04-28
- **Resolution commit:** 85d7061
- **Files changed:** `lib/apis.ts` (5 paths), `components/Hero.tsx` (3 paths), `app/docs/page.tsx` (3 paths, replace_all), `app/blog/[slug]/page.tsx` (2 paths, replace_all), `app/apis/page.tsx` (1 template path)
- **What changed:** 14 stale `/api/<operation>` paths replaced with correct `/api/v1/<operation>` paths. Several also had wrong operation names fixed: `/api/screenshot` → `/api/v1/capture`, `/api/preview` → `/api/v1/unfurl`, `/api/email` → `/api/v1/validate/email`.
- **Secondary issues discovered:** W-006 logged for camelCase parameter names and incorrect response field names in the same examples (out of scope for this fix).

---

### W-001 — Footer links to non-existent pages (/about, /privacy, /terms)

- **Originally:** Medium (customer-visible 404s), discovered 2026-04-24
- **Resolved:** 2026-04-28
- **Resolution commit:** f1d9be4
- **Files created:** `app/about/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`
- **Also updated:** `app/sitemap.ts` — added `/privacy` and `/terms` entries (were missing alongside the pre-existing `/about` entry)
- **What changed:** Three stub pages created. Privacy and Terms contain TODO markers; JK to author legal content before launch. About contains brief mission statement. Footer links at `components/Footer.tsx` were already correct — they just had no target pages.

---

## Bug entry template

```markdown
### W-XXX — [Short descriptive title]

- **Severity:** Critical | High | Medium | Low
- **File:** [path]
- **Discovered:** [YYYY-MM-DD, context]
- **Symptom:** [observable behavior]
- **Root cause:** [best-known explanation]
- **Impact:** [customer/security risk]
- **Fix approach:** [high-level plan]
- **Cross-reference:** [related bugs if any]
- **Status:** Open | In progress | Awaiting deployment
```
