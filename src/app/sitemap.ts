import { siteConfig } from '@/site-config'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}