import type { MetadataRoute } from 'next'
import { SITE } from '@/data/siteData'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow every standard crawler full access.
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly welcome AI/LLM crawlers so the clinic content can be
      // indexed and surfaced by AI assistants and answer engines.
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Googlebot',
          'Applebot',
          'Applebot-Extended',
          'Bingbot',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'cohere-ai',
          'Meta-ExternalAgent',
          'FacebookBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
