// lib/site.ts
// Single source of truth for the production domain.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.stackcraftlab.com'
).replace(/\/+$/, '');
