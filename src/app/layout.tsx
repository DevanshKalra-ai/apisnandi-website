import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#023e9f',
}

export const metadata: Metadata = {
  title: 'Apis Nandi Insurance Brokers | Protection with Precision.',
  description: 'Apis Nandi Insurance Brokers Pvt. Ltd. provides complete tailored insurance solutions and proactive risk management advisory.',
  icons: {
    icon: '/assets/images/apis_logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 bg-gray-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
