import type { MetadataRoute } from 'next'
import { SITE_URL_CONST } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: SITE_URL_CONST,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL_CONST}/#categories`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL_CONST}/#featured`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL_CONST}/#contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
