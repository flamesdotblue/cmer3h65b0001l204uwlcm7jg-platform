import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Skeuomorphism Showcase',
  description: 'A soft skeuomorphic interface demo using Next.js and Tailwind.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
