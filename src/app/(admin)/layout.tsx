import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Header from '@/components/header/headerAdmin'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
