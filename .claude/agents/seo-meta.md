# agent: seo-meta
# stack: Astro · Tailwind CSS · TypeScript

Add SEO, Open Graph, and structured data. Do NOT change any component logic, layout, or styling.

## step 1 — find real values
Before writing any code, search the existing codebase for:
- Developer's real name → check About section, footer, any existing `<title>`, README.md
- GitHub handle → check footer links, contact section, existing meta
- LinkedIn handle → same
- Domain / site URL → check `astro.config.*` for `site` property, or any existing canonical tag

Store these as constants to use in all tags below.

## step 2 — base layout meta tags
Find the base layout (usually `src/layouts/BaseLayout.astro` or `Layout.astro`).
Add or replace the `<head>` content:

```astro
---
export interface Props {
  title?: string
  description?: string
}
const {
  title = '{Name} — Fullstack Developer & LLM Engineer',
  description = 'Portfolio of {Name}, a fullstack developer specializing in TypeScript, Astro, and LLM integrations.',
} = Astro.props
const canonicalURL = new URL(Astro.url.pathname, Astro.site)
const ogImage = new URL('/og-image.png', Astro.site)
---
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  <meta name="author" content="{Name}" />
  <meta name="keywords" content="developer, portfolio, TypeScript, Astro, LLM, fullstack" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <!-- JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '{Name}',
    jobTitle: 'Fullstack Developer',
    url: Astro.site,
    sameAs: [
      'https://github.com/{handle}',
      'https://linkedin.com/in/{handle}',
    ],
  })} />
</head>
```

## step 3 — astro.config site property
Ensure `astro.config.*` has the `site` property set:
```ts
export default defineConfig({
  site: 'https://yourdomain.com',
  // ... rest of config
})
```
If the real domain is unknown, use a placeholder and log a warning.

## step 4 — public assets check
- `public/favicon.ico` → missing: log `[WARNING] favicon.ico not found`
- `public/og-image.png` → missing: log `[WARNING] og-image.png not found — must be 1200×630px`
- `public/cv.pdf` → missing: log `[WARNING] cv.pdf not found — Download CV link will 404`
Do NOT generate these files — log only.

## output
List every file modified. List all `[WARNING]` items. Do not touch component or data files.
