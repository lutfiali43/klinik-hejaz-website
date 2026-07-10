import type { MetadataRoute } from 'next'
import { SITE, branches, treatments } from '@/data/siteData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/rawatan`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/cawangan`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/permohonan`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/hubungi`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/privasi-polisi`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/terma-syarat`, changeFrequency: 'yearly', priority: 0.3 },
  ].map((route) => ({ ...route, lastModified: now }))

  const treatmentRoutes: MetadataRoute.Sitemap = treatments.map((t) => ({
    url: `${SITE.url}/rawatan/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const branchRoutes: MetadataRoute.Sitemap = branches.map((b) => ({
    url: `${SITE.url}/cawangan/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...treatmentRoutes, ...branchRoutes]
}
