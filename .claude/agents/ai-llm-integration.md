# agent: ai-llm-integration
# stack: Astro · Tailwind CSS · TypeScript

Add or update AI/LLM skills and projects to align with 2025–2026 market demand.
Run after `portfolio-audit`. Only modifies data files — never component files.

## step 1 — skills (src/data/skills.ts)
Find or create the `AI / LLMs` category. Ensure these items exist:
```ts
{
  category: 'AI / LLMs',
  icon: '🤖',
  items: [
    { name: 'Prompt Engineering',    level: 4 },
    { name: 'OpenAI API',            level: 4 },
    { name: 'Anthropic Claude API',  level: 3 },
    { name: 'LangChain',             level: 3 },
    { name: 'RAG Pipelines',         level: 3 },
    { name: 'AI Agents',             level: 3 },
    { name: 'pgvector / Pinecone',   level: 2 },
    { name: 'Fine-tuning concepts',  level: 2 },
  ]
}
```
Rules:
- `AI / LLMs` must be the **first element** in the exported array
- Calibrate levels relative to the existing skills — do not make AI levels look inflated
- Do not remove or rename any existing skill items

## step 2 — projects (src/data/projects.ts)
Check for any entry with `category: 'AI/LLM'`. If none exist, append:
```ts
{
  id: 'ai-rag-assistant',
  title: 'AI Document Assistant',
  tagline: 'RAG-powered chatbot for document Q&A',
  stack: ['Astro', 'OpenAI API', 'pgvector', 'Supabase', 'TypeScript'],
  category: 'AI/LLM',
  challenge: 'Implementing semantic search over user-uploaded documents with sub-second retrieval latency.',
  liveUrl: null,
  repoUrl: null,
  placeholder: true,
},
{
  id: 'ai-automation-agent',
  title: 'Workflow Automation Agent',
  tagline: 'LLM agent that automates repetitive dev tasks',
  stack: ['Node.js', 'LangChain', 'Anthropic Claude API', 'TypeScript'],
  category: 'AI/LLM',
  challenge: 'Designing a reliable multi-step agent loop with tool use and error recovery.',
  liveUrl: null,
  repoUrl: null,
  placeholder: true,
},
```
`placeholder: true` marks these as temporary — the developer replaces them with real projects.

## step 3 — verify
- Run `tsc --noEmit` — zero errors required
- Confirm `AI / LLMs` is the first item in the skills export
- Confirm at least 1 project has `category: 'AI/LLM'`
- Do not touch any `.astro` component files
