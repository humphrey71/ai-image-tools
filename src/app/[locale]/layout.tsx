import type { Metadata } from "next"

import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import localFont from "next/font/local"

import LanguageSwitcher from "@/components/language-switcher"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/site-config"

import "../globals.css"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'site' })
  const name = siteConfig.name(t)
  const description = siteConfig.description(t)
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      template: "%s | " + name,
      default: name,
    },
    description: description,
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="w-full flex gap-4 justify-end items-center p-4 bg-background/80 backdrop-blur-sm z-50">
              <LanguageSwitcher />
              <ThemeToggle />
            </header>
            <main className="pt-16">
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  )
}
