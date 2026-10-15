export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  theme: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  service: string;
};
export const articles: Article[] = [
  {
    slug: 'cara-memilih-vendor-aplikasi',
    title: 'Memilih vendor aplikasi: mulai dari pertanyaan yang tepat.',
    category: 'PANDUAN BISNIS',
    readTime: '5 menit',
    theme: 'blue',
    service: 'pengembangan-aplikasi',
    excerpt:
      'Apa yang perlu ditanyakan sebelum menyerahkan ide, data, dan anggaran pengembangan kepada partner teknologi?',
    sections: [
      {
        heading: 'Tentukan masalah sebelum mencari teknologi',
        paragraphs: [
          'Sebelum membandingkan penawaran vendor aplikasi, tulis proses yang ingin diperbaiki. Siapa penggunanya, apa hambatannya, dan keputusan apa yang akan menjadi lebih mudah setelah aplikasi tersedia? Jawaban ini lebih berguna daripada daftar teknologi yang sedang populer.',
          'Contohnya, distributor yang kesulitan mencocokkan stok dan pesanan mungkin membutuhkan aplikasi internal sederhana lebih dahulu. Aplikasi pelanggan yang lengkap belum tentu menyelesaikan sumber masalahnya. Vendor yang baik membantu menguji asumsi ini sebelum menyusun fitur.',
        ],
      },
      {
        heading: 'Bandingkan penawaran dengan lingkup yang sama',
        paragraphs: [
          'Dua harga tidak bisa dibandingkan bila hasil pekerjaannya berbeda. Pastikan jumlah modul, peran pengguna, integrasi, migrasi, dan proses pengujian tercantum. Istilah seperti “aplikasi lengkap” tidak cukup untuk menjadi dasar kesepakatan.',
        ],
        bullets: [
          'Minta daftar fitur dan batasan tiap modul.',
          'Periksa jumlah revisi serta mekanisme perubahan scope.',
          'Pisahkan biaya jasa, hosting, akun developer, dan layanan pihak ketiga.',
          'Tanyakan hasil pengujian serta dokumentasi yang diserahkan.',
        ],
      },
      {
        heading: 'Lihat cara kerja, bukan hanya tampilan portofolio',
        paragraphs: [
          'Mintalah penjelasan tentang peran vendor pada proyek yang ditampilkan. Apakah mereka merancang produknya, mengembangkan aplikasi, atau hanya mengerjakan satu modul? Jika contoh tersebut adalah konsep, statusnya perlu dinyatakan dengan jelas.',
          'Tanyakan bagaimana Anda akan meninjau kemajuan. Demo berkala membantu menemukan perbedaan pemahaman sebelum terlanjur menjadi banyak kode. Sepakati siapa yang memberi persetujuan desain dan siapa yang menjalankan pengujian pengguna.',
        ],
      },
      {
        heading: 'Bahas kepemilikan dan operasional sejak awal',
        paragraphs: [
          'Source code, akun cloud, domain, lisensi, serta dokumentasi menentukan kemampuan Anda melanjutkan produk di masa depan. Jangan menunggu akhir proyek untuk menanyakannya. Akun utama sebaiknya berada di bawah kendali organisasi sesuai kesepakatan.',
          'Dukungan setelah rilis juga perlu dibatasi dengan jelas. Bedakan perbaikan bug, perubahan fitur, maintenance rutin, dan penanganan gangguan. Setiap jenis dukungan memiliki kebutuhan biaya serta waktu respons yang berbeda.',
        ],
      },
      {
        heading: 'Mulai dengan discovery yang konkret',
        paragraphs: [
          'Siapkan ringkasan satu halaman berisi pengguna, masalah, fitur wajib, sumber data, target waktu, dan kisaran anggaran. Jika belum semua terjawab, diskusi discovery bisa membantu membentuknya.',
          'Sliva dapat membantu memetakan kebutuhan, menentukan versi awal, dan menyiapkan scope yang bisa ditinjau. Tujuannya agar pilihan vendor dan investasi pengembangan berangkat dari pemahaman yang sama.',
        ],
      },
    ],
  },
  {
    slug: 'biaya-pembuatan-website',
    title: 'Apa saja yang menentukan biaya pembuatan website?',
    category: 'WEBSITE',
    readTime: '4 menit',
    theme: 'cyan',
    service: 'pembuatan-website',
    excerpt:
      'Kenali komponen biaya awal dan biaya rutin agar anggaran website tetap masuk akal untuk bisnis Anda.',
    sections: [
      {
        heading: 'Harga mengikuti kebutuhan, bukan sekadar jumlah halaman',
        paragraphs: [
          'Website company profile lima halaman bisa memiliki lingkup yang sangat berbeda. Salah satunya memakai konten yang sudah siap dan struktur sederhana; yang lain memerlukan riset, fotografi, beberapa bahasa, serta integrasi ke sistem internal.',
          'Karena itu, permintaan harga sebaiknya disertai tujuan website dan tindakan yang diharapkan dari pengunjung. Website untuk memperkenalkan usaha berbeda kebutuhannya dari toko online dengan pembayaran dan sinkronisasi stok.',
        ],
      },
      {
        heading: 'Pisahkan biaya pengembangan dan biaya operasional',
        paragraphs: [
          'Biaya pengembangan mencakup pekerjaan seperti perencanaan, desain, coding, penyiapan konten, dan pengujian. Biaya operasional muncul setelah website digunakan dan dapat berulang bulanan atau tahunan.',
        ],
        bullets: [
          'Domain dan perpanjangannya.',
          'Hosting atau server sesuai kapasitas.',
          'Lisensi plugin, CMS, atau layanan yang dipilih.',
          'Maintenance, pembaruan konten, dan dukungan.',
          'Layanan email, formulir, atau integrasi tambahan bila dibutuhkan.',
        ],
      },
      {
        heading: 'Desain khusus dan template punya konteks masing-masing',
        paragraphs: [
          'Template yang disesuaikan dapat cocok untuk kebutuhan sederhana dengan anggaran terbatas. Desain khusus berguna ketika struktur konten, identitas merek, atau alur konversinya memerlukan pendekatan yang berbeda.',
          'Pertanyaan utamanya adalah apakah tampilan membantu pengunjung memahami penawaran dan menghubungi bisnis. Animasi atau efek visual sebaiknya tetap mempertimbangkan kecepatan serta kenyamanan pada perangkat mobile.',
        ],
      },
      {
        heading: 'Kurangi biaya dengan menyiapkan bahan lebih awal',
        paragraphs: [
          'Profil bisnis, daftar layanan, logo yang layak pakai, foto, dan kontak yang konsisten membantu proses berjalan lebih terarah. Tentukan juga siapa yang menyetujui desain dan konten agar revisi tidak berputar di antara banyak keputusan.',
          'Jika anggaran terbatas, mulai dari halaman yang paling mendukung penjualan: beranda, layanan, tentang, dan kontak. Artikel, fitur khusus, serta integrasi dapat ditambahkan ketika kebutuhannya sudah jelas.',
        ],
      },
      {
        heading: 'Minta penawaran yang menjelaskan hasil akhir',
        paragraphs: [
          'Penawaran yang baik menjelaskan apa yang diterima, apa yang perlu disediakan pemilik bisnis, jadwal, revisi, serta mekanisme serah terima. Hindari menjadikan harga termurah sebagai satu-satunya ukuran bila biaya rutin dan dukungannya belum terlihat.',
          'Di Sliva, pembahasan anggaran dimulai dengan prioritas. Kami membantu memilih ruang lingkup yang relevan agar website tetap bisa tumbuh tanpa memaksakan semua fitur sejak awal.',
        ],
      },
    ],
  },
  {
    slug: 'digitalisasi-umkm-bertahap',
    title: 'Digitalisasi UMKM tanpa harus membuat semuanya sekaligus.',
    category: 'UMKM',
    readTime: '4 menit',
    theme: 'cream',
    service: 'software-custom',
    excerpt:
      'Cara menentukan langkah digital pertama dari masalah operasional yang paling sering terjadi.',
    sections: [
      {
        heading: 'Mulai dari hambatan yang paling sering muncul',
        paragraphs: [
          'Digitalisasi tidak harus berarti membuat aplikasi besar. Untuk sebagian usaha, masalah utamanya adalah calon pelanggan sulit menemukan informasi. Untuk usaha lain, stok yang tidak tercatat justru lebih mendesak.',
          'Catat pekerjaan yang diulang setiap hari, sumber kesalahan yang sering muncul, dan informasi yang sulit didapat ketika mengambil keputusan. Pilih satu masalah yang cukup jelas untuk menjadi langkah pertama.',
        ],
      },
      {
        heading: 'Bedakan kebutuhan dikenal dan kebutuhan dikelola',
        paragraphs: [
          'Website dan katalog membantu bisnis menjelaskan produk serta membuka percakapan dengan pelanggan. Sistem kasir, stok, dan pencatatan pesanan membantu tim mengelola aktivitas di belakangnya. Keduanya penting, tetapi urutan pengerjaannya bisa berbeda.',
          'Jika pesanan sudah ramai tetapi pencatatan berantakan, merapikan operasional mungkin memberi manfaat lebih cepat. Jika produk sudah siap namun pelanggan tidak memahami penawaran, website sederhana dengan alur WhatsApp bisa menjadi awal.',
        ],
      },
      {
        heading: 'Pilih fitur yang benar-benar akan digunakan',
        paragraphs: [
          'Libatkan orang yang menjalankan proses setiap hari. Sebuah fitur tidak bernilai bila terlalu rumit untuk dipakai di sela pekerjaan. Gunakan istilah yang dikenal tim dan batasi isian pada data yang memang diperlukan.',
        ],
        bullets: [
          'Tentukan satu penanggung jawab data.',
          'Mulai dengan kategori serta format pencatatan yang konsisten.',
          'Uji alur menggunakan pesanan nyata dalam skala kecil.',
          'Sediakan waktu latihan dan catatan cara penggunaan.',
        ],
      },
      {
        heading: 'Hitung biaya rutin dan kesiapan tim',
        paragraphs: [
          'Biaya digitalisasi mencakup lebih dari pembuatan awal. Perangkat, koneksi, domain, hosting, dan waktu pelatihan juga perlu dipertimbangkan. Sistem yang lebih sederhana dapat menjadi pilihan yang tepat bila pengelolaannya lebih sesuai kemampuan tim.',
          'Tetapkan indikator sederhana sebelum memulai, misalnya kelengkapan pencatatan pesanan atau waktu yang diperlukan untuk mencari stok. Bandingkan kondisi setelah pemakaian agar pengembangan berikutnya didasarkan pada pengalaman.',
        ],
      },
      {
        heading: 'Bangun langkah kedua setelah langkah pertama stabil',
        paragraphs: [
          'Setelah satu proses berjalan rapi, barulah hubungkan kebutuhan berikutnya. Data pesanan yang konsisten dapat menjadi dasar laporan. Katalog yang sering dipakai dapat dikembangkan menjadi toko online.',
          'Sliva membantu UMKM memetakan urutan ini dan menyusun pengembangan sesuai anggaran. Cerita singkat tentang cara kerja usaha Anda sudah cukup untuk memulai diskusi.',
        ],
      },
    ],
  },
  {
    slug: 'persiapan-proyek-sistem-informasi',
    title: 'Checklist sebelum memulai proyek sistem informasi.',
    category: 'TRANSFORMASI DIGITAL',
    readTime: '5 menit',
    theme: 'blue',
    service: 'konsultasi-training-it',
    excerpt:
      'Pengguna, data, integrasi, dan penerimaan hasil: hal yang perlu dipastikan sebelum development dimulai.',
    sections: [
      {
        heading: 'Sepakati hasil yang ingin dicapai',
        paragraphs: [
          'Sistem informasi biasanya melibatkan banyak peran dengan kebutuhan yang berbeda. Sebelum membahas layar, sepakati proses mana yang akan berubah dan masalah apa yang ingin diselesaikan. Buat batasan agar proyek tidak melebar tanpa keputusan.',
          'Tuliskan juga hal yang berada di luar fase pertama. Batasan bukan penghalang pengembangan; batasan membantu menjaga jadwal, anggaran, dan fokus pengujian.',
        ],
      },
      {
        heading: 'Petakan peran dan aturan proses',
        paragraphs: [
          'Catat siapa yang memasukkan data, memverifikasi, menyetujui, dan melihat laporan. Untuk setiap langkah, jelaskan kondisi gagal, koreksi, pembatalan, serta perpindahan penanggung jawab.',
          'Proses informal sering terlihat sederhana sampai diterjemahkan ke aplikasi. Misalnya, persetujuan yang biasanya dilakukan lewat percakapan perlu diubah menjadi aturan yang bisa dijelaskan dan ditelusuri.',
        ],
      },
      {
        heading: 'Periksa sumber dan kualitas data',
        paragraphs: [
          'Data lama tidak selalu siap dipindahkan. Nama kolom bisa berbeda, ada duplikasi, dan beberapa isian tidak lengkap. Ambil sampel lebih awal untuk menilai pekerjaan migrasi.',
        ],
        bullets: [
          'Inventaris sumber data dan pemiliknya.',
          'Tentukan format serta identitas unik tiap entitas.',
          'Sepakati cara menangani data ganda atau tidak lengkap.',
          'Siapkan validasi dan prosedur persetujuan hasil migrasi.',
        ],
      },
      {
        heading: 'Pastikan akses integrasi tersedia',
        paragraphs: [
          'Integrasi membutuhkan lebih dari nama aplikasi pihak ketiga. Tim perlu dokumentasi, izin, kredensial pengujian, batas kuota, dan kontak teknis. Jika akses belum tersedia, jadwalnya perlu mencerminkan ketergantungan tersebut.',
          'Kebutuhan keamanan juga sebaiknya dinyatakan sejak awal: klasifikasi data, hak akses, pencatatan aktivitas, backup, dan ketentuan lingkungan operasional. Persyaratan khusus organisasi perlu diperiksa oleh pihak yang berwenang.',
        ],
      },
      {
        heading: 'Tentukan cara menerima hasil pekerjaan',
        paragraphs: [
          'User Acceptance Testing atau UAT perlu memakai skenario yang mewakili pekerjaan sehari-hari. Tentukan peserta, data pengujian, kriteria lulus, dan cara mencatat temuan. “Sudah bisa dibuka” belum cukup untuk membuktikan proses bekerja.',
          'Sliva dapat membantu menyusun discovery, dokumen kebutuhan, dan rencana implementasi bertahap. Dengan dasar yang jelas, pengembangan dan serah terima menjadi lebih mudah ditinjau.',
        ],
      },
    ],
  },
  {
    slug: 'ai-untuk-operasional-bisnis',
    title: 'AI untuk bisnis: pilih pekerjaan yang layak diotomasi.',
    category: 'AI & OTOMASI',
    readTime: '4 menit',
    theme: 'cyan',
    service: 'ai-otomasi',
    excerpt:
      'Dari dokumen sampai pertanyaan berulang, temukan penerapan AI yang punya tujuan dan cara evaluasi yang jelas.',
    sections: [
      {
        heading: 'Mulai dengan tugas, bukan nama model',
        paragraphs: [
          'Pertanyaan pertama dalam proyek AI bukan “model apa yang dipakai?”, melainkan “pekerjaan apa yang perlu dibantu?”. Tugas yang berulang, memiliki sumber informasi jelas, dan bisa dievaluasi menjadi kandidat awal yang lebih mudah dipahami.',
          'Contohnya adalah merangkum catatan rapat, mencari panduan internal, mengelompokkan permintaan layanan, atau mengekstrak isian dari dokumen. Masing-masing membutuhkan batasan dan ukuran keberhasilan yang berbeda.',
        ],
      },
      {
        heading: 'Pastikan data boleh dan layak digunakan',
        paragraphs: [
          'Dokumen yang tersedia belum tentu boleh dikirim ke layanan eksternal. Tentukan pemilik data, klasifikasi informasi, pengguna yang boleh mengakses, serta ketentuan penyimpanan sebelum memilih arsitektur.',
          'Kualitas sumber juga memengaruhi jawaban. Panduan yang bertentangan atau sudah usang tidak akan menjadi baik hanya karena diproses AI. Pengelolaan pengetahuan tetap merupakan pekerjaan penting.',
        ],
      },
      {
        heading: 'Uji dengan contoh yang mewakili penggunaan',
        paragraphs: [
          'Siapkan kumpulan pertanyaan atau dokumen uji, termasuk contoh sulit dan pertanyaan di luar konteks. Nilai hasilnya berdasarkan kebutuhan pengguna, bukan hanya kesan bahwa jawabannya terdengar meyakinkan.',
        ],
        bullets: [
          'Ketepatan isi dan kesesuaian dengan sumber.',
          'Kemampuan mengakui informasi yang tidak tersedia.',
          'Waktu respons dan biaya per penggunaan.',
          'Perlindungan akses terhadap dokumen internal.',
        ],
      },
      {
        heading: 'Sediakan peran manusia',
        paragraphs: [
          'AI bisa membuat kesalahan. Tugas dengan konsekuensi besar memerlukan verifikasi dan persetujuan manusia. Sistem dapat membantu menyiapkan ringkasan atau saran tanpa langsung menjalankan keputusan.',
          'Tentukan juga jalur eskalasi. Pengguna perlu tahu apa yang harus dilakukan jika jawaban tidak membantu, dan pengelola perlu melihat pola pertanyaan yang belum terjawab.',
        ],
      },
      {
        heading: 'Mulai dari proof of concept',
        paragraphs: [
          'Prototipe terbatas membantu menguji manfaat, kualitas, dan biaya sebelum integrasi luas. Hasilnya bisa menunjukkan bahwa solusi perlu diperbaiki, dipersempit, atau bahkan diganti dengan otomasi biasa.',
          'Sliva membantu merancang eksperimen, integrasi, dan evaluasi AI sesuai proses bisnis Anda. Sasaran awalnya adalah membuktikan kegunaan pada satu pekerjaan yang jelas.',
        ],
      },
    ],
  },
  {
    slug: 'website-cepat-dan-seo',
    title: 'Website cepat dan SEO: fondasi yang perlu dibangun bersama.',
    category: 'WEBSITE & SEO',
    readTime: '4 menit',
    theme: 'cream',
    service: 'pembuatan-website',
    excerpt:
      'Konten yang jelas, halaman yang bisa dirayapi, dan pengalaman mobile membentuk fondasi pencarian yang lebih baik.',
    sections: [
      {
        heading: 'Bantu pengunjung dan mesin pencari memahami halaman',
        paragraphs: [
          'Setiap halaman sebaiknya memiliki satu tujuan utama. Judul, heading, penjelasan layanan, dan ajakan bertindak perlu saling mendukung. Hindari memenuhi halaman dengan variasi keyword yang tidak menambah informasi.',
          'URL yang jelas dan tautan antarkonten membantu orang menemukan pembahasan terkait. Struktur ini juga membantu mesin pencari menjelajahi website. Konten penting sebaiknya tersedia sebagai HTML yang dapat dibaca.',
        ],
      },
      {
        heading: 'Jaga pengalaman mobile',
        paragraphs: [
          'Pengunjung mobile perlu membaca teks, menekan tombol, dan mengisi formulir tanpa memperbesar layar. Tata letak harus tetap stabil saat font atau gambar dimuat. Elemen visual yang menarik tetap perlu disesuaikan dengan ukuran perangkat.',
          'Gambar yang proporsional, font yang efisien, dan JavaScript yang tidak berlebihan membantu mengurangi waktu tunggu. Animasi dapat menghormati preferensi pengguna yang memilih gerakan lebih sedikit.',
        ],
      },
      {
        heading: 'Lengkapi fondasi teknis',
        paragraphs: [
          'Metadata unik menjelaskan konteks halaman, sedangkan canonical membantu menunjukkan URL yang diutamakan. Sitemap memperkenalkan daftar halaman penting. Robots perlu diatur sesuai tujuan, tanpa sengaja memblokir halaman layanan.',
        ],
        bullets: [
          'Title dan description yang sesuai isi halaman.',
          'Canonical ke domain resmi.',
          'Sitemap XML dan robots.txt yang konsisten.',
          'Structured data yang hanya berisi informasi nyata.',
          'Halaman 404 dan tautan internal yang berfungsi.',
        ],
      },
      {
        heading: 'Ukur performa setelah website dipakai',
        paragraphs: [
          'Pengujian laboratorium membantu menemukan masalah teknis, tetapi kondisi pengguna nyata bisa berbeda. Pantau Core Web Vitals dan data pencarian setelah website memiliki cukup kunjungan. Jangan menganggap satu skor sebagai jaminan peringkat.',
          'Search Console membantu melihat status indeks, query, impresi, serta klik. Data ini menjadi dasar untuk memperbaiki halaman yang sudah tampil tetapi belum menjawab kebutuhan pencari.',
        ],
      },
      {
        heading: 'Bangun konten berdasarkan kebutuhan pembaca',
        paragraphs: [
          'Daftar keyword berguna sebagai peta topik, bukan sebagai daftar kata yang harus ditumpuk di halaman. Gabungkan variasi query dengan maksud yang sama ke satu pembahasan yang lengkap.',
          'Sliva menyiapkan fondasi teknis dan struktur konten yang dapat dikembangkan. Peringkat teratas tetap dipengaruhi persaingan, reputasi, kegunaan konten, serta evaluasi berkelanjutan setelah peluncuran.',
        ],
      },
    ],
  },
];
