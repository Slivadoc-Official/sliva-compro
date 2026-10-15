import { useEffect } from 'react';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Legal, NotFound } from './pages/Legal';
import {
  About,
  ArticleDetail,
  FAQPage,
  Industries,
  IndustryDetail,
  Insights,
  Partnership,
  Pricing,
  Products,
  ServiceDetail,
  Services,
  SolutionDetail,
  Solutions,
} from './pages/Pages';
import { CTA, Footer, Header } from './components/Shared';
import { services } from './data/services';
import { industries } from './data/industries';
import { solutions } from './data/solutions';
import { articles } from './data/articles';
import { resolveRoute, type Route } from './routes';

function Content({ route }: { route: Route }) {
  switch (route.type) {
    case 'home':
      return <Home />;
    case 'services':
      return <Services />;
    case 'service':
      return <ServiceDetail service={services.find((x) => x.slug === route.slug)!} />;
    case 'industries':
      return <Industries />;
    case 'industry':
      return <IndustryDetail industry={industries.find((x) => x.slug === route.slug)!} />;
    case 'solutions':
      return <Solutions />;
    case 'solution':
      return <SolutionDetail solution={solutions.find((x) => x.slug === route.slug)!} />;
    case 'about':
      return <About />;
    case 'insights':
      return <Insights />;
    case 'article':
      return <ArticleDetail article={articles.find((x) => x.slug === route.slug)!} />;
    case 'pricing':
      return <Pricing />;
    case 'products':
      return <Products />;
    case 'partnership':
      return <Partnership />;
    case 'contact':
      return <Contact />;
    case 'faq':
      return <FAQPage />;
    case 'privacy':
      return <Legal type="privacy" />;
    case 'terms':
      return <Legal type="terms" />;
    default:
      return <NotFound />;
  }
}
export function App({ path = '/' }: { path?: string }) {
  const route = resolveRoute(path);
  useEffect(() => {
    if (path === '/') {
      const legacy: Record<string, string> = {
        '#about': '/tentang',
        '#products': '/produk',
        '#portfolio': '/solusi',
        '#partnership': '/kemitraan',
        '#contact': '/kontak',
      };
      const redirect = legacy[window.location.hash];
      if (redirect) window.location.replace(redirect);
    }
  }, [path]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten
      </a>
      <Header path={route.path} />
      <main id="main-content">
        <Content route={route} />
        {!['contact', 'privacy', 'terms', '404'].includes(route.type) && <CTA />}
      </main>
      <Footer />
    </>
  );
}
