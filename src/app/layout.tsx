import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/site-config"

import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const generateMetadata = (): Metadata => {
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      template: "%s | " + siteConfig.name,
      default: siteConfig.name,
    },
    description: siteConfig.description,
    openGraph: {
      type: "website",
      images: [siteConfig.ogImage],
      url: siteConfig.baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      images: [siteConfig.ogImage],
      site: siteConfig.baseUrl,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
