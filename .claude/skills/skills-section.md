# skill: skills-section
# stack: Astro · Tailwind CSS · TypeScript

## data shape (src/data/skills.ts)
```ts
export type SkillLevel = 1 | 2 | 3 | 4 | 5
export const LEVEL_LABEL: Record<SkillLevel, string> = {
  1: 'Familiar', 2: 'Competent', 3: 'Proficient', 4: 'Advanced', 5: 'Expert'
}
export type SkillItem = { name: string; level: SkillLevel; icon?: string }
export type SkillCategory = { category: string; icon: string; items: SkillItem[] }
export const skills: SkillCategory[] = [ /* ... */ ]
```

## category order (AI/LLMs always first)
1. AI / LLMs — OpenAI API, Claude API, LangChain, RAG, pgvector, AI Agents, Prompt Engineering
2. Frontend — React, Astro, TypeScript, Tailwind CSS
3. Backend — Node.js, Express, FastAPI, Python, REST, WebSockets
4. Databases — PostgreSQL, Supabase, MongoDB, Redis, Prisma
5. DevOps — Docker, GitHub Actions, Vercel, Railway
6. Tools — Git, Claude Code, Cursor, Postman

## file
`src/components/Skills.astro`

## astro rules
- Import `skills` from `src/data/skills.ts` in the frontmatter
- Render loop with `skills.map(...)` in the template — pure `.astro`, no framework
- Proficiency dots: render 5 `<span>` elements, conditionally apply fill color based on `i < item.level`
- Tooltip: CSS-only using `group` + `group-hover:` — no JS required

## proficiency dots
```astro
<div class="flex gap-1 mt-1">
  {Array.from({ length: 5 }).map((_, i) => (
    <span class:list={['h-1.5 w-1.5 rounded-full', i < item.level ? 'bg-primary' : 'bg-muted']} />
  ))}
</div>
```

## CSS-only tooltip (no JS)
```astro
<div class="relative group inline-block">
  <span class="...">{item.name}</span>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-popover text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
    {LEVEL_LABEL[item.level]}
  </div>
</div>
```

## badge hover glow
```html
class="... hover:shadow-[0_0_10px_2px] hover:shadow-primary/30 transition-shadow duration-200"
```

## mobile accordion (pure JS in <script>)
```ts
document.querySelectorAll('[data-skill-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.getAttribute('data-skill-toggle')!)
    target?.classList.toggle('hidden')
    btn.querySelector('[data-chevron]')?.classList.toggle('rotate-180')
  })
})
```
Desktop: CSS grid `hidden md:grid`. Mobile: accordion visible, grid hidden (`md:hidden`).

## output
`src/components/Skills.astro` — no islands required.
