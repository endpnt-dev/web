# BUGS.md — Web Bug Tracker

**Scope:** Bugs specific to the endpnt.dev web hub (`endpnt.dev`, the marketing/landing site). Cross-cutting bugs live at `../BUGS.md`.

**ID prefix:** `W-NNN` (sequential, do not reuse).

**Last updated:** 2026-04-24 (created by first biweekly code health audit).

---

## Open bugs

### W-001 — Footer links to non-existent pages (/about, /privacy, /terms)

- **Severity:** Medium (customer-visible 404s)
- **File:** Footer component (verify exact path — likely `app/components/Footer.tsx` or `components/Footer.tsx`)
- **Discovered:** 2026-04-24 (biweekly code health audit)
- **Symptom:** The site footer links to `/about`, `/privacy`, and `/terms`. None of these pages exist in the `app/` directory. Clicking them returns a Next.js 404 page. Visitors who investigate the site before signing up (as many developers do) will hit these 404s and lose confidence.
- **Root cause:** Pages were planned/linked in the footer during initial scaffolding but never implemented.
- **Impact:** Any user who clicks About, Privacy Policy, or Terms of Service lands on a 404. Privacy and Terms pages are also a legal/compliance concern — most B2B API products require these before customer acquisition.
- **Fix approach:**
  1. Implement stub pages for `/about`, `/privacy`, and `/terms` — even a single-sentence placeholder is better than a 404.
  2. Privacy policy and terms of service content should be reviewed by JK before launch; do not generate filler legal text — create the page structure, leave content as `TODO: insert [privacy/terms] text`.
  3. About page can be a brief product mission statement.
- **Status:** Open. Fix before marketing launch (Privacy and Terms are near-launch-blockers for B2B credibility).

### W-002 — Stale API endpoint paths in code examples

- **Severity:** Medium (developer experience — misleads API integrators)
- **File:** API documentation pages or code example components (verify exact paths during fix)
- **Discovered:** 2026-04-24 (biweekly code health audit)
- **Symptom:** Code examples on the web hub reference pre-v1 API endpoint paths (e.g., `/api/convert` instead of the correct `/api/v1/convert`). A developer copy-pasting these examples will get 404s from the API.
- **Root cause:** Code examples were written before the v1 versioned path convention was finalized. Never updated.
- **Impact:** Developers integrating the API from the web examples get immediate 404 failures, undermining confidence in the product and potentially generating support requests.
- **Fix approach:** Audit all code example strings in the web repo for API endpoint paths. Replace pre-v1 paths (`/api/<operation>`) with versioned paths (`/api/v1/<operation>`). Verify against actual deployed route files in each API repo.
- **Status:** Open. Fix before public launch.

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

---

## Resolved bugs

*(None resolved yet — file created 2026-04-24.)*

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
