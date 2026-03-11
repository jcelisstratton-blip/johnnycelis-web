import './globals.css'

export const metadata = {
  title: 'Stratt-On Agency | Agentes de IA y Automatización de Procesos',
  description: 'Arquitectura de agentes y procesos autónomos para escalar empresas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  )
}
