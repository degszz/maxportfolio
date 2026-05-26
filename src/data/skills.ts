export type SkillLevel = 1 | 2 | 3 | 4 | 5

export const LEVEL_LABEL: Record<SkillLevel, string> = {
  1: 'Familiar',
  2: 'Competent',
  3: 'Proficient',
  4: 'Advanced',
  5: 'Expert',
}

export type SkillItem = { name: string; level: SkillLevel; icon?: string }
export type SkillCategory = { category: string; icon: string; items: SkillItem[] }

export const skills: SkillCategory[] = [
  {
    category: 'AI / LLMs',
    icon: '🤖',
    items: [
      { name: 'Prompt Engineering', level: 4 },
      { name: 'OpenAI API', level: 4 },
      { name: 'Anthropic Claude API', level: 3 },
      { name: 'LangChain', level: 3 },
      { name: 'RAG Pipelines', level: 3 },
      { name: 'AI Agents', level: 3 },
      { name: 'pgvector / Pinecone', level: 2 },
      { name: 'Fine-tuning concepts', level: 2 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React', level: 4 },
      { name: 'Next.js', level: 4 },
      { name: 'Astro', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'HTML & CSS', level: 5 },
      { name: 'Shadcn/ui', level: 3 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 4 },
      { name: 'Python', level: 3 },
      { name: 'Express', level: 3 },
      { name: 'REST APIs', level: 4 },
      { name: 'WebSockets', level: 3 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 3 },
      { name: 'Supabase', level: 3 },
      { name: 'MongoDB', level: 2 },
      { name: 'Prisma', level: 3 },
    ],
  },
  {
    category: 'DevOps',
    icon: '🚀',
    items: [
      { name: 'Docker', level: 2 },
      { name: 'GitHub Actions', level: 3 },
      { name: 'Vercel', level: 4 },
      { name: 'Netlify', level: 4 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 4 },
      { name: 'Claude Code', level: 4 },
      { name: 'VS Code', level: 5 },
      { name: 'Figma', level: 3 },
    ],
  },
]
