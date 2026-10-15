import { services } from './data/services';
import { industries } from './data/industries';
import { articles } from './data/articles';
import { solutions } from './data/solutions';
import { site } from './data/site';

export type PageType =
  | 'home'
  | 'services'
  | 'service'
  | 'industries'
  | 'industry'
  | 'solutions'
  | 'solution'
  | 'about'
  | 'insights'
  | 'article'
  | 'pricing'
  | 'products'
  | 'partnership'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms'
  | '404';
export type Route = {
  path: string;
  type: PageType;
  title: string;
  description: string;
  label: string;
  slug?: string;
};
export const routes: Route[] = [
  {
    path: '/',
    type: 'home',
    title: 'Sliva — Jasa Website, Aplikasi & Solusi Teknologi Indonesia',
    description: site.description,
    label: 'Beranda',
  },
  {
    path: '/layanan',
    type: 'services',
    title: 'Layanan Teknologi: Website, Aplikasi, AI & Software | Sliva',
    description:
      '12 layanan teknologi Sliva untuk pemerintah, perusahaan, startup, dan UMKM. Website, aplikasi, software custom, AI, data, cloud, dan integrasi sistem.',
    label: 'Layanan',
  },
  ...services.map((x) => ({
    path: `/layanan/${x.slug}`,
    type: 'service' as const,
    title: `${({ 'pembuatan-website': 'Jasa Pembuatan Website & E-commerce', 'pengembangan-aplikasi': 'Vendor Aplikasi Web, Android & iOS', 'software-custom': 'Jasa Software Custom, ERP & Sistem Informasi', 'ai-otomasi': 'Jasa AI, Chatbot & Otomasi Bisnis', 'cloud-devops': 'Jasa Cloud, DevOps & Deployment', 'ui-ux-design': 'Jasa UI/UX Design & Prototipe Aplikasi', 'data-analytics': 'Jasa Dashboard Data & Business Intelligence', 'integrasi-api': 'Jasa Integrasi API & Sistem Bisnis', 'keamanan-maintenance': 'Jasa Maintenance & Keamanan Aplikasi', 'iot-sistem-cerdas': 'Jasa Pengembangan IoT & Sistem Cerdas', 'web3-blockchain': 'Jasa Web3, Blockchain & dApp', 'konsultasi-training-it': 'Konsultasi IT & Pelatihan Tim' } as Record<string, string>)[x.slug]} | Sliva`,
    description: x.description,
    label: x.name,
    slug: x.slug,
  })),
  {
    path: '/industri',
    type: 'industries',
    title: 'Solusi Teknologi Pemerintah, Swasta & UMKM | Sliva',
    description:
      'Solusi digital untuk 16 sektor: pemerintah, perusahaan, UMKM, startup, pendidikan, kesehatan, retail, logistik, manufaktur, dan lainnya.',
    label: 'Industri',
  },
  ...industries.map((x) => ({
    path: `/industri/${x.slug}`,
    type: 'industry' as const,
    title: `Solusi Digital untuk ${x.name} | Sliva`,
    description: x.description,
    label: x.name,
    slug: x.slug,
  })),
  {
    path: '/solusi',
    type: 'solutions',
    title: 'Eksplorasi Solusi Digital untuk Berbagai Kebutuhan | Sliva',
    description:
      'Gambaran solusi Sliva: portal layanan publik, sistem operasional bisnis, dan asisten AI. Eksplorasi konsep untuk kebutuhan organisasi Anda.',
    label: 'Solusi',
  },
  ...solutions.map((x) => ({
    path: `/solusi/${x.slug}`,
    type: 'solution' as const,
    title: `${x.name} Konsep Solusi | Sliva`,
    description: x.description,
    label: x.name,
    slug: x.slug,
  })),
  {
    path: '/tentang',
    type: 'about',
    title: 'Tentang Sliva — Partner Teknologi untuk Setiap Skala',
    description:
      'Kenali PT. Sliva Technology Indonesia. Partner pengembangan website, aplikasi, software, dan transformasi digital untuk bisnis serta organisasi di Indonesia.',
    label: 'Tentang Sliva',
  },
  {
    path: '/insight',
    type: 'insights',
    title: 'Insight Teknologi, Website & Aplikasi untuk Bisnis | Sliva',
    description:
      'Panduan memilih vendor aplikasi, merencanakan biaya website, digitalisasi UMKM, AI bisnis, dan menyiapkan proyek sistem informasi bersama Sliva.',
    label: 'Insight',
  },
  ...articles.map((x) => ({
    path: `/insight/${x.slug}`,
    type: 'article' as const,
    title: `${x.title.replace(/\.$/, '')} | Sliva Insight`,
    description: x.excerpt,
    label: x.title,
    slug: x.slug,
  })),
  {
    path: '/biaya',
    type: 'pricing',
    title: 'Biaya Website & Aplikasi Sesuai Kebutuhan | Sliva',
    description:
      'Pendekatan biaya website, aplikasi, dan software Sliva. Scope transparan, fitur prioritas, dan pengembangan bertahap sesuai anggaran UMKM hingga enterprise.',
    label: 'Biaya & cara kerja',
  },
  {
    path: '/produk',
    type: 'products',
    title: 'Produk Sliva — Slivadoc & Ekosistem Digital',
    description:
      'Kenali Slivadoc, ekosistem digital kesehatan hewan dari Sliva. Produk teknologi yang dikembangkan dari kebutuhan nyata dan kepedulian.',
    label: 'Produk',
  },
  {
    path: '/kemitraan',
    type: 'partnership',
    title: 'Kemitraan & Kolaborasi Teknologi | Sliva',
    description:
      'Buka peluang kolaborasi teknologi bersama Sliva untuk agency, perusahaan, instansi, dan pemilik ide. Diskusikan scope, peran, dan model kerja sama.',
    label: 'Kemitraan',
  },
  {
    path: '/kontak',
    type: 'contact',
    title: 'Konsultasi Website & Aplikasi via WhatsApp | Sliva',
    description:
      'Diskusikan kebutuhan website, aplikasi, dan software Anda. WhatsApp Sliva 082391239651 atau email evans.moris21@gmail.com. Mulai dari diskusi kebutuhan.',
    label: 'Kontak',
  },
  {
    path: '/faq',
    type: 'faq',
    title: 'FAQ Jasa Website, Aplikasi & Software Custom | Sliva',
    description:
      'Jawaban tentang biaya, durasi, source code, maintenance, proyek pemerintah, dan pengembangan teknologi untuk UMKM bersama Sliva.',
    label: 'FAQ',
  },
  {
    path: '/privasi',
    type: 'privacy',
    title: 'Kebijakan Privasi | Sliva',
    description:
      'Informasi penggunaan data konsultasi, formulir WhatsApp, komunikasi email, dan privasi saat menggunakan situs Sliva.',
    label: 'Privasi',
  },
  {
    path: '/ketentuan',
    type: 'terms',
    title: 'Ketentuan Penggunaan Situs | Sliva',
    description:
      'Ketentuan penggunaan situs Sliva, informasi layanan, ilustrasi konsep solusi, serta pembahasan penawaran dan kerja sama.',
    label: 'Ketentuan',
  },
];
export const notFoundRoute: Route = {
  path: '/404',
  type: '404',
  title: 'Halaman Tidak Ditemukan | Sliva',
  description:
    'Temukan kembali layanan, solusi digital, atau hubungi Sliva untuk membahas kebutuhan Anda.',
  label: 'Halaman tidak ditemukan',
};
export function resolveRoute(path: string) {
  return routes.find((x) => x.path === (path.replace(/\/$/, '') || '/')) ?? notFoundRoute;
}
