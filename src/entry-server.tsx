import { renderToString } from 'react-dom/server';
import { App } from './App';
import { routes, resolveRoute, notFoundRoute } from './routes';
import { site, faqs } from './data/site';
import { services } from './data/services';
import { articles } from './data/articles';

export { routes, notFoundRoute };
export function render(path: string) {
  const route = resolveRoute(path);
  const canonical = `${site.url}${route.path === '/' ? '/' : route.path}`;
  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.legalName,
    alternateName: 'Sliva',
    url: site.url,
    logo: { '@type': 'ImageObject', url: `${site.url}/brand-logo.png`, width: 512, height: 512 },
    description: site.description,
    email: site.email,
    telephone: site.internationalPhone,
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.internationalPhone,
      email: site.email,
      contactType: 'customer service',
      availableLanguage: ['Indonesian'],
    },
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'id-ID',
    publisher: { '@id': `${site.url}/#organization` },
  };
  const webpage = {
    '@type':
      route.type === 'faq'
        ? 'FAQPage'
        : route.type === 'about'
          ? 'AboutPage'
          : route.type === 'contact'
            ? 'ContactPage'
            : ['services', 'industries', 'insights', 'solutions'].includes(route.type)
              ? 'CollectionPage'
              : 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: 'id-ID',
    isPartOf: { '@id': `${site.url}/#website` },
    ...(route.type === 'faq'
      ? {
          mainEntity: faqs.map((x) => ({
            '@type': 'Question',
            name: x.question,
            acceptedAnswer: { '@type': 'Answer', text: x.answer },
          })),
        }
      : {}),
  };
  const graph: Record<string, unknown>[] = [organization, website, webpage];
  if (route.path !== '/' && route.type !== '404') {
    const parts = route.path.split('/').filter(Boolean);
    const crumbs = [
      { name: 'Beranda', item: `${site.url}/` },
      ...parts.map((_, i) => {
        const p = '/' + parts.slice(0, i + 1).join('/');
        return {
          name: routes.find((x) => x.path === p)?.label ?? route.label,
          item: `${site.url}${p}`,
        };
      }),
    ];
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: crumbs.map((x, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: x.name,
        item: x.item,
      })),
    });
  }
  if (route.type === 'service') {
    const x = services.find((s) => s.slug === route.slug)!;
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: x.name,
      description: x.description,
      url: canonical,
      provider: { '@id': `${site.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'Indonesia' },
      serviceType: x.name,
    });
  }
  if (route.type === 'article') {
    const x = articles.find((a) => a.slug === route.slug)!;
    graph.push({
      '@type': 'BlogPosting',
      headline: x.title,
      description: x.excerpt,
      inLanguage: 'id-ID',
      image: `${site.url}/og-sliva.png`,
      datePublished: '2026-10-15T07:00:00+07:00',
      dateModified: '2026-10-15T07:00:00+07:00',
      author: { '@id': `${site.url}/#organization` },
      publisher: { '@id': `${site.url}/#organization` },
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
    });
  }
  return {
    html: renderToString(<App path={path} />),
    route,
    canonical,
    structuredData: { '@context': 'https://schema.org', '@graph': graph },
  };
}
