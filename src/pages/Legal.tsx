import { site } from '../data/site';
import { Breadcrumb, Button, PageHero } from '../components/Shared';

export function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy';
  const title = privacy ? 'Kebijakan privasi.' : 'Ketentuan penggunaan.';
  return (
    <>
      <Breadcrumb items={[{ name: privacy ? 'Privasi' : 'Ketentuan' }]} />
      <PageHero
        eyebrow="CLEAR BY DESIGN"
        title={title}
        description={
          privacy
            ? 'Penjelasan mengenai informasi yang Anda bagikan ketika berkonsultasi melalui situs Sliva.'
            : 'Panduan penggunaan informasi di situs Sliva dan pembahasan awal layanan.'
        }
      />
      <article className="container legal-prose">
        <p className="small-note">Terakhir diperbarui: 15 Oktober 2026.</p>
        {privacy ? (
          <>
            <h2>Informasi yang Anda berikan</h2>
            <p>
              Formulir konsultasi meminta nama, organisasi jika diisi, kebutuhan, gambaran anggaran,
              dan cerita proyek. Isinya digunakan untuk menanggapi pertanyaan serta mempersiapkan
              pembahasan kebutuhan.
            </p>
            <h2>Pengiriman melalui WhatsApp dan email</h2>
            <p>
              Formulir menyiapkan pesan dan membuka WhatsApp. Situs ini tidak menyimpan isi formulir
              di database. Pesan baru dikirim setelah Anda mengirimkannya di WhatsApp. Jika Anda
              menghubungi email, pesan diproses melalui penyedia email yang digunakan.
            </p>
            <p>
              Informasi yang dikirim melalui WhatsApp atau email juga mengikuti ketentuan layanan
              penyedianya. Hindari mengirim kata sandi, kredensial, identitas sensitif, atau data
              pihak lain yang tidak diperlukan untuk konsultasi awal.
            </p>
            <h2>Cookie, analitik, dan log teknis</h2>
            <p>
              Versi situs ini tidak memasang cookie analitik atau pelacak pemasaran. Penyedia
              hosting dapat memproses log teknis seperti alamat IP, waktu akses, dan informasi
              permintaan untuk mengoperasikan serta menjaga layanan. Font dan aset tampilan utama
              disajikan dari situs ini sendiri.
            </p>
            <h2>Penggunaan dan penyimpanan komunikasi</h2>
            <p>
              Komunikasi yang Anda kirim dapat tersimpan di akun WhatsApp atau email penerima untuk
              tindak lanjut konsultasi dan administrasi proyek. Informasi tidak digunakan untuk
              membuat klaim publik tentang proyek atau organisasi Anda tanpa persetujuan.
            </p>
            <h2>Permintaan terkait informasi Anda</h2>
            <p>
              Untuk meminta koreksi atau penghapusan komunikasi yang masih berada dalam pengelolaan
              Sliva, hubungi <a href={`mailto:${site.email}`}>{site.email}</a>. Kami akan meninjau
              permintaan dengan mempertimbangkan kewajiban penyimpanan yang relevan.
            </p>
            <h2>Perubahan layanan</h2>
            <p>
              Jika mekanisme formulir, penyimpanan, atau analitik berubah, kebijakan ini perlu
              diperbarui agar sesuai dengan praktik yang digunakan.
            </p>
          </>
        ) : (
          <>
            <h2>Informasi layanan</h2>
            <p>
              Situs ini memperkenalkan layanan, produk, dan pendekatan kerja {site.legalName}.
              Informasi tersebut menjadi bahan diskusi awal. Fitur, biaya, jadwal, dukungan, serta
              hasil pekerjaan baru mengikat setelah dinyatakan dalam kesepakatan proyek.
            </p>
            <h2>Ilustrasi dan konsep solusi</h2>
            <p>
              Halaman solusi menggunakan ilustrasi konsep dan data contoh untuk membantu memahami
              kemungkinan penerapan teknologi. Ilustrasi tersebut bukan pernyataan bahwa proyek
              tertentu telah diselesaikan untuk klien. Informasi produk terbaru mengikuti kanal
              produk terkait.
            </p>
            <h2>Penawaran dan biaya</h2>
            <p>
              Gambaran pendekatan pada halaman biaya tidak merupakan daftar harga tetap. Penawaran
              disusun berdasarkan ruang lingkup, ketergantungan, kebutuhan pengujian, dan layanan
              pihak ketiga. Perubahan kebutuhan dapat memerlukan penyesuaian kesepakatan.
            </p>
            <h2>Penggunaan konten</h2>
            <p>
              Konten situs dapat digunakan sebagai referensi umum dengan atribusi yang sesuai. Logo,
              identitas merek, desain, dan materi milik pihak ketiga mengikuti hak serta lisensi
              masing-masing. Penggunaan tidak boleh menimbulkan kesan afiliasi tanpa izin.
            </p>
            <h2>Tautan pihak ketiga</h2>
            <p>
              Tautan ke WhatsApp, situs produk, atau layanan lain membuka layanan dengan kebijakan
              dan ketersediaannya sendiri. Pastikan tujuan tautan sesuai sebelum membagikan
              informasi.
            </p>
            <h2>Panduan teknis</h2>
            <p>
              Artikel merupakan informasi umum untuk membantu pembahasan kebutuhan, bukan
              spesifikasi final atau jaminan hasil proyek. Rekomendasi implementasi perlu
              menyesuaikan kondisi sistem dan organisasi Anda.
            </p>
            <h2>Hubungi kami</h2>
            <p>
              Pertanyaan terkait situs dan layanan dapat dikirim ke{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> atau WhatsApp {site.phone}.
            </p>
          </>
        )}
      </article>
    </>
  );
}
export function NotFound() {
  return (
    <section className="not-found container">
      <span>404 / A DIFFERENT POSSIBILITY</span>
      <h1>
        Sepertinya kita
        <br />
        perlu arah baru.
      </h1>
      <p>Halaman ini tidak ditemukan. Ide Anda tetap bisa kita lanjutkan.</p>
      <div>
        <Button href="/">Kembali ke beranda</Button>
        <Button href="/kontak" secondary>
          Hubungi Sliva
        </Button>
      </div>
    </section>
  );
}
