# skill: certificates
# stack: Astro · Tailwind CSS · TypeScript

## data shape (src/data/certificates.ts)
```ts
export type CertCategory = 'AI' | 'Cloud' | 'WebDev' | 'Other'
export type Certificate = {
  id: string
  name: string
  issuer: string
  date: string
  category: CertCategory
  verifyUrl?: string
  image?: string
}
export const certificates: Certificate[] = [ /* ... */ ]
```

## file
`src/components/Certificates.astro`

## category → border glow color
```ts
const CATEGORY_GLOW: Record<CertCategory, string> = {
  AI:     'hover:border-purple-500/50 hover:shadow-purple-500/10',
  Cloud:  'hover:border-blue-500/50 hover:shadow-blue-500/10',
  WebDev: 'hover:border-green-500/50 hover:shadow-green-500/10',
  Other:  'hover:border-border hover:shadow-muted/10',
}
```

## filter tabs — same vanilla JS pattern as project-cards
Use `data-filter` on buttons and `data-category` on cards.
Tab active state: toggle `bg-primary text-primary-foreground` class.

## card structure
```astro
<article
  data-category={cert.category}
  class:list={[
    'rounded-xl border border-border p-4 bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-200',
    CATEGORY_GLOW[cert.category]
  ]}
>
  <!-- image or initials placeholder -->
  {cert.image
    ? <img src={cert.image} alt={cert.name} class="h-16 object-contain mb-3" loading="lazy" />
    : <div class="h-16 w-full flex items-center justify-center rounded-md bg-muted text-2xl font-bold text-muted-foreground mb-3">
        {cert.issuer.slice(0, 2).toUpperCase()}
      </div>
  }
  <h3 class="font-semibold text-sm text-foreground leading-snug">{cert.name}</h3>
  <p class="text-xs text-muted-foreground mt-1">{cert.issuer} · {cert.date}</p>
  <span class="inline-block mt-2 px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">{cert.category}</span>
  {cert.verifyUrl && (
    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
       class="block mt-3 text-xs text-primary hover:underline">
      Verify credential ↗
    </a>
  )}
</article>
```

## grid
```html
class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
```

## note on images
Use plain `<img>` with `loading="lazy"` — Astro's `<Image />` component from `astro:assets`
is also acceptable if the project already uses it elsewhere. Match the existing convention.

## output
`src/components/Certificates.astro` — no islands. Filter JS in `<script>`.
