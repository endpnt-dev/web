# BUGS.md — Web Bug Tracker

**Scope:** Bugs specific to the endpnt.dev web hub (`endpnt.dev`, the marketing/landing site). Cross-cutting bugs live at `../BUGS.md`.

**ID prefix:** `W-NNN` (sequential, do not reuse).

**Last updated:** 2026-04-28.

---

## Open bugs



### W-003 — `lib/apis.ts` lists only 5 of 10 APIs

- **Severity:** Medium (homepage/showcase incomplete)
- **File:** `lib/apis.ts`
- **Discovered:** 2026-04-24 (biweekly code health audit)
- **Symptom:** `lib/apis.ts` (which drives the API catalog/showcase on the homepage) only lists 5 of the 10 APIs on the platform. The 5 missing APIs are not shown to prospective users browsing the homepage.
- **Root cause:** File was populated with the initial 5 APIs during scaffolding and never updated as new APIs launched.
- **Impact:** New visitors see an incomplete product — half the platform's value proposition is invisible. Affects conversion from homepage visitors to signed-up users.
- **Fix approach:** Add entries for all 10 APIs to `lib/apis.ts`. Reference `docs/API-CATALOG.md` for accurate descriptions and endpoint lists. Verify the component that renders the catalog renders all entries.
- **Status:** Open. Fix before public launch.

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

---

## Resolved bugs

### W-002 — Stale API endpoint paths in code examples

- **Originally:** Medium, discovered 2026-04-24
- **Resolved:** 2026-04-28
- **Resolution commit:** *(to be filled after push)*
- **Files changed:** `lib/apis.ts` (5 paths), `components/Hero.tsx` (3 paths), `app/docs/page.tsx` (3 paths, replace_all), `app/blog/[slug]/page.tsx` (2 paths, replace_all), `app/apis/page.tsx` (1 template path)
- **What changed:** 14 stale `/api/<operation>` paths replaced with correct `/api/v1/<operation>` paths. Several also had wrong operation names fixed: `/api/screenshot` → `/api/v1/capture`, `/api/preview` → `/api/v1/unfurl`, `/api/email` → `/api/v1/validate/email`.
- **Secondary issues discovered:** W-006 logged for camelCase parameter names and incorrect response field names in the same examples (out of scope for this fix).

---

### W-001 — Footer links to non-existent pages (/about, /privacy, /terms)

- **Originally:** Medium (customer-visible 404s), discovered 2026-04-24
- **Resolved:** 2026-04-28
- **Resolution commit:** *(to be filled after push)*
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
