import { locales } from '@/i18n/routing'
import { siteConfig } from '@/site-config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = Object.keys(locales).map((locale) => ({
      url: `${siteConfig.baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
  }))

  return [
    ...homePages,
  ]
}