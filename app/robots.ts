import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/seo';

const PUBLIC_ALLOW_PATHS = [
  '/',
  '/apartments/',
  '/house/',
  '/llms.txt',
  '/llms-full.txt',
  '/ai.txt',
  '/.well-known/llms.txt',
];

const PRIVATE_DISALLOW_PATHS = ['/admin', '/admin/', '/api/'];

/**
 * Explicit allowlist for all major AI search crawlers, LLM answer engines,
 * and traditional web crawlers so WAF/CDN defaults never block AI discovery.
 */
const AI_AND_SEARCH_USER_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'GoogleOther',
  'Googlebot',
  'Bingbot',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Meta-ExternalAgent',
  'FacebookBot',
  'DuckAssistBot',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: AI_AND_SEARCH_USER_AGENTS,
        allow: PUBLIC_ALLOW_PATHS,
        disallow: PRIVATE_DISALLOW_PATHS,
      },
      {
        userAgent: '*',
        allow: PUBLIC_ALLOW_PATHS,
        disallow: PRIVATE_DISALLOW_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
