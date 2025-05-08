import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./utils/abort-controller-polyfill"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Weather App",
  description: "A modern weather application built with Next.js and Laravel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
