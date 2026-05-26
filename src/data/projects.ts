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

export const projects: Project[] = [

  {
    id: 'mandados-ahora',
    title: 'Pedidos Online',
    tagline: 'Plataforma de servicios a domicilio con chat en tiempo real',
    stack: ['Astro', 'Supabase', 'Stripe', 'Mercado Pago', 'Google Maps', 'TypeScript'],
    category: 'Fullstack',
    challenge: 'Migrar desde WordPress con scraping en Python, implementar chat en tiempo real entre repartidores y usuarios, e integrar Stripe y Mercado Pago.',
    liveUrl: 'https://benquerencia.vercel.app',
    repoUrl: null,
    image: '/logo-benquerencia.avif',
  },
  {
    id: 'barber-web',
    title: 'Barber Web',
    tagline: 'Sistema de turnos online para peluqueria',
    stack: ['Astro', 'Supabase', 'TypeScript', 'WhatsApp API'],
    category: 'Fullstack',
    challenge: 'Integrar reservas en tiempo real con Supabase, panel de administrador y confirmacion automatica via WhatsApp.',
    liveUrl: 'https://kmzbarber.netlify.app',
    repoUrl: null,
    image: '/logo-kmzbarber.gif',
  },
  {
    id: 'barrio-privado',
    title: 'Barrio Privado',
    tagline: 'Web interactiva con clima en tiempo real y servicios',
    stack: ['Astro', 'TypeScript', 'Weather API', 'Tailwind CSS', 'Python'],
    category: 'Frontend',
    challenge: 'Consumir una API meteorologica para mostrar clima actual y pronostico en la zona del barrio, con videos descriptivos de actividades y servicios.',
    liveUrl: 'https://mandadosahora.netlify.app',
    repoUrl: null,
    image: '/logo-barrio.png',
  },
  {
    id: 'water-web',
    title: 'Water Web',
    tagline: 'Web para pedir agua a domicilio con WhatsApp API',
    stack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    category: 'Frontend',
    challenge: 'Integrating WhatsApp Business API for automated messaging and order management.',
    liveUrl: 'https://polite-figolla-9c03dc.netlify.app/',
    repoUrl: null,
    image: '/water.avif',
  },
  {
    id: 'design-system',
    title: 'Design System',
    tagline: '+8 reusable components for consistent UI',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    category: 'Frontend',
    challenge: 'Building a component library with consistent APIs and accessibility across all variants.',
    liveUrl: 'https://helpful-basbousa-eca252.netlify.app/',
    repoUrl: null,
    image: '/puzzle.avif',
  },
  {
    id: 'web-food',
    title: 'Web Food',
    tagline: 'Food ordering platform for local businesses',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    challenge: 'Optimizing order flow UX for mobile-first users.',
    liveUrl: null,
    repoUrl: null,
    image: '/3d.avif',
    placeholder: true,
  },
  {
    id: 'business-web',
    title: 'Business Web',
    tagline: 'Corporate web presence for enterprises',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript'],
    category: 'Frontend',
    challenge: 'Delivering fast load times with rich animations on a static Astro site.',
    liveUrl: 'https://polite-figolla-9c03dc.netlify.app/',
    repoUrl: null,
    image: '/business.avif',
    placeholder: true,
  },
]
