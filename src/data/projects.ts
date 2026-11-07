export type ProjectCategory = 'AI/LLM' | 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile'

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
    id: 'almacen-pos',
    title: 'Caja para Almacén',
    tagline: 'Punto de venta con stock, precios y reportes',
    stack: ['Flutter', 'Dart', 'Flutter Web'],
    category: 'Mobile',
    challenge: 'App de caja registradora para almacenes y supermercados, en producción para un cliente. Permite escanear o buscar productos (con atajo "3*código" para cargar cantidades), cobrar, controlar el stock, actualizar precios y ver reportes de ventas. Esta es una demo web con datos de ejemplo: los cambios se borran al recargar.',
    liveUrl: 'https://almacen-pos-demo.vercel.app',
    repoUrl: null,
    image: '/icons-pos.svg',
  },
  {
    id: 'inmobiliaria-alquileres',
    title: 'Gestión de Alquileres',
    tagline: 'App para inmobiliarias: contratos, recibos y cobros',
    stack: ['Flutter', 'Dart', 'Flutter Web'],
    category: 'Mobile',
    challenge: 'App de gestión para una inmobiliaria, en producción para un cliente. Centraliza contratos, propiedades, propietarios, inquilinos y garantes; emite recibos, avisa los vencimientos de los próximos 7 días, lleva el control de recibos pendientes y genera reportes. Esta es una demo web con datos de ejemplo: los cambios se borran al recargar.',
    liveUrl: 'https://inmobiliaria-demo-wine.vercel.app',
    repoUrl: null,
    image: '/icons-realestate.svg',
  },

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
    id: 'componhex',
    title: 'Componhex',
    tagline: 'Design system open source para copiar y pegar',
    stack: ['Tailwind CSS', 'Astro', 'HTML', 'Zero dependencias'],
    category: 'Frontend',
    challenge: 'Librería de 29 componentes (botones, cards, badges, avatares, toggles, tooltips y más), cada uno en 3 estilos distintos: Minimal, Cartoon 3D y Neo Glass. Sin dependencias: se copia el código en HTML, JSX o Astro y se pega en cualquier proyecto. Reemplaza a mi Design System anterior.',
    liveUrl: 'https://compohex.vercel.app',
    repoUrl: null,
    image: '/icons-componhex.svg',
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
  {
    id: 'api-rest-backend',
    title: 'REST API Service',
    tagline: 'API robusta con autenticación, roles y documentación',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Docker'],
    category: 'Backend',
    challenge: 'Diseñar una arquitectura RESTful escalable con autenticación JWT, roles de usuario, rate limiting y documentación automática con Swagger.',
    liveUrl: null,
    repoUrl: null,
    placeholder: true,
  },
  {
    id: 'ai-chat-assistant',
    title: 'AI Chat Assistant',
    tagline: 'Asistente conversacional con contexto y memoria',
    stack: ['Node.js', 'Anthropic Claude API', 'LangChain', 'Supabase', 'pgvector'],
    category: 'AI/LLM',
    challenge: 'Construir un asistente con RAG sobre documentos propios, memoria de conversación persistente y respuestas con citas de fuentes.',
    liveUrl: null,
    repoUrl: null,
    placeholder: true,
  },
]
