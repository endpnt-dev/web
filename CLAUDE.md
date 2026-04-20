# CLAUDE.md — Hub Site (web) Specific Rules

**This file supplements `C:\Repositories\endpnt\CLAUDE.md` (platform-wide rules).** Read both. Universal rules (definition of done, mandatory workflow, agent usage, spec archive procedure, status-report honesty) are in the platform file. Only hub-site-specific guidance lives here.

---

## What this repo is

The `web` repo is the endpnt.dev hub site — the public-facing landing page, pricing, docs, and marketing content. **It is NOT an API.** It has no `/api/v1/` routes. It does not handle user-submitted payloads. It does not hit Upstash.

That means several platform rules written for APIs don't apply here, and some specific rules below override them. Read this section carefully before copying patterns from sister repos.

---

## Platform Rules That DO Apply

- Definition of Done — build green locally, Vercel green, smoke tests pass
- `review-qa-agent` before every commit
- Honest status reporting
- Next 14 config syntax
- Commit message conventions
- Spec archive procedure

## Platform Rules That DO NOT Apply (and why)

- **Upstash Redis rate limiting** — no user input means no rate limit needed. Do not add `@upstash/ratelimit` to this repo.
- **API key authentication** — public site, no auth required.
- **Shared response envelope (`lib/response.ts`)** — there are no API responses to shape. Normal Next.js page responses only.
- **SSRF protection** — the site doesn't fetch user-supplied URLs. If a future feature adds this (e.g., a URL-preview demo), apply Preview's `isSSRFProtected` pattern at that point.

---

## Library Choices

| Library | Purpose | Key gotcha |
|---|---|---|
| `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react` | MDX for docs and marketing content | MDX compilation happens at build time in Next 14 — runtime compilation requires different setup. |
| `next-mdx-remote` | Runtime MDX rendering (e.g., for user-submitted or dynamic content) | Has known issues with certain Shiki themes. |
| `shiki` | Syntax highlighting in code samples | Loads grammars lazily. Limit to ~15-20 languages (see shiki rules below). |
| `gray-matter` | Frontmatter parsing for MDX files | Fine, no gotchas. |
| `clsx` | className composition | Standard utility, no concerns. |

### Shiki — language and theme restraint

Shiki supports 200+ languages out of the box but loading all of them bloats the bundle and slows first render. Pick a curated set for the docs site — the languages that actually appear in endpnt API examples:

```typescript
const LANGS = ['js', 'ts', 'jsx', 'tsx', 'python', 'go', 'rust', 'bash', 'shell', 'curl', 'json', 'yaml', 'http', 'md']
```

Themes: pick ONE light and ONE dark and stick to them. Multiple themes multiply the bundle by the number of themes. `github-light` and `github-dark` are safe defaults.

Read `node_modules/shiki/dist/index.d.mts` before writing highlighter code — Shiki's API has shifted between 0.x, 1.x, and 2.x.

### MDX — build-time vs runtime

For docs pages that ship with the repo (pricing, about, getting-started), use `@next/mdx` to compile at build time. For any future dynamic MDX (user-generated content, CMS-backed docs), switch to `next-mdx-remote`.

Don't mix strategies on the same page — pick one per content source.

---

## Next.js Config — CORRECT but Spartan

Current `next.config.js` is minimal:

```javascript
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
};
```

This is fine. If adding MDX support requires `withMDX()` wrapping, use the `@next/mdx` README pattern — do NOT switch to `next.config.mjs` without a reason; the sister APIs all use CommonJS `.js`.

---

## Rate Limiting — Not Needed, Not Used

There is no `lib/rate-limit.ts`, no `UPSTASH_REDIS_REST_URL` env var, no rate-limit middleware. **Do not add any of these.** The hub site serves static pages and MDX-compiled docs — there is nothing to rate-limit.

If a future feature introduces user-submitted content (contact form, feedback widget, demo forms that hit the actual APIs from the hub), rate-limit AT the API layer, not on the hub site.

---

## Hub-Site-Specific Concerns

### Cross-linking to API docs

Every API has its own `color.endpnt.dev/docs`, `qr.endpnt.dev/docs`, etc. The hub site should link OUT to those, not duplicate their content. Single source of truth is each API's own docs route.

### Marketing copy reviewers

Pricing pages, tier descriptions, and feature lists must stay in sync with the actual tier limits defined in each API's `lib/config.ts`. A mismatch (pricing page says "500 req/min" but the API enforces 300) is a trust-breaking bug. When pricing copy changes, cross-check against the enforcement code. When API limits change, cross-check against pricing copy.

### SEO and OG metadata

Every page needs proper `<title>`, `<meta description>`, and OpenGraph tags. Use Next 14's metadata API (`export const metadata = ...` or the `generateMetadata` function) — do NOT hand-roll `<head>` tags.

---

## Missing Dev Dependencies to Note

The `package.json` doesn't list a linter setup beyond the default `eslint-config-next`. If adding ESLint rules or Prettier config, treat that as its own spec — linter config changes ripple across every file.

---

## ESLint Config

`.eslintrc.json` exists at repo root. Before modifying it, read what's there — changing linter rules mid-project causes churn across unrelated files.

---

## Web-Specific Error Codes

Not applicable — the hub site does not return error envelopes. It returns standard Next.js error pages (404, 500 via `app/not-found.tsx`, `app/error.tsx`, etc.). If those pages don't exist yet, they should.

---

## DO NOT TOUCH (web-specific)

- `next.config.js` switching to `.mjs` without a specific reason
- Adding API-style dependencies (`@upstash/*`, `formidable`, `sharp`) — if you think you need them here, you're probably building in the wrong repo
- Marketing copy on pricing or feature pages without cross-referencing actual API tier enforcement
- Anything in `public/` without understanding why it's there (likely OG images, favicons, brand assets)
