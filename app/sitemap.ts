import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

interface RouteEntry {
  path: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Static route registry for StackCraft Labs.
 * Update `lastModified` (ISO format YYYY-MM-DD) whenever route content is updated.
 */
const ROUTES: RouteEntry[] = [
  {
    path: '',
    lastModified: '2026-09-19',
    changeFrequency: 'monthly',
    priority: 1.0,
  },
  {
    path: '/portfolio',
    lastModified: '2026-09-19',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/about',
    lastModified: '2026-09-19',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/contact',
    lastModified: '2026-09-19',
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  // Future pages placeholders — uncomment and add real pages when implemented:
  // {
  //   path: '/privacy',
  //   lastModified: '2026-09-19',
  //   changeFrequency: 'yearly',
  //   priority: 0.3,
  // },
  // {
  //   path: '/terms',
  //   lastModified: '2026-09-19',
  //   changeFrequency: 'yearly',
  //   priority: 0.3,
  // },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Build sitemap entries for all static, public, indexable routes
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic content hook (e.g. /portfolio/[slug], /blog/[slug]):
  // Currently no dynamic routes exist. If a CMS, DB, or dynamic segments are added,
  // query the published items here and append:
  // const dynamicEntries: MetadataRoute.Sitemap = publishedItems.map((item) => ({
  //   url: `${SITE_URL}/portfolio/${item.slug}`,
  //   lastModified: item.updatedAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }));
  // return [...staticEntries, ...dynamicEntries];

  return staticEntries;
}
