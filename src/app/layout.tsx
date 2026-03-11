import './globals.css'

export const metadata = {
  title: 'Stratt-On Agency | Expertos en Agentes de IA',
  description: 'Optimizamos tu empresa con agentes de voz e IA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: 'black' }}>{children}</body>
    </html>
  )
}