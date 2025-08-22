import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://focuswall.app', // <-- SUBSTITUA PELO SEU DOMÍNIO
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}