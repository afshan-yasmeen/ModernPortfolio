import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='px-5 md:px-24 py-5 md:py-10 h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <body className={inter.className}>{children}</body>
    </html>
  )
}