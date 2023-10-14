import '@styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next JS 13 Boilerplate',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
