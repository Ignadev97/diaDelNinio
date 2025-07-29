import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gran Festejo del Día del Niño - Uber Tucumán",
  description:
    "Te invitamos a compartir una tarde increíble llena de alegría, juegos y sorpresas para los más pequeños.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
