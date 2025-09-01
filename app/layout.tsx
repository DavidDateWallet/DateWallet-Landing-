import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "DateWallet - Find Unique Date Experiences",
  description: "Download to find the most unique and fun date experiences in your city",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DateWallet%20dark%20mode%20profile%20picture-9GAbCfxwtmgD12a5MRTisYuyuL1Ew3.png",
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DateWallet%20dark%20mode%20profile%20picture-9GAbCfxwtmgD12a5MRTisYuyuL1Ew3.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DateWallet%20dark%20mode%20profile%20picture-9GAbCfxwtmgD12a5MRTisYuyuL1Ew3.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${outfit.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
