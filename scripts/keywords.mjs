import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Editorial candidates, not measured search-volume data. No doorway pages are created.
const groups = [
  [
    'Website',
    'pembuatan-website',
    [
      'website company profile',
      'website perusahaan',
      'website UMKM',
      'landing page bisnis',
      'toko online',
      'website katalog produk',
      'portal berita',
      'website sekolah',
      'website klinik',
      'website hotel',
    ],
  ],
  [
    'Aplikasi',
    'pengembangan-aplikasi',
    [
      'aplikasi mobile',
      'aplikasi Android',
      'aplikasi iOS',
      'aplikasi web',
      'progressive web app',
      'MVP startup',
      'portal pelanggan',
      'aplikasi booking',
    ],
  ],
  [
    'Software Custom',
    'software-custom',
    [
      'software custom',
      'sistem informasi',
      'aplikasi ERP',
      'aplikasi CRM',
      'sistem HRIS',
      'aplikasi kasir',
      'sistem inventory',
      'aplikasi absensi',
      'sistem pengadaan',
      'sistem manajemen dokumen',
      'aplikasi manajemen proyek',
      'sistem reservasi',
    ],
  ],
  [
    'AI dan Otomasi',
    'ai-otomasi',
    [
      'chatbot AI',
      'asisten AI bisnis',
      'sistem pencarian dokumen AI',
      'sistem otomasi workflow',
      'sistem ekstraksi dokumen',
    ],
  ],
  [
    'Data dan Analytics',
    'data-analytics',
    [
      'dashboard bisnis',
      'dashboard eksekutif',
      'sistem business intelligence',
      'dashboard pelaporan',
    ],
  ],
  [
    'Integrasi',
    'integrasi-api',
    ['API bisnis', 'sistem integrasi data', 'portal integrasi pembayaran'],
  ],
  [
    'Cloud dan DevOps',
    'cloud-devops',
    ['sistem deployment otomatis', 'dashboard monitoring cloud'],
  ],
  ['UI UX', 'ui-ux-design', ['prototipe aplikasi', 'design system']],
  ['IoT', 'iot-sistem-cerdas', ['dashboard IoT', 'aplikasi pemantauan sensor']],
  ['Web3', 'web3-blockchain', ['aplikasi blockchain']],
  ['Keamanan', 'keamanan-maintenance', ['dashboard monitoring keamanan']],
];
const commercial = [
  ['jasa pembuatan {s}', 'Transaksional', 'P1'],
  ['vendor {s}', 'Komersial', 'P1'],
  ['vendor pengembangan {s}', 'Komersial', 'P1'],
  ['jasa pengembangan {s}', 'Transaksional', 'P1'],
  ['jasa bikin {s}', 'Transaksional', 'P2'],
  ['jasa buat {s}', 'Transaksional', 'P2'],
  ['perusahaan pengembang {s}', 'Komersial', 'P1'],
  ['software house untuk {s}', 'Komersial', 'P1'],
  ['konsultan pengembangan {s}', 'Komersial', 'P2'],
  ['developer {s}', 'Komersial', 'P1'],
  ['pembuatan {s} profesional', 'Transaksional', 'P1'],
  ['pengembangan {s} custom', 'Transaksional', 'P1'],
  ['jasa {s} sesuai kebutuhan', 'Transaksional', 'P2'],
  ['pembuatan {s} terjangkau', 'Transaksional', 'P1'],
  ['biaya pembuatan {s}', 'Komersial', 'P1'],
  ['harga jasa {s}', 'Komersial', 'P1'],
  ['estimasi biaya pengembangan {s}', 'Komersial', 'P1'],
  ['penawaran pembuatan {s}', 'Transaksional', 'P1'],
  ['konsultasi pembuatan {s}', 'Transaksional', 'P1'],
  ['partner pengembangan {s}', 'Komersial', 'P1'],
  ['layanan pembuatan {s} Indonesia', 'Transaksional', 'P1'],
  ['pengembangan {s} bertahap', 'Komersial', 'P2'],
  ['pembuatan {s} dengan source code', 'Komersial', 'P2'],
  ['vendor {s} untuk bisnis', 'Komersial', 'P1'],
  ['jasa redesign {s}', 'Transaksional', 'P2'],
  ['maintenance {s}', 'Transaksional', 'P2'],
  ['pengembangan fitur {s}', 'Transaksional', 'P2'],
  ['integrasi {s} dengan sistem bisnis', 'Komersial', 'P2'],
  ['pembuatan {s} sesuai anggaran', 'Transaksional', 'P1'],
  ['proposal pengembangan {s}', 'Komersial', 'P2'],
  ['perbandingan vendor {s}', 'Komersial', 'P2'],
  ['contoh fitur {s}', 'Informasional', 'P2'],
  ['spesifikasi kebutuhan {s}', 'Informasional', 'P2'],
  ['timeline pengembangan {s}', 'Informasional', 'P2'],
  ['tahapan pembuatan {s}', 'Informasional', 'P2'],
];
const cities = [
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Yogyakarta',
  'Semarang',
  'Solo',
  'Malang',
  'Depok',
  'Bekasi',
  'Bogor',
  'Tangerang',
  'Medan',
  'Palembang',
  'Pekanbaru',
  'Padang',
  'Batam',
  'Banda Aceh',
  'Bandar Lampung',
  'Denpasar',
  'Makassar',
  'Manado',
  'Balikpapan',
  'Samarinda',
  'Banjarmasin',
  'Pontianak',
  'Mataram',
  'Kupang',
  'Ambon',
  'Jayapura',
  'Kendari',
];
const sectors = [
  ['UMKM', 'umkm'],
  ['perusahaan swasta', 'perusahaan'],
  ['instansi pemerintah', 'pemerintahan'],
  ['startup', 'startup'],
  ['sekolah', 'pendidikan'],
  ['lembaga keuangan', 'keuangan-asuransi'],
  ['klinik', 'kesehatan'],
  ['praktik dokter hewan', 'kesehatan'],
  ['toko retail', 'retail-ecommerce'],
  ['media kreatif', 'media-kreatif'],
  ['perusahaan logistik', 'logistik'],
  ['perusahaan transportasi', 'logistik'],
  ['pabrik', 'manufaktur'],
  ['developer properti', 'properti-konstruksi'],
  ['perusahaan konstruksi', 'properti-konstruksi'],
  ['hotel', 'hospitality-fnb'],
  ['restoran', 'hospitality-fnb'],
  ['usaha pertanian', 'agribisnis-lingkungan'],
  ['energi dan utilitas', 'energi-utilitas'],
  ['yayasan', 'organisasi-komunitas'],
];
const branded = [
  'jasa {s} Sliva',
  'vendor {s} Sliva',
  'konsultasi {s} Sliva',
  'biaya {s} Sliva',
  'pengembangan {s} Sliva Indonesia',
  'layanan {s} Sliva',
  'buat {s} di Sliva',
  'partner {s} Sliva',
  'Sliva {s} custom',
  'Sliva technology {s}',
];
const questions = [
  'bagaimana memilih vendor {s}',
  'apa saja kebutuhan membuat {s}',
  'berapa lama pengembangan {s}',
  'apa manfaat {s} untuk bisnis',
  'bagaimana memulai proyek {s}',
];
assert.equal(
  groups.reduce((n, g) => n + g[2].length, 0),
  50
);
assert.equal(
  commercial.length + cities.length + sectors.length + branded.length + questions.length,
  100
);
const rows = [];
const coreGroups = [
  [
    'Website',
    'pembuatan-website',
    [
      'vendor website',
      'jasa website',
      'jasa pembuatan website',
      'jasa pembuatan website murah',
      'vendor pembuatan website',
      'jasa website company profile',
      'jasa website perusahaan',
      'jasa website UMKM',
      'jasa pembuatan toko online',
      'jasa SEO website',
    ],
  ],
  [
    'Aplikasi',
    'pengembangan-aplikasi',
    [
      'vendor aplikasi',
      'vendor aplikasi Indonesia',
      'jasa pembuatan aplikasi',
      'vendor pembuatan aplikasi',
      'jasa aplikasi Android',
      'jasa aplikasi iOS',
      'jasa aplikasi mobile',
      'jasa aplikasi web',
      'perusahaan pembuat aplikasi',
      'software house Indonesia',
    ],
  ],
  [
    'Software Custom',
    'software-custom',
    [
      'vendor software',
      'jasa software',
      'jasa software custom',
      'vendor sistem informasi',
      'vendor aplikasi pemerintah',
      'jasa aplikasi pemerintahan',
      'vendor IT perusahaan',
      'vendor teknologi UMKM',
    ],
  ],
  [
    'AI dan Otomasi',
    'ai-otomasi',
    ['jasa AI', 'vendor AI Indonesia', 'jasa chatbot', 'jasa otomasi bisnis'],
  ],
  [
    'Cloud dan DevOps',
    'cloud-devops',
    ['jasa cloud', 'jasa DevOps', 'jasa migrasi cloud', 'jasa setup server'],
  ],
  ['UI UX', 'ui-ux-design', ['jasa UI UX', 'jasa desain aplikasi', 'jasa desain website']],
  [
    'Keamanan',
    'keamanan-maintenance',
    ['jasa maintenance website', 'jasa maintenance aplikasi', 'audit keamanan aplikasi'],
  ],
  [
    'Konsultasi IT',
    'konsultasi-training-it',
    [
      'konsultan IT',
      'konsultasi transformasi digital',
      'training IT perusahaan',
      'pelatihan IT UMKM',
    ],
  ],
];
function add(keyword, cluster, intent, target, priority, modifier, notes) {
  rows.push({
    id: rows.length + 1,
    keyword: keyword.toLowerCase(),
    cluster,
    intent,
    target_url: `https://sliva.id${target}`,
    priority,
    modifier,
    search_volume: null,
    keyword_difficulty: null,
    validation_status: 'Kandidat editorial; belum divalidasi Keyword Planner/Search Console',
    notes,
  });
}
for (const [cluster, slug, seeds] of groups)
  for (const seed of seeds) {
    for (const [template, intent, priority] of commercial) {
      let target = `/layanan/${slug}`;
      if (/biaya|harga/.test(template))
        target = slug === 'pembuatan-website' ? '/insight/biaya-pembuatan-website' : '/biaya';
      if (/perbandingan/.test(template)) target = '/insight/cara-memilih-vendor-aplikasi';
      if (template.startsWith('maintenance')) target = '/layanan/keamanan-maintenance';
      add(
        template.replace('{s}', seed),
        cluster,
        intent,
        target,
        priority,
        'Layanan',
        'Prioritas editorial berdasarkan kedekatan intent dengan konsultasi, bukan volume pencarian.'
      );
    }
    for (const city of cities)
      add(
        `jasa ${seed} ${city}`,
        cluster,
        'Komersial lokal',
        `/layanan/${slug}`,
        'P3',
        city,
        'Untuk jangkauan layanan remote; bukan klaim memiliki kantor lokal. Validasi permintaan sebelum kampanye.'
      );
    for (const [sector, industry] of sectors)
      add(
        `pengembangan ${seed} untuk ${sector}`,
        cluster,
        'Komersial sektoral',
        `/industri/${industry}`,
        'P2',
        sector,
        'Validasi kecocokan solusi dengan kebutuhan sektor; tidak semua kombinasi perlu halaman sendiri.'
      );
    for (const template of branded)
      add(
        template.replace('{s}', seed),
        cluster,
        'Navigasional bermerek',
        `/layanan/${slug}`,
        'P2',
        'Sliva',
        'Turunan bermerek untuk konsistensi topik; bukan bukti permintaan aktual.'
      );
    for (const template of questions)
      add(
        template.replace('{s}', seed),
        cluster,
        'Informasional',
        template.startsWith('bagaimana memilih')
          ? '/insight/cara-memilih-vendor-aplikasi'
          : `/layanan/${slug}`,
        'P3',
        'Pertanyaan',
        'Gunakan sebagai kandidat FAQ atau brief artikel setelah validasi; hindari artikel duplikat.'
      );
  }
const generatedCount = rows.length;
for (const [cluster, slug, terms] of coreGroups)
  for (const keyword of terms)
    if (!rows.some((x) => x.keyword === keyword.toLowerCase()))
      add(
        keyword,
        cluster,
        'Komersial',
        `/layanan/${slug}`,
        'P1',
        'Keyword utama',
        'Head term kurasi editorial; perlu validasi volume dan persaingan.'
      );
const curatedCount = rows.length - generatedCount;
// Retain all service and sector candidates, replacing an equal number of brand variants.
let toRemove = curatedCount;
for (let i = rows.length - 1; i >= 0 && toRemove > 0; i--)
  if (rows[i].intent === 'Navigasional bermerek') {
    rows.splice(i, 1);
    toRemove--;
  }
rows.sort(
  (a, b) => (a.modifier === 'Keyword utama' ? -1 : 0) - (b.modifier === 'Keyword utama' ? -1 : 0)
);
rows.forEach((row, index) => (row.id = index + 1));
assert.equal(rows.length, 5000);
assert.equal(new Set(rows.map((x) => x.keyword)).size, 5000);
const columns = Object.keys(rows[0]);
const csvCell = (x) => '"' + String(x ?? '').replaceAll('"', '""') + '"';
await mkdir('seo', { recursive: true });
await writeFile(
  'seo/sliva-5000-keywords.csv',
  '\uFEFF' +
    [columns.join(','), ...rows.map((row) => columns.map((c) => csvCell(row[c])).join(','))].join(
      '\r\n'
    ) +
    '\r\n'
);
await writeFile('seo/sliva-5000-keywords.json', JSON.stringify(rows, null, 2) + '\n');
const summary = {
  total: rows.length,
  unique: new Set(rows.map((x) => x.keyword)).size,
  curatedHeadTerms: curatedCount,
  by_cluster: Object.fromEntries(
    [...new Set(rows.map((x) => x.cluster))].map((c) => [
      c,
      rows.filter((x) => x.cluster === c).length,
    ])
  ),
  by_intent: Object.fromEntries(
    [...new Set(rows.map((x) => x.intent))].map((i) => [
      i,
      rows.filter((x) => x.intent === i).length,
    ])
  ),
  method:
    '50 service seeds × 100 intent modifiers, enriched with curated head terms by replacing an equal number of brand variants. Unmeasured editorial candidates; validate before campaigns.',
  created: '2026-10-15',
  sources: [
    'https://sliva.id',
    'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    'https://developers.google.com/search/docs/essentials/spam-policies',
  ],
};
await writeFile('seo/keyword-summary.json', JSON.stringify(summary, null, 2) + '\n');
console.log(
  `Generated ${rows.length} unique keyword candidates in ${new Set(rows.map((x) => x.cluster)).size} clusters; no invented search volume.`
);
