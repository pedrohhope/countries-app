import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export type LayoutProps = {
  children: ReactNode;
  types: ReactNode;
};

export const metadata: Metadata = {
  title: 'Countries App',
  description: 'A simple app to search countries',
}

export default function RootLayout(
  { children }: LayoutProps,
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
