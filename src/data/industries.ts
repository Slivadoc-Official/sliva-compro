export type Industry = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challenge: string;
  solutions: string[];
  considerations: string;
  serviceSlugs: string[];
};
export const industries: Industry[] = [
  {
    slug: 'pemerintahan',
    name: 'Pemerintahan & Publik',
    icon: 'landmark',
    tagline: 'Layanan publik yang lebih dekat dengan masyarakat.',
    description:
      'Pengembangan portal instansi, sistem informasi, layanan administrasi, dan dashboard untuk mendukung digitalisasi pemerintahan.',
    challenge:
      'Informasi yang tersebar, proses administrasi berulang, dan kebutuhan pelaporan lintas unit memerlukan sistem yang dirancang bersama pengguna. Kami membantu memetakan alur layanan, peran petugas, dan kebutuhan masyarakat agar pengembangan memiliki sasaran yang jelas.',
    solutions: [
      'Portal informasi dan pengelolaan konten instansi',
      'Layanan administrasi dan pelacakan permohonan',
      'Dashboard pelaporan dan monitoring program',
      'Manajemen dokumen dan alur persetujuan',
      'Integrasi data antarunit sesuai kewenangan',
    ],
    considerations:
      'Kebutuhan dokumen pengadaan, kebijakan data, aksesibilitas, hak akses, audit trail, dan proses serah terima dibahas berdasarkan persyaratan instansi. Kesesuaian administrasi dinilai per proyek sebelum kesepakatan.',
    serviceSlugs: ['software-custom', 'pembuatan-website', 'data-analytics'],
  },
  {
    slug: 'perusahaan',
    name: 'Perusahaan & Enterprise',
    icon: 'building',
    tagline: 'Satukan proses. Gerakkan bisnis lebih jauh.',
    description:
      'Solusi software enterprise, ERP, CRM, integrasi API, dan otomasi untuk kebutuhan perusahaan swasta serta organisasi dengan banyak divisi.',
    challenge:
      'Pertumbuhan bisnis sering diikuti sistem yang saling terpisah. Tim harus mengulang input dan manajemen kesulitan membaca kondisi operasional secara utuh. Kami membantu menyelaraskan proses, data, dan kepemilikan sistem antarbagian.',
    solutions: [
      'ERP dan aplikasi internal sesuai proses bisnis',
      'CRM serta portal pelanggan dan mitra',
      'Integrasi keuangan, penjualan, dan pengadaan',
      'Dashboard lintas cabang dan divisi',
      'Otomasi approval dan pelaporan',
    ],
    considerations:
      'Integrasi sistem lama, migrasi, keamanan akses, dan perubahan kebiasaan tim perlu direncanakan bertahap. UAT dilakukan bersama pengguna perwakilan sebelum penerapan lebih luas.',
    serviceSlugs: ['software-custom', 'integrasi-api', 'cloud-devops'],
  },
  {
    slug: 'umkm',
    name: 'UMKM & Bisnis Lokal',
    icon: 'store',
    tagline: 'Mulai dari yang penting. Tumbuh selangkah lagi.',
    description:
      'Website UMKM, katalog online, kasir, pencatatan stok, dan aplikasi usaha dengan ruang lingkup yang menyesuaikan anggaran.',
    challenge:
      'Pemilik usaha perlu solusi yang mudah dipakai tanpa biaya yang sulit diprediksi. Kami membantu menentukan kebutuhan paling mendesak: memperkenalkan usaha, menerima pertanyaan pelanggan, merapikan pesanan, atau mencatat persediaan.',
    solutions: [
      'Website usaha dan katalog produk',
      'Landing page dengan konsultasi WhatsApp',
      'Pencatatan pesanan dan persediaan',
      'Kasir dan laporan usaha sederhana',
      'Otomasi pengingat serta administrasi',
    ],
    considerations:
      'Pengembangan dapat dimulai dari fitur inti. Biaya domain, hosting, layanan tambahan, dan maintenance dijelaskan agar pengeluaran awal serta biaya rutin bisa dipertimbangkan bersama.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'ai-otomasi'],
  },
  {
    slug: 'startup',
    name: 'Startup & Produk Digital',
    icon: 'rocket',
    tagline: 'Uji idenya. Temukan nilai nyatanya.',
    description:
      'Desain produk, prototipe, MVP aplikasi, dan pengembangan platform untuk startup yang ingin memvalidasi pasar secara bertahap.',
    challenge:
      'Ide yang besar perlu dipisahkan menjadi hipotesis yang bisa diuji. Kami membantu memilih pengguna awal, masalah utama, dan fitur minimum agar investasi pengembangan memberi pembelajaran yang berguna.',
    solutions: [
      'Discovery produk dan prototipe interaktif',
      'MVP web app serta aplikasi mobile',
      'Dashboard operasional produk',
      'Integrasi pembayaran dan notifikasi',
      'Peta pengembangan setelah validasi',
    ],
    considerations:
      'Prioritas fitur, alat pengukuran, biaya operasional, dan kepemilikan akun disepakati sejak awal. Produk dapat dikembangkan setelah ada masukan nyata dari pengguna pertama.',
    serviceSlugs: ['ui-ux-design', 'pengembangan-aplikasi', 'integrasi-api'],
  },
  {
    slug: 'pendidikan',
    name: 'Pendidikan & Pelatihan',
    icon: 'graduation',
    tagline: 'Lebih banyak ruang untuk belajar.',
    description:
      'Website sekolah, sistem akademik, LMS, pendaftaran online, dan dashboard pembelajaran untuk lembaga pendidikan.',
    challenge:
      'Pengajar dan pengelola membutuhkan informasi peserta yang rapi serta alur administrasi yang mudah diikuti. Kami membantu menata pengelolaan materi, pendaftaran, jadwal, dan laporan sesuai kapasitas lembaga.',
    solutions: [
      'Website dan portal informasi sekolah',
      'Pendaftaran peserta didik secara online',
      'Learning management system dan materi',
      'Sistem akademik serta presensi',
      'Dashboard peserta dan pelaporan',
    ],
    considerations:
      'Hak akses pengajar, siswa, orang tua, serta pengelola perlu dibedakan. Penggunaan data peserta dan kebutuhan akses dari perangkat sederhana menjadi pertimbangan desain.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'pengembangan-aplikasi'],
  },
  {
    slug: 'kesehatan',
    name: 'Kesehatan & Veterinary',
    icon: 'heart',
    tagline: 'Administrasi lebih rapi. Pelayanan lebih fokus.',
    description:
      'Sistem administrasi klinik, reservasi, manajemen praktik, dan platform kesehatan hewan sesuai kebutuhan operasional.',
    challenge:
      'Jadwal, administrasi, dan pencatatan layanan yang terpisah dapat menyita waktu petugas. Kami membantu merancang aplikasi yang memudahkan pengelolaan praktik, sambil memperhatikan akses terhadap informasi sensitif.',
    solutions: [
      'Website klinik dan reservasi layanan',
      'Manajemen antrean serta jadwal',
      'Pencatatan operasional dan layanan',
      'Manajemen praktik veterinary',
      'Pelaporan serta integrasi sesuai kebutuhan',
    ],
    considerations:
      'Kebutuhan privasi, otorisasi, retensi, dan regulasi harus ditinjau bersama pengelola. Keputusan klinis tetap berada pada tenaga profesional. Integrasi khusus dinilai berdasarkan akses dan persyaratan yang berlaku.',
    serviceSlugs: ['software-custom', 'pengembangan-aplikasi', 'keamanan-maintenance'],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: 'shopping',
    tagline: 'Dari etalase sampai pesanan selesai.',
    description:
      'Pengembangan toko online, katalog, POS, inventory, dan integrasi pesanan untuk bisnis ritel.',
    challenge:
      'Data stok dan pesanan yang tidak sinkron bisa membuat pelanggan menunggu atau memesan barang yang tidak tersedia. Kami membantu menghubungkan pengalaman belanja dengan alur kerja di belakangnya.',
    solutions: [
      'Toko online dan katalog produk',
      'Kasir serta pengelolaan persediaan',
      'Manajemen pesanan dan pelanggan',
      'Integrasi pembayaran serta pengiriman',
      'Dashboard penjualan lintas kanal',
    ],
    considerations:
      'Aturan harga, variasi produk, retur, dan rekonsiliasi pembayaran harus disepakati dengan jelas. Integrasi marketplace bergantung pada ketersediaan API dan izin penyedia.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'integrasi-api'],
  },
  {
    slug: 'logistik',
    name: 'Logistik & Transportasi',
    icon: 'truck',
    tagline: 'Pergerakan yang lebih mudah dipantau.',
    description:
      'Sistem pengiriman, pelacakan status, manajemen armada, gudang, dan pelaporan untuk operasional logistik.',
    challenge:
      'Koordinasi pengiriman membutuhkan data yang konsisten antara admin, pengemudi, gudang, dan pelanggan. Kami membantu menyusun alur pembaruan status yang mudah dipakai di lapangan.',
    solutions: [
      'Manajemen order dan pengiriman',
      'Pelacakan status serta bukti serah terima',
      'Aplikasi pengemudi dan petugas',
      'Pengelolaan gudang serta armada',
      'Dashboard kinerja operasional',
    ],
    considerations:
      'Kondisi jaringan, kualitas data lokasi, perangkat lapangan, dan mekanisme sinkronisasi perlu diuji. Target ketepatan pelacakan disesuaikan dengan sumber data yang tersedia.',
    serviceSlugs: ['pengembangan-aplikasi', 'iot-sistem-cerdas', 'data-analytics'],
  },
  {
    slug: 'manufaktur',
    name: 'Manufaktur & Industri',
    icon: 'factory',
    tagline: 'Operasional yang lebih terlihat dari hulu ke hilir.',
    description:
      'Software produksi, inventory, maintenance aset, dashboard pabrik, dan integrasi IoT untuk kebutuhan manufaktur.',
    challenge:
      'Data produksi di kertas atau aplikasi terpisah menyulitkan penelusuran bahan dan kondisi operasional. Kami membantu menentukan pencatatan yang diperlukan untuk menyatukan gambaran proses.',
    solutions: [
      'Pencatatan produksi serta bahan baku',
      'Inventory dan pengadaan',
      'Jadwal perawatan aset serta mesin',
      'Dashboard indikator operasional',
      'Integrasi sensor dan perangkat',
    ],
    considerations:
      'Integrasi mesin lama, lingkungan operasional, toleransi downtime, dan validasi data perlu dikaji melalui peninjauan teknis. Implementasi dapat dimulai dari satu lini atau area.',
    serviceSlugs: ['software-custom', 'iot-sistem-cerdas', 'data-analytics'],
  },
  {
    slug: 'properti-konstruksi',
    name: 'Properti & Konstruksi',
    icon: 'building',
    tagline: 'Dari prospek pertama hingga progres proyek.',
    description:
      'Website properti, CRM penjualan, manajemen proyek, dan aplikasi inspeksi untuk developer serta perusahaan konstruksi.',
    challenge:
      'Tim penjualan dan lapangan membutuhkan informasi yang berbeda tetapi saling terkait. Kami membantu menata katalog, prospek, dokumen, serta pembaruan proyek dalam alur yang bisa ditelusuri.',
    solutions: [
      'Website dan katalog unit properti',
      'CRM prospek serta tindak lanjut',
      'Pelaporan progres dan dokumentasi',
      'Alur persetujuan serta administrasi proyek',
      'Aplikasi inspeksi dan checklist lapangan',
    ],
    considerations:
      'Versi dokumen, perubahan harga, hak akses mitra, dan penggunaan di lapangan perlu direncanakan. Informasi publik dipisahkan dari data internal proyek.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'pengembangan-aplikasi'],
  },
  {
    slug: 'hospitality-fnb',
    name: 'Hospitality & F&B',
    icon: 'coffee',
    tagline: 'Pengalaman yang baik, sejak sebelum kedatangan.',
    description:
      'Website hotel dan restoran, sistem reservasi, menu digital, kasir, serta pengelolaan operasional hospitality.',
    challenge:
      'Pelanggan ingin mudah melihat informasi dan membuat pesanan, sementara tim perlu menjaga alur layanan tetap lancar. Kami membantu menghubungkan kebutuhan tamu dengan pencatatan operasional.',
    solutions: [
      'Website hotel, restoran, serta kafe',
      'Reservasi dan permintaan pemesanan',
      'Menu digital serta katalog layanan',
      'Kasir dan pengelolaan stok bahan',
      'Laporan penjualan dan operasional',
    ],
    considerations:
      'Ketersediaan, kapasitas, pembatalan, perubahan menu, dan metode pembayaran harus mengikuti aturan usaha. Integrasi sistem reservasi yang sudah ada dinilai terlebih dahulu.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'integrasi-api'],
  },
  {
    slug: 'agribisnis-lingkungan',
    name: 'Agribisnis & Lingkungan',
    icon: 'leaf',
    tagline: 'Teknologi yang bertemu kebutuhan di lapangan.',
    description:
      'Sistem pencatatan pertanian, pemantauan lingkungan, traceability, dashboard, dan integrasi sensor sesuai kebutuhan lapangan.',
    challenge:
      'Lokasi yang tersebar serta keterbatasan jaringan membuat pencatatan dan pemantauan memerlukan pendekatan khusus. Kami membantu memvalidasi alur kerja bersama pengguna lapangan sebelum memperluas sistem.',
    solutions: [
      'Pencatatan lahan, panen, dan distribusi',
      'Pemantauan kondisi lingkungan',
      'Integrasi sensor serta perangkat IoT',
      'Pelacakan asal dan perjalanan produk',
      'Dashboard dan pelaporan program',
    ],
    considerations:
      'Sumber daya perangkat, koneksi, akurasi sensor, dan kemampuan pengguna harus diuji di lokasi. Prototipe menjadi dasar untuk memperkirakan kelayakan dan biaya penerapan.',
    serviceSlugs: ['iot-sistem-cerdas', 'pengembangan-aplikasi', 'data-analytics'],
  },
  {
    slug: 'keuangan-asuransi',
    name: 'Keuangan & Asuransi',
    icon: 'landmark',
    tagline: 'Proses terhubung. Informasi lebih terkendali.',
    description:
      'Portal nasabah, workflow administrasi, dashboard operasional, dan integrasi sistem untuk kebutuhan organisasi keuangan serta asuransi.',
    challenge:
      'Banyak proses keuangan melibatkan verifikasi berlapis dan pertukaran data antarbagian. Kami membantu memetakan alur administrasi, dokumen, serta pelaporan agar pengembangan memiliki batas dan tanggung jawab yang jelas.',
    solutions: [
      'Portal pelanggan serta mitra',
      'Workflow verifikasi dan persetujuan',
      'Pengelolaan dokumen administrasi',
      'Integrasi data serta rekonsiliasi operasional',
      'Dashboard dan jejak aktivitas',
    ],
    considerations:
      'Klasifikasi data, pengendalian akses, pemisahan tugas, serta persyaratan regulator perlu ditinjau bersama tim kepatuhan organisasi. Sliva tidak mengklaim sertifikasi atau kesesuaian regulasi tanpa penilaian yang relevan. Penggunaan data dan integrasi memerlukan izin pemiliknya.',
    serviceSlugs: ['software-custom', 'integrasi-api', 'keamanan-maintenance'],
  },
  {
    slug: 'energi-utilitas',
    name: 'Energi & Utilitas',
    icon: 'cpu',
    tagline: 'Pantau kondisi. Rencanakan tindakan.',
    description:
      'Dashboard monitoring, pencatatan inspeksi, pengelolaan aset, dan integrasi data untuk operasional energi serta utilitas.',
    challenge:
      'Aset tersebar dan data dari perangkat yang berbeda membuat pemantauan memerlukan standar pencatatan yang konsisten. Kami membantu menghubungkan informasi operasional dengan kebutuhan tim pengelola dan pelaporan.',
    solutions: [
      'Dashboard pemantauan dan indikator operasional',
      'Pencatatan inspeksi serta temuan lapangan',
      'Jadwal pemeliharaan aset',
      'Integrasi sensor dan sumber data',
      'Pelaporan penggunaan serta kondisi perangkat',
    ],
    considerations:
      'Integrasi ke lingkungan operasional memerlukan batas akses, penilaian keselamatan, serta persetujuan pihak berwenang. Sistem monitoring pendukung tidak diasumsikan menggantikan sistem kendali kritis atau prosedur keselamatan yang ada.',
    serviceSlugs: ['iot-sistem-cerdas', 'data-analytics', 'pengembangan-aplikasi'],
  },
  {
    slug: 'media-kreatif',
    name: 'Media & Industri Kreatif',
    icon: 'pen',
    tagline: 'Beri ide ruang untuk bertemu audiensnya.',
    description:
      'Website studio, portal konten, katalog karya, dan workflow produksi digital untuk media, agency, serta bisnis kreatif.',
    challenge:
      'Tim kreatif perlu menyampaikan identitas dengan kuat sambil menjaga konten mudah ditemukan dan dikelola. Kami membantu menata katalog, alur editorial, serta komunikasi dengan calon klien.',
    solutions: [
      'Website studio dan portofolio karya',
      'Portal editorial dengan pengelolaan konten',
      'Katalog layanan dan permintaan brief',
      'Workflow review serta persetujuan materi',
      'Dashboard produksi dan pelaporan',
    ],
    considerations:
      'Hak penggunaan karya, izin publikasi, akses editor, dan format media dibahas sejak awal. Optimasi gambar serta video perlu menyeimbangkan mutu visual dan kecepatan akses.',
    serviceSlugs: ['pembuatan-website', 'ui-ux-design', 'software-custom'],
  },
  {
    slug: 'organisasi-komunitas',
    name: 'Organisasi & Komunitas',
    icon: 'heart',
    tagline: 'Hubungkan orang dengan tujuan bersama.',
    description:
      'Website yayasan, portal anggota, pendaftaran kegiatan, dan sistem administrasi untuk organisasi sosial serta komunitas.',
    challenge:
      'Informasi anggota, agenda, dan administrasi yang tersebar dapat menyulitkan koordinasi. Kami membantu merancang pencatatan yang mudah dipahami pengelola serta pengalaman yang jelas bagi anggota.',
    solutions: [
      'Website organisasi dan informasi program',
      'Portal serta administrasi keanggotaan',
      'Pendaftaran acara dan peserta',
      'Manajemen relawan dan agenda',
      'Dashboard pelaporan kegiatan',
    ],
    considerations:
      'Izin penggunaan data anggota, pembagian akses pengelola, serta informasi yang boleh dipublikasikan disepakati sejak awal. Lingkup dapat disederhanakan agar sesuai kapasitas dan anggaran organisasi.',
    serviceSlugs: ['pembuatan-website', 'software-custom', 'pengembangan-aplikasi'],
  },
];
