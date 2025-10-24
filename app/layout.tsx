import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Trispace } from "next/font/google"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _trispace = Trispace({ subsets: ["latin"], variable: "--font-trispace" })

export const metadata: Metadata = {
  title: "Radar Analyzer - AI Token Security Scanner",
  description: "AI-powered Telegram bot that scans and analyzes token security risks across decentralized exchanges",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased ${_trispace.variable}`}> 
        {children}
        <Analytics />
      </body>
    </html>
  )
}
