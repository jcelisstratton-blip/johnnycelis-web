import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import EasterEgg from '@/components/EasterEgg'
const title = 'Stratt-On Agency | Ecosistemas Autónomos de IA B2B'
const description = 'Optimizamos la operación de tu empresa con agentes de voz e IA, orquestación con n8n y self-hosting en Coolify.'

export const metadata = {
  metadataBase: new URL('https://www.stratt-on.com'),
  title,
  description,
  icons: {
    icon: [
      { url: '/brand/stratton-favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  openGraph: {
    title,
    description,
    url: 'https://www.stratt-on.com',
    siteName: 'Stratt-On Agency',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/brand/stratton-og-image.png', width: 1200, height: 630, alt: 'Stratt-On Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/brand/stratton-og-image.png'],
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
        <EasterEgg />
      </body>
    </html>
  )
}