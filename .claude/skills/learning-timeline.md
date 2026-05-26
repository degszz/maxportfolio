# skill: learning-timeline
# stack: Astro · Tailwind CSS · TypeScript

## data shape (src/data/timeline.ts)
```ts
export type EntryType = 'milestone' | 'project' | 'cert' | 'job'
export type TimelineEntry = {
  year: string
  title: string
  description: string
  tags: string[]
  type: EntryType
}
export const timeline: TimelineEntry[] = [ /* chronological order, oldest first */ ]
```

## type → Tailwind color map (define in component frontmatter)
```ts
const TYPE_STYLES: Record<EntryType, string> = {
  milestone: 'border-blue-500 text-blue-400',
  project:   'border-green-500 text-green-400',
  cert:      'border-amber-500 text-amber-400',
  job:       'border-purple-500 text-purple-400',
}
const DOT_COLOR: Record<EntryType, string> = {
  milestone: 'bg-blue-500',
  project:   'bg-green-500',
  cert:      'bg-amber-500',
  job:       'bg-purple-500',
}
```

## file
`src/components/Timeline.astro`

## layout
```astro
<section id="timeline" class="relative">
  <!-- vertical line -->
  <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

  {timeline.map((entry, i) => (
    <div
      data-timeline-entry
      class:list={[
        'relative flex md:items-center mb-12 opacity-0 translate-y-6 transition-all duration-500',
        i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
      ]}
      style={`transition-delay: ${i * 80}ms`}
    >
      <!-- dot on the line -->
      <div class:list={['absolute left-4 md:left-1/2 h-4 w-4 rounded-full border-2 border-background -translate-x-1/2 z-10', DOT_COLOR[entry.type]]} />

      <!-- content card -->
      <div class="ml-12 md:ml-0 md:w-[45%] rounded-xl border border-border p-4 bg-card">
        <span class:list={['text-xs font-mono border-l-2 pl-2 mb-1 block', TYPE_STYLES[entry.type]]}>
          {entry.year} · {entry.type}
        </span>
        <h3 class="font-semibold text-foreground">{entry.title}</h3>
        <!-- expandable description -->
        <p data-timeline-short class="text-sm text-muted-foreground mt-1 line-clamp-2">{entry.description}</p>
        <p data-timeline-full class="text-sm text-muted-foreground mt-1 hidden">{entry.description}</p>
        <button data-expand class="text-xs text-primary mt-2 hover:underline">Show more</button>
        <!-- tags -->
        <div class="flex flex-wrap gap-1 mt-3">
          {entry.tags.map(tag => (
            <span class="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  ))}
</section>
```

## scroll reveal + expand (vanilla JS in <script>)
```ts
// scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.remove('opacity-0', 'translate-y-6')
      observer.unobserve(e.target)
    }
  }),
  { threshold: 0.15 }
)
document.querySelectorAll('[data-timeline-entry]').forEach(el => observer.observe(el))

// expand toggle
document.querySelectorAll('[data-expand]').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('[data-timeline-entry]')!
    card.querySelector('[data-timeline-short]')?.classList.toggle('hidden')
    card.querySelector('[data-timeline-full]')?.classList.toggle('hidden')
    btn.textContent = btn.textContent === 'Show more' ? 'Show less' : 'Show more'
  })
})
```

## output
`src/components/Timeline.astro` — no islands. All JS in `<script>`.
