import './globals.css'

export const metadata = {
  title: 'Johnny Celis | Stratt-On Agency',
  description: 'AI Automation Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body style={{ margin: 0, padding: 0, background: 'black' }}>
        {children}
      </body>
    </html>
  )
}
