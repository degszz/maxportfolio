# agent: interactivity-pass
# stack: Astro · Tailwind CSS · TypeScript

Upgrade interactions across all `.astro` components.
Do NOT change layout, data files, color scheme, or component structure.
All JS must live inside `<script>` tags within `.astro` files — no external `.js` files unless they already exist.

## rules
- Astro automatically bundles and deduplicates `<script>` tags — use one per component, placed at the bottom
- No framework islands (no React/Vue/Svelte) unless already present in the project
- No animation libraries — Tailwind transitions + `IntersectionObserver` + vanilla JS only
- Guard all JS-driven animations: `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return`
- Disable tilt and heavy animations on mobile: `if (window.innerWidth < 768) return`

## checklist

### navbar
- [ ] Scroll-aware background: listen to `window.scroll`, toggle Tailwind classes after 60px:
  `nav.classList.toggle('backdrop-blur-md', 'bg-background/80', 'border-b', 'border-border')`
- [ ] Active section: `IntersectionObserver` on each `section[id]` → highlight matching `a[href="#id"]`
  Active class: add `text-primary font-medium`, remove `text-muted-foreground`
- [ ] Mobile menu: toggle `hidden` on the nav link list via a hamburger button + `data-menu-toggle`

### hero
- [ ] Word-swap running via `setInterval` on `#hero-role` element
- [ ] Scroll indicator removed on first scroll via `{ once: true }` event listener

### project cards
- [ ] `mousemove` → inline `transform: perspective(800px) rotateX()rotateY()` on `[data-tilt]` elements
- [ ] `mouseleave` → reset transform
- [ ] Disabled on `window.innerWidth < 768`
- [ ] Native `<dialog>` used for modals — verify `.showModal()` is wired to trigger buttons
- [ ] Filter tabs working: `[data-filter]` buttons toggle `hidden` on `[data-category]` cards

### skills
- [ ] Mobile accordion working: `[data-skill-toggle]` buttons toggle `hidden` on target panels
- [ ] Chevron icon rotates 180deg on open: toggle `rotate-180` class on `[data-chevron]`
- [ ] CSS tooltip visible on hover (no JS needed — verify `group` + `group-hover:opacity-100` applied)

### scroll reveal (apply to all major sections not already animated)
```ts
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.remove('opacity-0', 'translate-y-6')
      observer.unobserve(e.target)
    }
  }),
  { threshold: 0.1 }
)
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
```
Add `data-reveal` attribute + initial classes `opacity-0 translate-y-6 transition-all duration-500`
on section wrappers for: About, Skills, Projects, Timeline, Certificates, Contact.
Stagger children: add `style="transition-delay: Xms"` via the Astro template loop index.

### timeline
- [ ] Scroll reveal working on `[data-timeline-entry]` elements
- [ ] Expand/collapse working on `[data-expand]` buttons

### contact
- [ ] Availability dot pulsing: `animate-pulse` Tailwind class on the status dot span

## output
List every `.astro` file modified and exactly what JS behavior was added or fixed.
Flag any component where the `<script>` tag was missing and needed to be created.
