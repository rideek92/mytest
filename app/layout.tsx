import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'My test App',
  description: 'I first time use firebase alone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
