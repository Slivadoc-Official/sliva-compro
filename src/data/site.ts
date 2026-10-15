export const site = {
  name: 'Sliva',
  legalName: 'PT. Sliva Technology Indonesia',
  url: 'https://sliva.id',
  phone: '0823 9123 9651',
  internationalPhone: '+6282391239651',
  whatsapp: '6282391239651',
  email: 'evans.moris21@gmail.com',
  description:
    'Partner teknologi untuk pemerintah, perusahaan, startup, dan UMKM. Jasa pembuatan website, aplikasi, software custom, AI, dan solusi digital dengan anggaran yang masuk akal.',
};

export function whatsappUrl(
  message = 'Halo Sliva, saya ingin konsultasi tentang kebutuhan website / aplikasi. Bisa dibantu?'
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type FAQ = { question: string; answer: string };
export const faqs: FAQ[] = [
  {
    question: 'Sliva bisa membantu proyek seperti apa?',
    answer:
      'Kami membantu pembuatan website, aplikasi web dan mobile, software custom, integrasi sistem, UI/UX, AI, data, cloud, IoT, Web3, serta pendampingan IT. Ceritakan kebutuhan Anda; kami akan memetakan kelayakan, prioritas, dan ruang lingkup teknisnya bersama.',
  },
  {
    question: 'Apakah bisa untuk UMKM dengan anggaran terbatas?',
    answer:
      'Bisa. Kami menyusun fitur berdasarkan kebutuhan paling penting dan menawarkan pengembangan bertahap. Anda mendapatkan ruang lingkup dan rincian biaya untuk dipertimbangkan sebelum memulai, termasuk biaya operasional yang perlu disiapkan.',
  },
  {
    question: 'Apakah menerima proyek pemerintah dan perusahaan swasta?',
    answer:
      'Ya. Kami terbuka untuk kebutuhan instansi pemerintah, BUMN/BUMD, perusahaan swasta, startup, yayasan, dan UMKM. Kebutuhan administrasi, dokumen pengadaan, keamanan, integrasi, serta mekanisme kerja dibahas sejak awal sesuai persyaratan proyek.',
  },
  {
    question: 'Berapa biaya dan lama pengerjaannya?',
    answer:
      'Bergantung pada jumlah fitur, desain, integrasi, migrasi data, dan kebutuhan pengujian. Setelah diskusi awal, kami menyiapkan estimasi biaya dan jadwal berdasarkan ruang lingkup yang disepakati. Tidak ada satu harga atau durasi yang cocok untuk semua proyek.',
  },
  {
    question: 'Apakah bisa memperbaiki website atau aplikasi yang sudah ada?',
    answer:
      'Bisa. Kami mulai dengan peninjauan kode, akses yang tersedia, dan masalah utama. Hasilnya menjadi dasar untuk memilih perbaikan bertahap, pengembangan fitur, optimasi performa, atau pembangunan ulang jika memang diperlukan.',
  },
  {
    question: 'Bagaimana kepemilikan kode dan dukungan setelah peluncuran?',
    answer:
      'Kepemilikan source code, lisensi pihak ketiga, akses akun, dokumentasi, masa perbaikan bug, dan paket maintenance dicantumkan dalam kesepakatan proyek. Kami membahasnya sebelum pengerjaan agar proses serah terima dan pengembangan berikutnya jelas.',
  },
  {
    question: 'Apakah bisa bekerja sama secara remote di seluruh Indonesia?',
    answer:
      'Ya. Konsultasi, pembahasan kebutuhan, review desain, demo, dan pendampingan dapat dilakukan secara online. Jika proyek membutuhkan kunjungan atau implementasi di lokasi, kebutuhan dan biayanya disepakati terpisah.',
  },
  {
    question: 'Bagaimana cara memulai konsultasi?',
    answer:
      'Hubungi WhatsApp 0823 9123 9651 atau email evans.moris21@gmail.com. Kirim gambaran masalah, pengguna yang dituju, fitur utama, perkiraan anggaran, dan target waktu jika sudah ada. Ide yang masih awal juga boleh didiskusikan.',
  },
];
