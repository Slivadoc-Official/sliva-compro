export const solutions = [
  {
    slug: 'portal-layanan-publik',
    name: 'Layanan publik, lebih dekat.',
    category: 'PEMERINTAHAN',
    theme: 'public',
    icon: 'landmark',
    label: 'Portal Layanan',
    description:
      'Gambaran portal terpusat untuk informasi, pengajuan layanan, dan pemantauan status permohonan masyarakat.',
    problem:
      'Masyarakat perlu memahami persyaratan dan mengikuti perkembangan permohonan tanpa berulang kali datang ke loket. Petugas memerlukan antrean kerja yang jelas.',
    flow: [
      'Masyarakat membaca persyaratan layanan',
      'Pemohon mengirim data dan dokumen',
      'Petugas memeriksa serta memperbarui status',
      'Pemohon melihat hasil dan tindak lanjut',
    ],
    features: [
      'Katalog layanan dan persyaratan',
      'Pengajuan serta pelacakan status',
      'Dashboard petugas dan alur verifikasi',
      'Laporan operasional dan jejak aktivitas',
    ],
    service: 'software-custom',
    industry: 'pemerintahan',
  },
  {
    slug: 'operasional-bisnis',
    name: 'Bisnis rapi. Langkah pasti.',
    category: 'BISNIS & UMKM',
    theme: 'business',
    icon: 'chart',
    label: 'Business Overview',
    description:
      'Gambaran dashboard yang menyatukan pesanan, stok, serta aktivitas operasional dalam satu tempat.',
    problem:
      'Pemilik bisnis sering harus berpindah spreadsheet untuk melihat pesanan dan persediaan. Perbedaan versi data membuat tindak lanjut menjadi lambat.',
    flow: [
      'Tim mencatat pesanan dan penerimaan barang',
      'Sistem memperbarui persediaan sesuai aturan',
      'Pengelola meninjau ringkasan operasional',
      'Data diekspor untuk proses berikutnya',
    ],
    features: [
      'Pengelolaan produk dan persediaan',
      'Pencatatan pesanan dan pelanggan',
      'Dashboard serta ekspor laporan',
      'Pengaturan akses untuk setiap tim',
    ],
    service: 'software-custom',
    industry: 'umkm',
  },
  {
    slug: 'asisten-ai-bisnis',
    name: 'Waktu kembali untuk ide.',
    category: 'AI & OTOMASI',
    theme: 'ai',
    icon: 'sparkles',
    label: 'Sliva AI Workspace',
    description:
      'Gambaran asisten pengetahuan internal untuk membantu tim menemukan informasi dari dokumen yang diizinkan.',
    problem:
      'Pertanyaan berulang menghabiskan waktu tim, sementara panduan kerja tersebar di berbagai dokumen. Pencarian yang tepat membantu staf menemukan informasi lebih cepat.',
    flow: [
      'Pengelola memilih sumber dokumen yang diizinkan',
      'Pengguna mengajukan pertanyaan',
      'Asisten menyajikan jawaban beserta rujukan',
      'Pertanyaan yang belum terjawab dialihkan ke tim',
    ],
    features: [
      'Pencarian dokumen berbasis konteks',
      'Pengaturan akses sumber pengetahuan',
      'Rujukan dan evaluasi jawaban',
      'Jalur eskalasi untuk tinjauan manusia',
    ],
    service: 'ai-otomasi',
    industry: 'perusahaan',
  },
];
