import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lochana Bandara | Portfolio',
  description: 'Full Stack Developer & Creative Designer - Welcome to my personal portfolio showcasing my projects and skills.',
  keywords: ['Lochana Bandara', 'Portfolio', 'Web Developer', 'Full Stack', 'React', 'Next.js'],
  authors: [{ name: 'Lochana Bandara' }],
  openGraph: {
    title: 'Lochana Bandara | Portfolio',
    description: 'Full Stack Developer & Creative Designer',
    url: 'https://itslochana.me',
    siteName: 'Lochana Bandara Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-darker text-white antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
