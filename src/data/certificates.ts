export type CertCategory = 'AI' | 'Cloud' | 'WebDev' | 'Other'

export type Certificate = {
  id: string
  name: string
  issuer: string
  date: string
  category: CertCategory
  verifyUrl?: string
  image?: string
}

export const certificates: Certificate[] = [
  {
    id: 'cert-python',
    name: 'Python',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/5e905990-1eab-4b65-a864-5d6ddd975851.pdf',
    image: '/icons8-python.svg',
  },
  {
    id: 'cert-python-2',
    name: 'Python Avanzado',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/55a12f17-0bf1-4fae-ab6c-d63077b2ba36.pdf',
    image: '/icons8-python.svg',
  },
  {
    id: 'cert-javascript',
    name: 'JavaScript',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/abb12ed4-59f7-4696-9047-3501d793b466.pdf',
    image: '/js.png',
  },
  {
    id: 'cert-html',
    name: 'HTML5',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/b63e6542-9e48-4eb1-a374-9cef6edda5c7.pdf',
    image: '/icons8-html-5.svg',
  },
  {
    id: 'cert-css',
    name: 'CSS3',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/fa8c7a3e-808d-4785-b27e-41a1aecc4e04.pdf',
    image: '/icons8-css3.svg',
  },
  {
    id: 'cert-css-avanzado',
    name: 'CSS Avanzado',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/035ec023-fe94-4e70-bcfd-fc50b4419757.pdf',
    image: '/icons8-css3.svg',
  },
  {
    id: 'cert-css-layout',
    name: 'CSS Layout & Grid',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    verifyUrl: 'https://certificados.midudev.com/c3106c8d-2b6f-4e7c-8fe4-14d5e1e9df97.pdf',
    image: '/icons8-css3.svg',
  },
  {
    id: 'cert-tailwind',
    name: 'Tailwind CSS',
    issuer: 'midudev',
    date: '2024',
    category: 'WebDev',
    image: '/icons8-tailwind-css.svg',
  },
  {
    id: 'cert-mcp',
    name: 'MCP (Model Context Protocol)',
    issuer: 'midudev',
    date: '2025',
    category: 'AI',
    verifyUrl: 'https://certificados.midudev.com/27c9ea26-4c00-483b-b173-d17d2e7f2b85.pdf',
    image: '/mcp.svg',
  },
]
