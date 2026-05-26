# skill: hero-section
# stack: Astro · Tailwind CSS · TypeScript

## file
`src/components/Hero.astro`

## astro rules
- No framework islands needed for static content
- Word-swap animation: use a `<script>` tag inside the `.astro` file — Astro bundles it automatically
- All data (name, roles, CTAs) defined in the frontmatter `---` block as typed constants
- Animated background: pure CSS `@keyframes` inside a `<style>` tag in the component

## word-swap script (inside <script> tag)
```ts
const roles = ['Fullstack Developer', 'LLM Engineer', 'React Builder', 'Backend Developer']
let index = 0
const el = document.getElementById('hero-role')
if (el) {
  setInterval(() => {
    index = (index + 1) % roles.length
    el.classList.add('opacity-0', 'translate-y-2')
    setTimeout(() => {
      el.textContent = roles[index]
      el.classList.remove('opacity-0', 'translate-y-2')
    }, 300)
  }, 2500)
}
```
Apply `transition-all duration-300` on the `#hero-role` element via Tailwind.

## animated background
Define inside `<style>` — do NOT use inline styles or external CSS files:
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
.hero-bg {
  background: linear-gradient(135deg, var(--bg-from), var(--bg-via), var(--bg-to));
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```
Use CSS custom properties tied to Tailwind's config colors.

## CTAs
Plain `<a>` tags styled with Tailwind — no component library:
```astro
<a href="#projects" class="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
  View Projects
</a>
<a href="/cv.pdf" download class="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
  Download CV
</a>
<a href="#contact" class="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors">
  Contact
</a>
```

## scroll indicator
```astro
<div id="scroll-indicator" class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
  ↓
</div>
<script>
  window.addEventListener('scroll', () => {
    document.getElementById('scroll-indicator')?.remove()
  }, { once: true })
</script>
```

## output
Single `src/components/Hero.astro` file. No islands, no framework components.
