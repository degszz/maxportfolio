export type EntryType = 'milestone' | 'project' | 'cert' | 'job'

export type TimelineEntry = {
  year: string
  title: string
  description: string
  tags: string[]
  type: EntryType
}

export const timeline: TimelineEntry[] = [
  {
    year: '2022',
    title: 'Inicio como Desarrollador Autodidacta',
    description: 'Comencé mi camino en el desarrollo web aprendiendo HTML, CSS y JavaScript de forma autodidacta, construyendo proyectos pequeños para practicar.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Certificaciones en Tecnologías Web',
    description: 'Logré certificarme en Python, JavaScript, HTML5, CSS3 y Tailwind CSS a través de cursos especializados de midudev.',
    tags: ['Python', 'JavaScript', 'CSS', 'Certificaciones'],
    type: 'cert',
  },
  {
    year: '2023',
    title: 'Desarrollo de Design System',
    description: 'Trabajé con un equipo especializado para desarrollar un Design System con +8 componentes reutilizables para interfaces UX/UI consistentes.',
    tags: ['React', 'Storybook', 'UX/UI', 'Team Work'],
    type: 'project',
  },
  {
    year: '2024',
    title: 'Contribución en Inmobiliaria',
    description: 'Optimicé, mejoré, desarrollé y diseñé una app para una inmobiliaria, facilitando el trabajo excesivo del equipo mediante automatización.',
    tags: ['Flutter', 'TypeScript', 'UX/UI', 'Freelance'],
    type: 'job',
  },
  {
    year: '2024',
    title: 'Webs para Emprendimientos',
    description: 'Desarrollé webs para emprendimientos locales facilitando la toma y venta de pedidos, incluyendo integración con WhatsApp Business API.',
    tags: ['Astro', 'WhatsApp API', 'Tailwind CSS'],
    type: 'project',
  },
  {
    year: '2025',
    title: 'Certificación MCP & AI',
    description: 'Obtuve certificación en Model Context Protocol (MCP), profundizando en integración de LLMs y AI Agents en aplicaciones web.',
    tags: ['MCP', 'AI Agents', 'LLMs'],
    type: 'cert',
  },
  {
    year: '2025',
    title: 'Contribuciones Open Source',
    description: 'Participé activamente en diversos proyectos de GitHub, contribuyendo código y mejoras a repositorios de la comunidad.',
    tags: ['GitHub', 'Open Source', 'TypeScript'],
    type: 'project',
  },
]
