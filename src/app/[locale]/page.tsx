import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"

import { CallToAction } from "./page/call-to-action"
import { EditorSection } from "./page/editor"
import { FAQSection } from "./page/faq"
import { FeaturesSection } from "./page/features"
import { HeroSection } from "./page/hero"
import { ToolsSection } from "./page/tools"

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return {
    alternates: {
      canonical: `/${locale}`
    }
  }
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      <EditorSection />
      <ToolsSection />
      <FeaturesSection />
      <FAQSection />
      <CallToAction />
    </main>
  )
}
