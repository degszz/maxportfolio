# skill: project-cards
# stack: Astro · Tailwind CSS · TypeScript

## data shape (src/data/projects.ts)
```ts
export type ProjectCategory = 'AI/LLM' | 'Frontend' | 'Backend' | 'Fullstack'
export type Project = {
  id: string
  title: string
  tagline: string
  stack: string[]
  category: ProjectCategory
  challenge: string
  liveUrl: string | null
  repoUrl: string | null
  image?: string
  placeholder?: boolean
}
export const projects: Project[] = [ /* ... */ ]
```

## files
- `src/components/Projects.astro` — filter tabs + grid, imports data
- `src/components/ProjectCard.astro` — single card, receives project as prop

## filter tabs (vanilla JS in <script>)
```ts
const tabs = document.querySelectorAll<HTMLButtonElement>('[data-filter]')
const cards = document.querySelectorAll<HTMLElement>('[data-category]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter!
    tabs.forEach(t => t.classList.remove('bg-primary', 'text-primary-foreground'))
    tab.classList.add('bg-primary', 'text-primary-foreground')
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter
      card.classList.toggle('hidden', !show)
    })
  })
})
```
Render tabs in Astro template:
```astro
{['All', 'AI/LLM', 'Frontend', 'Backend', 'Fullstack'].map(cat => (
  <button data-filter={cat.toLowerCase()} class="px-4 py-1.5 rounded-full text-sm border transition-colors">
    {cat}
  </button>
))}
```

## 3D tilt (vanilla JS, desktop only)
```ts
document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(card => {
  if (window.innerWidth < 768) return
  card.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = card.getBoundingClientRect()
    const rx = ((e.clientY - top) / height - 0.5) * -12
    const ry = ((e.clientX - left) / width - 0.5) * 12
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
  })
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  })
})
```
Add `data-tilt` attribute + `style="transition: transform 0.3s ease"` on each card element.

## modal (native <dialog> element — no library)
```astro
<!-- trigger -->
<button onclick={`document.getElementById('modal-${project.id}').showModal()`}>
  View Details
</button>

<!-- modal -->
<dialog id={`modal-${project.id}`} class="rounded-xl border border-border bg-background p-6 backdrop:bg-black/60 max-w-lg w-full">
  <form method="dialog">
    <button class="absolute top-4 right-4 text-muted-foreground hover:text-foreground">✕</button>
  </form>
  <!-- project details -->
</dialog>
```
Native `<dialog>` handles focus trap and Escape-to-close natively — no JS needed for that.

## stack badges — color map
```ts
const BADGE_COLOR: Record<string, string> = {
  'AI/LLM':    'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Frontend':  'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Backend':   'bg-green-500/10 text-green-400 border-green-500/20',
  'Fullstack': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}
```
For individual stack item badges, use `bg-muted text-muted-foreground` as default.

## placeholder cards
If `project.placeholder === true`:
```astro
<div class="absolute inset-0 rounded-xl backdrop-blur-sm bg-background/70 flex items-center justify-center z-10">
  <span class="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">Coming Soon</span>
</div>
```
Add `relative overflow-hidden` on the card wrapper.

## output
`src/components/Projects.astro` + `src/components/ProjectCard.astro`
All JS lives in `<script>` tags — no islands.
