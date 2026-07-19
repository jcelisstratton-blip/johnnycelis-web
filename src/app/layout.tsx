import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export const metadata = {
  title: 'Stratt-On Agency | Expertos en Agentes de IA',
  description: 'Optimizamos tu empresa con agentes de voz e IA.',
  icons: {
    icon: [
      { url: '/brand/stratton-favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, background: 'var(--bg-color)' }}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}