import type { FAQ } from './site';

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  headline: string;
  description: string;
  intro: string;
  features: string[];
  deliverables: string[];
  approach: string;
  audience: string;
  faq: FAQ[];
};

export const services: Service[] = [
  {
    slug: 'pembuatan-website',
    name: 'Website & E-commerce',
    short: 'Website yang bekerja untuk bisnis Anda.',
    icon: 'globe',
    headline: 'Kesan pertama yang membuka peluang baru.',
    description:
      'Jasa pembuatan website company profile, landing page, portal, dan toko online yang cepat, responsif, serta mudah ditemukan di pencarian.',
    intro:
      'Website seharusnya membantu orang memahami bisnis dan mengambil langkah berikutnya. Sliva merancang struktur informasi, tampilan, dan alur konversi berdasarkan kebutuhan pengunjung: mengenal perusahaan, melihat layanan, meminta penawaran, atau melakukan pembelian. Kami membantu website baru maupun revamp website yang sudah berjalan.',
    features: [
      'Company profile & landing page',
      'Toko online & katalog produk',
      'Portal informasi & CMS',
      'SEO teknis & optimasi performa',
      'Desain responsif & aksesibilitas',
      'Integrasi formulir & WhatsApp',
    ],
    deliverables: [
      'Struktur halaman dan desain yang disetujui',
      'Website responsif sesuai ruang lingkup',
      'Metadata, sitemap, dan fondasi SEO',
      'Panduan pengelolaan dan serah terima akses',
    ],
    approach:
      'Kami mulai dari tujuan website dan konten yang tersedia, membuat rancangan halaman, lalu mengembangkan dan menguji di perangkat berbeda. Kebutuhan CMS, hosting, domain, dan pemeliharaan dibahas di proposal agar biaya total tetap terlihat.',
    audience:
      'Cocok untuk UMKM yang ingin lebih dipercaya, perusahaan yang memperbarui identitas digital, toko yang mulai berjualan online, serta instansi yang membutuhkan portal informasi.',
    faq: [
      {
        question: 'Apakah website langsung bisa ditemukan di Google?',
        answer:
          'Kami menyiapkan halaman yang dapat dirayapi, metadata, sitemap, dan struktur tautan. Proses indeks dan peringkat ditentukan mesin pencari; setelah peluncuran, pemilik domain perlu memverifikasi Search Console dan mengembangkan konten secara konsisten.',
      },
      {
        question: 'Bisa mengelola konten sendiri?',
        answer:
          'Bisa. Bila pengelolaan mandiri dibutuhkan, kami memasukkan CMS dan pelatihan ke ruang lingkup. Untuk website statis, mekanisme pembaruan konten disepakati sejak awal.',
      },
    ],
  },
  {
    slug: 'pengembangan-aplikasi',
    name: 'Aplikasi Web & Mobile',
    short: 'Dari ide di kepala, ke aplikasi di tangan.',
    icon: 'smartphone',
    headline: 'Aplikasi yang terasa mudah. Dampak yang terasa nyata.',
    description:
      'Vendor pengembangan aplikasi web, Android, iOS, dan MVP startup dengan fitur yang mengikuti kebutuhan pengguna dan anggaran proyek.',
    intro:
      'Kami membantu mengubah proses yang rumit menjadi pengalaman digital yang mudah digunakan. Dari aplikasi pelanggan hingga portal internal, pengembangan berangkat dari alur pengguna dan masalah yang benar-benar ingin diselesaikan. Fitur disusun bertahap agar versi awal bisa diuji sebelum investasi diperbesar.',
    features: [
      'Aplikasi Android & iOS',
      'Web app & progressive web app',
      'MVP untuk validasi produk',
      'Portal pelanggan & dashboard admin',
      'Notifikasi & fitur berbasis lokasi',
      'Integrasi pembayaran sesuai kebutuhan',
    ],
    deliverables: [
      'Peta perjalanan pengguna dan prototipe',
      'Aplikasi dan panel pengelolaan sesuai scope',
      'Hasil pengujian alur utama',
      'Dokumentasi rilis dan pendampingan peluncuran',
    ],
    approach:
      'Bersama Anda, kami memilih platform berdasarkan pengguna, kebutuhan perangkat, dan biaya operasional. Setiap tahap ditinjau lewat demo. Rilis toko aplikasi, akun developer, dan biaya layanan eksternal direncanakan sebelum peluncuran.',
    audience:
      'Untuk startup yang menyiapkan MVP, organisasi yang membutuhkan aplikasi layanan, dan bisnis yang ingin menghubungkan pelanggan serta operasional dalam satu platform.',
    faq: [
      {
        question: 'Harus membuat Android dan iOS sekaligus?',
        answer:
          'Tidak selalu. Web app atau satu platform bisa menjadi langkah awal yang lebih hemat. Kami membantu memilih berdasarkan perangkat pengguna dan fitur yang benar-benar dibutuhkan.',
      },
      {
        question: 'Bisa melanjutkan aplikasi yang sudah ada?',
        answer:
          'Bisa setelah audit kode dan dependensi. Kami menilai kualitas, dokumentasi, serta kompatibilitasnya untuk menyusun rencana pengembangan yang realistis.',
      },
    ],
  },
  {
    slug: 'software-custom',
    name: 'Software & Sistem Bisnis',
    short: 'Sistem yang mengikuti cara kerja Anda.',
    icon: 'layers',
    headline: 'Kerja lebih terhubung. Bisnis lebih terkendali.',
    description:
      'Jasa software custom, ERP, CRM, HRIS, kasir, inventory, dan sistem informasi untuk merapikan operasional bisnis serta organisasi.',
    intro:
      'Spreadsheet dan aplikasi yang terpisah sering membuat data ganda dan laporan terlambat. Sliva membantu memetakan proses bisnis, menyederhanakan alur persetujuan, dan menyatukan informasi yang dibutuhkan tim. Sistem dibangun sesuai prioritas operasional, bukan sekadar menambahkan fitur sebanyak mungkin.',
    features: [
      'ERP & CRM sesuai proses bisnis',
      'HRIS, absensi & pengelolaan tim',
      'Kasir, inventory & pengadaan',
      'Workflow approval & audit trail',
      'Sistem informasi organisasi',
      'Migrasi data & pelaporan',
    ],
    deliverables: [
      'Dokumen proses dan aturan bisnis',
      'Modul dengan pengaturan hak akses',
      'Skenario UAT dan dokumentasi',
      'Rencana migrasi dan pelatihan pengguna',
    ],
    approach:
      'Kami mewawancarai pengguna utama, memetakan data, dan memilih modul yang memberi dampak paling cepat. Migrasi diuji pada sampel sebelum digunakan. Hak akses, pencadangan, dan tanggung jawab pengelolaan data menjadi bagian dari desain.',
    audience:
      'Untuk perusahaan dengan beberapa divisi, usaha ritel, distributor, lembaga pendidikan, dan instansi yang membutuhkan data serta proses kerja yang konsisten.',
    faq: [
      {
        question: 'Apakah semua modul ERP harus dibuat sekaligus?',
        answer:
          'Tidak. Anda dapat mulai dari modul yang paling mendesak, misalnya stok dan penjualan, lalu menambah modul lain setelah alur pertama stabil.',
      },
      {
        question: 'Apakah data lama bisa dipindahkan?',
        answer:
          'Bisa jika data sumber tersedia dan layak diolah. Pemetaan, pembersihan, jumlah data, serta validasi migrasi diperhitungkan dalam ruang lingkup.',
      },
    ],
  },
  {
    slug: 'ai-otomasi',
    name: 'AI & Otomasi',
    short: 'Kurangi pekerjaan berulang. Buka ruang untuk ide.',
    icon: 'sparkles',
    headline: 'Buat teknologi bekerja lebih cerdas untuk Anda.',
    description:
      'Pengembangan chatbot AI, pencarian dokumen, otomasi workflow, dan integrasi AI untuk membantu produktivitas bisnis.',
    intro:
      'AI paling berguna ketika diterapkan pada tugas yang jelas. Kami membantu memilih peluang seperti pencarian pengetahuan internal, ringkasan dokumen, klasifikasi permintaan, dan otomasi pekerjaan administratif. Implementasi diuji dengan contoh data nyata serta batasan penggunaan yang disepakati.',
    features: [
      'Chatbot & asisten pengetahuan',
      'Pencarian dokumen berbasis RAG',
      'Otomasi alur kerja & notifikasi',
      'Ekstraksi dan klasifikasi dokumen',
      'Integrasi model AI ke aplikasi',
      'Evaluasi kualitas & kontrol manusia',
    ],
    deliverables: [
      'Pemetaan use case dan batasan data',
      'Prototipe dengan skenario evaluasi',
      'Integrasi AI sesuai kebutuhan',
      'Panduan operasional dan estimasi biaya penggunaan',
    ],
    approach:
      'Kami memulai dari proof of concept untuk menguji kualitas, latensi, dan biaya. Sumber data, izin akses, evaluasi jawaban, serta jalur eskalasi manusia dirancang sebelum digunakan lebih luas.',
    audience:
      'Untuk tim layanan pelanggan, operasional, knowledge management, dan organisasi yang mengolah banyak dokumen atau tugas repetitif.',
    faq: [
      {
        question: 'Apakah AI selalu memberikan jawaban yang benar?',
        answer:
          'Tidak. Sistem AI bisa keliru. Kami merancang batas konteks, rujukan sumber bila sesuai, pengujian, dan verifikasi manusia untuk penggunaan yang membutuhkan ketelitian.',
      },
      {
        question: 'Apakah biaya model AI sudah termasuk?',
        answer:
          'Biaya penggunaan model dan layanan pihak ketiga dijelaskan terpisah atau dimasukkan sesuai proposal, karena bergantung pada volume dan model yang dipilih.',
      },
    ],
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud & DevOps',
    short: 'Fondasi yang siap untuk langkah berikutnya.',
    icon: 'cloud',
    headline: 'Dari proses rilis yang rumit, jadi lebih rapi.',
    description:
      'Setup cloud, deployment, CI/CD, container, monitoring, backup, dan migrasi infrastruktur untuk aplikasi yang terus berkembang.',
    intro:
      'Aplikasi yang baik memerlukan lingkungan operasional yang dapat dipahami dan dikelola tim. Sliva membantu menata proses deployment, konfigurasi server, pemantauan, serta pemulihan data. Arsitektur disesuaikan dengan kebutuhan saat ini dan rencana pertumbuhan, dengan biaya layanan yang terbuka.',
    features: [
      'Setup server & arsitektur cloud',
      'CI/CD & deployment otomatis',
      'Container & orkestrasi',
      'Monitoring, logging & alerting',
      'Backup & uji pemulihan',
      'Migrasi dan optimasi biaya',
    ],
    deliverables: [
      'Diagram arsitektur dan inventaris layanan',
      'Konfigurasi deployment sesuai scope',
      'Runbook operasional dan recovery',
      'Serah terima akun serta akses',
    ],
    approach:
      'Kami meninjau beban aplikasi, risiko operasional, dan kemampuan tim pengelola. Perubahan diuji pada lingkungan terpisah, dilengkapi rencana rollback. Kebutuhan SLA dan dukungan di luar jam kerja diatur dalam kesepakatan.',
    audience:
      'Untuk bisnis yang mulai memiliki aplikasi aktif, tim yang merilis fitur secara rutin, serta organisasi yang ingin memindahkan sistem ke cloud secara terencana.',
    faq: [
      {
        question: 'Apakah tagihan cloud termasuk biaya jasa?',
        answer:
          'Tagihan infrastruktur dan biaya jasa dijelaskan secara terpisah kecuali proposal menyatakan sebaliknya. Kami membantu menyusun estimasi berdasarkan kebutuhan beban kerja.',
      },
      {
        question: 'Apakah ada jaminan uptime tertentu?',
        answer:
          'Target uptime, pemantauan, dan waktu respons hanya berlaku bila tertulis dalam SLA. Arsitektur dan biaya disusun berdasarkan target tersebut.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX & Product Design',
    short: 'Indah dilihat. Nyaman digunakan.',
    icon: 'pen',
    headline: 'Pengalaman yang membuat orang ingin kembali.',
    description:
      'Jasa UI/UX design, prototipe aplikasi, riset pengguna, design system, dan redesign website untuk pengalaman digital yang lebih jelas.',
    intro:
      'Desain yang efektif mempertemukan tujuan bisnis dengan kebutuhan pengguna. Kami membantu menemukan hambatan di alur yang sudah ada atau menyusun pengalaman baru dari awal. Hasil desain menjelaskan hierarki informasi, perilaku komponen, dan keadaan layar agar implementasinya lebih terarah.',
    features: [
      'Discovery & pemetaan pengguna',
      'Information architecture & user flow',
      'Wireframe & prototipe interaktif',
      'Desain website dan aplikasi',
      'Design system & komponen',
      'Pengujian usability sesuai scope',
    ],
    deliverables: [
      'User flow dan struktur informasi',
      'File desain beserta prototipe',
      'Komponen dan panduan visual',
      'Spesifikasi handoff ke developer',
    ],
    approach:
      'Kami menyepakati tujuan, mengaudit pengalaman saat ini, lalu menguji arah desain melalui prototipe. Keadaan loading, kosong, gagal, dan berhasil ikut dirancang agar tim pengembang tidak perlu menebak.',
    audience:
      'Untuk bisnis yang memperbarui tampilan digital, startup yang menyiapkan presentasi produk, dan tim yang ingin merapikan konsistensi antarhalaman.',
    faq: [
      {
        question: 'Bisa memesan desain tanpa development?',
        answer:
          'Bisa. Desain dan implementasi dapat menjadi proyek terpisah. Format file, jumlah layar, revisi, dan dukungan handoff disepakati dalam scope.',
      },
      {
        question: 'Apakah logo juga termasuk?',
        answer:
          'Desain logo dan identitas merek memiliki lingkup tersendiri. Jika dibutuhkan, kami membahasnya terpisah dari desain antarmuka.',
      },
    ],
  },
  {
    slug: 'data-analytics',
    name: 'Data & Business Intelligence',
    short: 'Dari tumpukan data, jadi arah yang jelas.',
    icon: 'chart',
    headline: 'Keputusan yang lebih dekat dengan data.',
    description:
      'Pengembangan dashboard, integrasi data, reporting, dan business intelligence untuk pemantauan kinerja organisasi.',
    intro:
      'Data bermanfaat ketika definisinya konsisten dan mudah dipakai mengambil keputusan. Kami membantu menghubungkan sumber data, menyepakati indikator, dan membangun dashboard sesuai kebutuhan tiap peran. Fokusnya pada pertanyaan bisnis yang perlu dijawab, bukan hanya grafik yang menarik.',
    features: [
      'Dashboard eksekutif & operasional',
      'Integrasi sumber data & ETL',
      'Pelaporan dan ekspor terjadwal',
      'Definisi KPI & kualitas data',
      'Data warehouse sesuai kebutuhan',
      'Analitik dan visualisasi',
    ],
    deliverables: [
      'Pemetaan sumber dan kamus data',
      'Pipeline data sesuai scope',
      'Dashboard dengan hak akses',
      'Panduan pembacaan dan pemeliharaan',
    ],
    approach:
      'Kami memvalidasi contoh data, definisi metrik, frekuensi pembaruan, serta aturan akses. Angka dashboard dicocokkan dengan sumbernya sebelum serah terima. Kebutuhan real time dinilai berdasarkan manfaat dan biaya.',
    audience:
      'Untuk pemilik bisnis, manajemen operasional, dan organisasi yang perlu menggabungkan laporan dari banyak sistem atau cabang.',
    faq: [
      {
        question: 'Apakah bisa menggunakan data spreadsheet?',
        answer:
          'Bisa. Kami meninjau format dan konsistensinya terlebih dahulu. Sumber data dapat berkembang ke database atau API saat kebutuhan meningkat.',
      },
      {
        question: 'Apakah semua dashboard real time?',
        answer:
          'Tidak harus. Pembaruan per jam atau harian sering cukup. Jadwal dipilih berdasarkan keputusan yang perlu diambil dan ketersediaan sumber data.',
      },
    ],
  },
  {
    slug: 'integrasi-api',
    name: 'Integrasi Sistem & API',
    short: 'Hubungkan sistem. Sederhanakan pekerjaan.',
    icon: 'workflow',
    headline: 'Sistem berbeda. Alur kerja yang terhubung.',
    description:
      'Jasa integrasi API, payment gateway, ERP, CRM, layanan pesan, dan sistem pihak ketiga untuk mengurangi input berulang.',
    intro:
      'Ketika sistem tidak saling terhubung, tim harus menyalin data dan mencocokkan status secara manual. Sliva membantu merancang pertukaran data antara aplikasi internal dan layanan eksternal. Kami memperhatikan pemetaan data, autentikasi, penanganan kegagalan, dan kemudahan pemantauan.',
    features: [
      'Integrasi ERP, CRM & e-commerce',
      'API internal & layanan pihak ketiga',
      'Payment gateway & rekonsiliasi',
      'Webhook & sinkronisasi data',
      'Integrasi layanan pesan resmi',
      'Dokumentasi & monitoring API',
    ],
    deliverables: [
      'Peta integrasi dan kontrak data',
      'Konektor atau API sesuai scope',
      'Log, retry, dan penanganan error',
      'Dokumentasi pengujian dan akses',
    ],
    approach:
      'Kami memastikan dokumentasi, akses sandbox, batas kuota, serta izin penggunaan layanan tersedia. Skenario timeout, data ganda, dan kegagalan parsial diuji agar integrasi tidak bergantung pada kondisi ideal saja.',
    audience:
      'Untuk bisnis yang menggunakan beberapa aplikasi dan ingin menyatukan data pelanggan, pesanan, pembayaran, atau operasional.',
    faq: [
      {
        question: 'Bisakah semua aplikasi diintegrasikan?',
        answer:
          'Tergantung ketersediaan API, izin, format data, dan aturan penyedia. Kami memeriksa kelayakan sebelum menyepakati hasil integrasi.',
      },
      {
        question: 'Apakah biaya layanan pihak ketiga termasuk?',
        answer:
          'Biaya langganan, transaksi, verifikasi, dan kuota API dicantumkan dalam pembahasan biaya. Akun layanan sebaiknya dikelola atas nama pemilik bisnis.',
      },
    ],
  },
  {
    slug: 'keamanan-maintenance',
    name: 'Keamanan & Maintenance',
    short: 'Tetap terawat setelah tombol publish.',
    icon: 'shield',
    headline: 'Rawat sistem hari ini. Siapkan pertumbuhan besok.',
    description:
      'Maintenance website dan aplikasi, audit teknis, pembaruan dependensi, hardening, backup, dan perbaikan performa.',
    intro:
      'Peluncuran adalah awal dari operasional sistem. Kami membantu meninjau kondisi aplikasi, mengelola pembaruan, dan memprioritaskan perbaikan berdasarkan dampaknya. Layanan keamanan dilakukan pada sistem yang memang Anda miliki atau telah diizinkan untuk diperiksa.',
    features: [
      'Audit teknis & prioritas perbaikan',
      'Pembaruan aplikasi & dependensi',
      'Hardening dan review hak akses',
      'Pemantauan error & performa',
      'Backup dan prosedur pemulihan',
      'Dukungan pengembangan lanjutan',
    ],
    deliverables: [
      'Laporan kondisi dan temuan',
      'Daftar tindakan berdasarkan prioritas',
      'Catatan perubahan dan validasi',
      'Kesepakatan jadwal serta kanal dukungan',
    ],
    approach:
      'Kami menyepakati batas pemeriksaan, menyiapkan backup, dan menguji pembaruan sebelum diterapkan. Penetration testing yang lebih mendalam memerlukan scope dan otorisasi terpisah. Target respons dukungan dijelaskan di kontrak.',
    audience:
      'Untuk pemilik website dan aplikasi aktif yang ingin memiliki proses pemeliharaan jelas, mengurangi gangguan, dan merencanakan pembaruan.',
    faq: [
      {
        question: 'Apakah maintenance menjamin bebas dari semua serangan?',
        answer:
          'Tidak ada jaminan bebas seluruh risiko. Maintenance membantu menurunkan risiko melalui pembaruan, kontrol akses, pemantauan, dan prosedur pemulihan yang teruji.',
      },
      {
        question: 'Bisa maintenance aplikasi dari vendor lain?',
        answer:
          'Bisa setelah peninjauan awal terhadap kode, akses, lisensi, dan kondisi sistem. Temuan awal menentukan kelayakan serta biaya dukungan.',
      },
    ],
  },
  {
    slug: 'iot-sistem-cerdas',
    name: 'IoT & Sistem Cerdas',
    short: 'Hubungkan dunia fisik dengan insight digital.',
    icon: 'cpu',
    headline: 'Perangkat terhubung. Operasional lebih terlihat.',
    description:
      'Pengembangan dashboard IoT, integrasi sensor, pemantauan perangkat, dan prototipe sistem cerdas untuk kebutuhan industri.',
    intro:
      'Kami membantu menghubungkan data perangkat ke aplikasi yang bisa dipahami pengguna. Proyek dimulai dari validasi perangkat, jaringan, dan kebutuhan pemantauan, lalu berkembang menjadi prototipe yang dapat diuji di lingkungan sebenarnya.',
    features: [
      'Dashboard pemantauan sensor',
      'Integrasi perangkat & gateway',
      'Notifikasi berbasis kondisi',
      'Pelacakan aset sesuai kebutuhan',
      'Pencatatan data & analitik',
      'Proof of concept & uji lapangan',
    ],
    deliverables: [
      'Rancangan alur perangkat ke aplikasi',
      'Prototipe integrasi sesuai scope',
      'Dashboard dan skenario alert',
      'Dokumentasi instalasi dan batas operasional',
    ],
    approach:
      'Ketersediaan perangkat, kalibrasi, daya, konektivitas, serta keamanan akses diuji lebih dulu. Pengadaan hardware, sertifikasi perangkat, dan pemasangan di lokasi dihitung terpisah bila diperlukan.',
    audience:
      'Untuk pertanian, manufaktur, logistik, pengelolaan gedung, dan organisasi yang membutuhkan visibilitas kondisi aset atau lingkungan.',
    faq: [
      {
        question: 'Apakah termasuk perangkat keras?',
        answer:
          'Bisa dimasukkan dalam proposal setelah spesifikasi disepakati. Harga perangkat, pemasangan, dan konektivitas dibedakan dari biaya pengembangan aplikasi.',
      },
      {
        question: 'Bisa dimulai dari prototipe kecil?',
        answer:
          'Bisa. Prototipe membantu memvalidasi kualitas data, jaringan, dan manfaat sebelum memasang perangkat dalam jumlah lebih besar.',
      },
    ],
  },
  {
    slug: 'web3-blockchain',
    name: 'Web3 & Blockchain',
    short: 'Eksplorasi teknologi baru dengan tujuan yang jelas.',
    icon: 'blocks',
    headline: 'Bangun kepercayaan di dalam arsitektur.',
    description:
      'Konsultasi arsitektur blockchain, pengembangan dApp, integrasi wallet, dan prototipe smart contract sesuai kebutuhan proyek.',
    intro:
      'Blockchain bukan jawaban untuk setiap masalah. Kami membantu menilai apakah kebutuhan transparansi, verifikasi, dan pertukaran data lintas pihak memang cocok dengan pendekatan terdistribusi. Jika cocok, proyek dimulai dari prototipe dengan risiko dan batasan yang terdokumentasi.',
    features: [
      'Penilaian use case blockchain',
      'Prototipe smart contract',
      'dApp & integrasi wallet',
      'Pencatatan dan verifikasi data',
      'Integrasi aplikasi dengan jaringan',
      'Pengujian testnet & dokumentasi',
    ],
    deliverables: [
      'Kajian arsitektur dan tradeoff',
      'Prototipe testnet sesuai scope',
      'Antarmuka dan integrasi',
      'Dokumentasi risiko serta operasional',
    ],
    approach:
      'Kami membandingkan solusi blockchain dengan database biasa, meninjau biaya jaringan, pengelolaan kunci, dan kebutuhan audit. Audit keamanan independen serta kajian hukum untuk penggunaan khusus perlu disiapkan sesuai konteks.',
    audience:
      'Untuk tim yang mengeksplorasi verifikasi dokumen, provenance, keanggotaan digital, dan pencatatan lintas organisasi.',
    faq: [
      {
        question: 'Apakah semua proyek harus memakai token?',
        answer:
          'Tidak. Banyak kebutuhan verifikasi dan pencatatan tidak memerlukan token yang diperdagangkan. Arsitektur ditentukan oleh tujuan dan risiko proyek.',
      },
      {
        question: 'Apakah audit smart contract termasuk?',
        answer:
          'Pengujian pengembangan berbeda dari audit independen. Jika audit pihak ketiga dibutuhkan, cakupan dan biayanya disepakati terpisah sebelum peluncuran.',
      },
    ],
  },
  {
    slug: 'konsultasi-training-it',
    name: 'Konsultasi & Training IT',
    short: 'Tim yang lebih siap. Langkah yang lebih pasti.',
    icon: 'graduation',
    headline: 'Teknologi yang dipahami, bukan sekadar dipakai.',
    description:
      'Konsultasi IT, audit arsitektur, roadmap transformasi digital, workshop teknis, dan pelatihan tim sesuai kebutuhan organisasi.',
    intro:
      'Keputusan teknologi yang baik memerlukan konteks bisnis dan kemampuan tim. Kami membantu menilai kondisi saat ini, memilih prioritas, serta merancang peta jalan yang dapat dikerjakan. Pelatihan disesuaikan dengan level peserta dan contoh kasus yang dekat dengan pekerjaan mereka.',
    features: [
      'Discovery & roadmap digital',
      'Audit arsitektur aplikasi',
      'Pendampingan pemilihan teknologi',
      'Workshop web, API & cloud',
      'Pelatihan AI dan otomasi',
      'Knowledge transfer untuk tim internal',
    ],
    deliverables: [
      'Rekomendasi dan prioritas tindakan',
      'Materi serta agenda yang disepakati',
      'Sesi praktik sesuai kebutuhan',
      'Catatan tindak lanjut dan referensi',
    ],
    approach:
      'Kami menyepakati sasaran pembelajaran atau keputusan yang perlu diambil. Format konsultasi, jumlah sesi, peserta, dan hasil akhirnya dijelaskan sejak awal agar pendampingan memiliki arah yang terukur.',
    audience:
      'Untuk pemilik usaha, pimpinan tim, instansi, dan perusahaan yang ingin memperkuat kemampuan digital serta mengambil keputusan teknis dengan lebih percaya diri.',
    faq: [
      {
        question: 'Bisa pelatihan untuk tim nonteknis?',
        answer:
          'Bisa. Materi dapat difokuskan pada penggunaan alat, pemetaan proses, literasi AI, atau pengelolaan produk tanpa mewajibkan kemampuan coding.',
      },
      {
        question: 'Apakah tersedia sertifikasi resmi?',
        answer:
          'Jenis bukti keikutsertaan dibahas dalam penawaran. Kami tidak mengklaim sertifikasi profesi atau sertifikasi vendor resmi tanpa program yang memang menyediakannya.',
      },
    ],
  },
];
