import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // Non-production safety: block crawlers and omit sitemap on preview / staging deployments
  const isNonProduction =
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development';

  if (isNonProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // Production robots policy
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
