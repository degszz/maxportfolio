# agent: portfolio-audit
# stack: Astro · Tailwind CSS · TypeScript

Read the existing project and output a gap report. Do NOT modify any file.

## step 1 — project orientation
Read these files and note what you find:
- `astro.config.*` — integrations in use (mdx, sitemap, image, etc.), output mode (static/SSR)
- `tailwind.config.*` — custom colors, keyframes, dark mode strategy (`class` or `media`)
- `package.json` — all dependencies; note any icon libs, animation libs, framework adapters
- `tsconfig.json` — path aliases defined (e.g. `@/`, `~/`)
- `src/layouts/` — what base layouts exist

## step 2 — section inventory
For each section, check if a `.astro` component exists in `src/components/` or `src/sections/`:
Hero · About · Skills · Projects · Timeline · Certificates · Navbar · Contact · Footer

## step 3 — per-component checks
For each found component:
- Is data hardcoded in the template or imported from `src/data/`?
- Does it have a `<script>` tag for interactivity, or is it purely static?
- Does it use `loading="lazy"` on images?
- Is it mobile responsive (check for `sm:` / `md:` Tailwind breakpoints)?
- Are there hover states or animations?

## step 4 — data files
Check `src/data/` for: `projects.ts` · `skills.ts` · `certificates.ts` · `timeline.ts`
For each: does it exist? Is it typed? Does it export a typed array?

## step 5 — tailwind config audit
- Custom colors defined? List them.
- Custom keyframes / animations defined? List them.
- Dark mode strategy: `class` or `media`?
- Any Tailwind plugins installed (typography, forms, etc.)?

## step 6 — SEO / meta
Check `src/layouts/BaseLayout.astro` or equivalent:
- `<title>` and `<meta name="description">` present?
- Open Graph tags (`og:title`, `og:description`, `og:image`)?
- Twitter card meta?
- JSON-LD `<script type="application/ld+json">`?
- `<link rel="canonical">`?
- `public/favicon.ico`, `public/og-image.png`, `public/cv.pdf` present?

## output format

### Project Orientation
- Astro integrations: [list]
- Output mode: static / SSR
- Dark mode: class / media
- Path aliases: [list]
- Icon lib: [name or "none"]
- Animation lib: [name or "none"]

### Section Inventory
| Section      | Exists | Data File | Has Script | Images Lazy | Mobile OK | Interactive | Action Needed |
|--------------|--------|-----------|------------|-------------|-----------|-------------|---------------|
| Hero         | ✅/❌  | ✅/❌     | ✅/❌      | ✅/❌/N/A   | ✅/❌     | ✅/❌       | ...           |

### Data Files
| File              | Exists | Typed | Action Needed |
|-------------------|--------|-------|---------------|
| projects.ts       | ✅/❌  | ✅/❌ | ...           |

### Tailwind Config
Custom colors: [list or "none"]
Custom animations: [list or "none"]

### SEO Status
[what exists / what is missing]

### Summary
Missing sections: [list]
Missing data files: [list]
Highest priority fixes: [top 3]
