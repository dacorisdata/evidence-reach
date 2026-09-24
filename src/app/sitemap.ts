import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { mainNav, footerNav } from '@/content/nav';

// Pages that are live but not linked from the menus or footer. They stay in the sitemap.
const unlistedPaths = ['/resources', '/developers'];

// Built from the navigation content, so every page linked in the menus or footer is listed.
function collectPaths(): string[] {
  const paths = new Set<string>(['/', ...unlistedPaths]);

  const add = (href?: string) => {
    if (!href || !href.startsWith('/')) return;
    paths.add(href.split('#')[0] || '/');
  };

  mainNav.forEach((item) => {
    add(item.href);
    item.children?.forEach((child) => add(child.href));
  });
  footerNav.forEach((column) => column.links.forEach((link) => add(link.href)));

  return [...paths];
}

function priorityFor(path: string): number {
  if (path === '/') return 1;
  const depth = path.split('/').filter(Boolean).length;
  return depth === 1 ? 0.8 : 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return collectPaths().map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: priorityFor(path),
  }));
}
