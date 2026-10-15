import { useState } from 'react';
import { services, type Service } from '../data/services';
import { industries, type Industry } from '../data/industries';
import { articles, type Article } from '../data/articles';
import { solutions } from '../data/solutions';
import { site, whatsappUrl } from '../data/site';
import { Icon } from '../components/Icons';
import { ArticleArt, ProductPreview, RibbonArt } from '../components/Visuals';
import {
  Breadcrumb,
  Button,
  Eyebrow,
  FAQList,
  PageHero,
  Process,
  SectionHeading,
  ServiceCard,
} from '../components/Shared';

export function Services() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Layanan' }]} />
      <PageHero
        eyebrow="ONE PARTNER. MANY POSSIBILITIES."
        title={
          <>
            Dari ide pertama,
            <br />
            sampai <span className="text-blue">langkah berikutnya.</span>
          </>
        }
        description="Website, aplikasi, AI, hingga infrastruktur. Kami membantu kebutuhan teknologi Anda dengan pendekatan yang menyeluruh dan anggaran yang masuk akal."
      />
      <section className="section">
        <div className="container service-grid">
          {services.map((x, i) => (
            <ServiceCard service={x} index={i} key={x.slug} />
          ))}
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="LET’S FIND THE RIGHT START"
            title="Belum tahu harus mulai dari mana?"
            text="Tidak perlu datang dengan spesifikasi lengkap. Ceritakan masalahnya, kita petakan kemungkinan solusinya bersama."
          />
          <Button
            href={whatsappUrl(
              'Halo Sliva, saya ingin dibantu memetakan kebutuhan teknologi untuk usaha / organisasi saya.'
            )}
            external
          >
            Diskusikan kebutuhan Anda
          </Button>
        </div>
      </section>
    </>
  );
}
export function ServiceDetail({ service: x }: { service: Service }) {
  return (
    <>
      <Breadcrumb items={[{ name: 'Layanan', href: '/layanan' }, { name: x.name }]} />
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <Eyebrow>{x.name}</Eyebrow>
            <h1>{x.headline}</h1>
            <p>{x.description}</p>
            <div className="hero-buttons">
              <Button
                href={whatsappUrl(`Halo Sliva, saya ingin konsultasi layanan ${x.name}.`)}
                external
              >
                Diskusikan proyek Anda
              </Button>
              <a className="text-link" href="/biaya">
                Tentang biaya <Icon name="diagonal" size={16} />
              </a>
            </div>
          </div>
          <div className="service-emblem" aria-hidden="true">
            <div className="emblem-orbit" />
            <div className="emblem-tile">
              <Icon name={x.icon} size={110} />
            </div>
            <span>IDEA → DESIGN → BUILD → GROW</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>BUILT AROUND YOUR NEEDS</Eyebrow>
            <h2>
              Teknologi yang punya
              <br />
              <span className="text-blue">tujuan jelas.</span>
            </h2>
            <p className="body-large">{x.intro}</p>
            <p>{x.audience}</p>
          </div>
          <aside className="scope-card">
            <Icon name={x.icon} size={30} />
            <h3>Yang bisa kami bantu</h3>
            <ul className="check-list">
              {x.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={17} />
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>THE WAY WE BUILD</Eyebrow>
            <h2>
              Proses yang terbuka,
              <br />
              hasil yang bisa ditinjau.
            </h2>
            <p>{x.approach}</p>
            <a className="text-link" href="/biaya">
              Lihat alur kerja & pembiayaan <Icon name="diagonal" size={17} />
            </a>
          </div>
          <div>
            <h3>Hasil kerja yang direncanakan</h3>
            <div className="deliverable-list">
              {x.deliverables.map((f, i) => (
                <div key={f}>
                  <span>0{i + 1}</span>
                  <p>{f}</p>
                  <Icon name="check" size={18} />
                </div>
              ))}
            </div>
            <p className="small-note">
              Cakupan final, jadwal, dan ketentuan serah terima tertulis dalam kesepakatan proyek.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <div>
            <Eyebrow>A FEW MORE DETAILS</Eyebrow>
            <h2>
              Pertanyaan tentang
              <br />
              {x.name.toLowerCase()}.
            </h2>
          </div>
          <FAQList items={x.faq} />
        </div>
      </section>
      <section className="section related-section">
        <div className="container">
          <SectionHeading
            eyebrow="CONNECTED POSSIBILITIES"
            title="Lengkapi langkah digital Anda."
          />
          <div className="service-grid">
            {services
              .filter((s) => s.slug !== x.slug)
              .slice(0, 3)
              .map((s, i) => (
                <ServiceCard service={s} index={i} key={s.slug} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function Industries() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Industri' }]} />
      <PageHero
        eyebrow="TECHNOLOGY FOR EVERY AMBITION"
        title={
          <>
            Beragam sektor.
            <br />
            <span className="text-blue">Satu semangat untuk maju.</span>
          </>
        }
        description="Pemerintah, swasta, UMKM, hingga inisiatif baru. Kami terbuka membantu kebutuhan teknologi lintas bidang, dengan ruang lingkup yang disusun sesuai konteks Anda."
      />
      <section className="section">
        <div className="container industry-grid">
          {industries.map((x) => (
            <a className="industry-card" href={`/industri/${x.slug}`} key={x.slug}>
              <Icon name={x.icon} size={30} />
              <h2>{x.name}</h2>
              <p>{x.description}</p>
              <span className="text-link">
                Eksplorasi solusi <Icon name="diagonal" size={17} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="YOUR CHALLENGE IS WELCOME"
            title="Sektor Anda belum tercantum?"
            text="Kebutuhan teknologi tidak berhenti pada daftar industri. Ceritakan konteks Anda; kami akan menilai pendekatan dan kelayakan teknisnya bersama."
          />
          <Button href="/kontak">Ceritakan kebutuhan Anda</Button>
        </div>
      </section>
    </>
  );
}
export function IndustryDetail({ industry: x }: { industry: Industry }) {
  return (
    <>
      <Breadcrumb items={[{ name: 'Industri', href: '/industri' }, { name: x.name }]} />
      <PageHero
        eyebrow={`SOLUSI UNTUK ${x.name.toUpperCase()}`}
        title={<>{x.tagline}</>}
        description={x.description}
      >
        <Button
          href={whatsappUrl(
            `Halo Sliva, saya ingin membahas kebutuhan digital di sektor ${x.name}.`
          )}
          external
        >
          Diskusikan kebutuhan Anda
        </Button>
      </PageHero>
      <section className="section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>UNDERSTANDING YOUR CONTEXT</Eyebrow>
            <h2>
              Mulai dari tantangan
              <br />
              <span className="text-blue">di lapangan.</span>
            </h2>
            <p className="body-large">{x.challenge}</p>
            <h3>Hal yang kita pertimbangkan</h3>
            <p>{x.considerations}</p>
          </div>
          <aside className="scope-card">
            <Icon name={x.icon} size={32} />
            <h3>Gambaran kebutuhan digital</h3>
            <ul className="check-list">
              {x.solutions.map((f) => (
                <li key={f}>
                  <Icon name="check" size={17} />
                  {f}
                </li>
              ))}
            </ul>
            <p className="small-note">
              Fitur dan integrasi disesuaikan setelah discovery. Implementasi dapat dilakukan
              bertahap.
            </p>
          </aside>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="A CLEAR WAY FORWARD"
            title="Satu proses, disesuaikan untuk Anda."
          />
          <Process />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="THE TOOLS TO GET THERE"
            title="Layanan yang saling melengkapi."
          />
          <div className="service-grid">
            {x.serviceSlugs.map((slug, i) => (
              <ServiceCard key={slug} service={services.find((s) => s.slug === slug)!} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function Solutions() {
  const [filter, setFilter] = useState('Semua');
  const filtered = solutions.filter((x) => filter === 'Semua' || x.category === filter);
  return (
    <>
      <Breadcrumb items={[{ name: 'Solusi' }]} />
      <PageHero
        eyebrow="A LOOK AT WHAT’S POSSIBLE"
        title={
          <>
            Bayangkan potensinya.
            <br />
            <span className="text-blue">Mari bangun solusinya.</span>
          </>
        }
        description="Eksplorasi arah solusi untuk layanan publik, operasional bisnis, dan produktivitas tim. Semua dimulai dari masalah yang layak diselesaikan."
      />
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Filter solusi">
            {['Semua', ...solutions.map((x) => x.category)].map((f) => (
              <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f === 'Semua' ? f : f.toLowerCase()}
              </button>
            ))}
          </div>
          <div className="solutions-grid" aria-live="polite">
            {filtered.map((x) => (
              <a href={`/solusi/${x.slug}`} className="solution-card" key={x.slug}>
                <ProductPreview theme={x.theme} />
                <div className="solution-info">
                  <span className="tiny-label">
                    {x.category}
                    <span>CONCEPT</span>
                  </span>
                  <div>
                    <h2>{x.name}</h2>
                    <span className="circle-arrow">
                      <Icon name="diagonal" size={18} />
                    </span>
                  </div>
                  <p>{x.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="notice">
            <Icon name="pen" size={23} />
            <p>
              Solusi pada halaman ini merupakan <strong>konsep dan ilustrasi</strong>, bukan klaim
              proyek klien yang telah dikerjakan. Angka dan isi antarmuka adalah data contoh. Untuk
              produk Sliva, kunjungi <a href="/produk">halaman produk</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function SolutionDetail({ solution: x }: { solution: (typeof solutions)[number] }) {
  return (
    <>
      <Breadcrumb items={[{ name: 'Solusi', href: '/solusi' }, { name: x.name }]} />
      <PageHero
        eyebrow={`${x.category} / KONSEP SOLUSI`}
        title={x.name}
        description={x.description}
      />
      <div className="container solution-showcase">
        <ProductPreview theme={x.theme} />
        <p className="concept-note">
          Ilustrasi antarmuka dengan data contoh. Bukan dokumentasi proyek klien.
        </p>
      </div>
      <section className="section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>THE PROBLEM WORTH SOLVING</Eyebrow>
            <h2>
              Berangkat dari
              <br />
              <span className="text-blue">kebutuhan nyata.</span>
            </h2>
            <p className="body-large">{x.problem}</p>
            <h3>Gambaran fitur</h3>
            <ul className="check-list">
              {x.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={17} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="scope-card">
            <h3>Alur yang bisa kita bangun</h3>
            <div className="deliverable-list">
              {x.flow.map((f, i) => (
                <div key={f}>
                  <span>0{i + 1}</span>
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <p className="small-note">
              Kebutuhan aktual, akses data, dan integrasi ditentukan melalui discovery.
            </p>
            <a className="text-link" href={`/layanan/${x.service}`}>
              Layanan terkait <Icon name="diagonal" size={16} />
            </a>
            <a className="text-link" href={`/industri/${x.industry}`}>
              Konteks industri <Icon name="diagonal" size={16} />
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
export function About() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Tentang Sliva' }]} />
      <section className="about-hero">
        <div className="container detail-hero-grid">
          <div>
            <Eyebrow>CURIOUS MINDS. PURPOSEFUL WORK.</Eyebrow>
            <h1>
              Kami percaya
              <br />
              ide baik layak
              <br />
              <span className="text-blue">diwujudkan.</span>
            </h1>
            <p>
              Sliva hadir untuk mempertemukan kreativitas, teknologi, dan kebutuhan nyata. Kami
              ingin membuat langkah digital terasa lebih dekat bagi semua skala organisasi.
            </p>
          </div>
          <RibbonArt small />
        </div>
      </section>
      <section className="section">
        <div className="container intro-grid">
          <Eyebrow>THIS IS SLIVA</Eyebrow>
          <div>
            <h2>
              Partner berpikir.
              <br />
              <span className="text-muted">Partner membangun.</span>
            </h2>
            <p className="body-large">
              {site.legalName} membantu bisnis dan organisasi merancang serta mengembangkan solusi
              digital: dari website dan aplikasi, hingga AI, integrasi, data, dan infrastruktur.
            </p>
            <p>
              Kami terbuka untuk bekerja bersama instansi pemerintah, perusahaan swasta, BUMN/BUMD,
              startup, yayasan, dan UMKM. Setiap kebutuhan punya konteks berbeda. Karena itu, kami
              mendengarkan lebih dulu sebelum memilih pendekatan teknologi.
            </p>
            <p>
              Bagi kami, harga yang terjangkau berarti anggaran digunakan untuk hal yang benar-benar
              dibutuhkan. Ruang lingkup yang jelas dan pengembangan bertahap membantu Anda mengambil
              keputusan dengan lebih tenang.
            </p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT MATTERS TO US"
            title="Hal yang kami bawa ke setiap kolaborasi."
          />
          <div className="value-grid">
            {[
              {
                icon: 'message',
                title: 'Dengarkan dulu.',
                text: 'Pahami masalah dan orang yang menghadapinya sebelum memilih solusi.',
              },
              {
                icon: 'pen',
                title: 'Pikirkan dengan berani.',
                text: 'Temukan pendekatan kreatif yang tetap bisa dibangun dan digunakan.',
              },
              {
                icon: 'shield',
                title: 'Kerjakan dengan terbuka.',
                text: 'Jelaskan scope, biaya, risiko, serta progres dengan bahasa yang jelas.',
              },
              {
                icon: 'rocket',
                title: 'Tumbuh bersama.',
                text: 'Siapkan dokumentasi dan langkah berikutnya agar hasil kerja bisa berlanjut.',
              },
            ].map((x) => (
              <div key={x.title}>
                <Icon name={x.icon} size={32} />
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="AN IDEA WITH A PURPOSE"
            title="Teknologi juga tumbuh dari kepedulian."
            text="Slivadoc merupakan bagian dari ekosistem produk Sliva di bidang kesehatan hewan. Semangat yang sama kami bawa saat membantu ide dan kebutuhan Anda."
          />
          <Button href="/produk">Kenali Slivadoc</Button>
        </div>
      </section>
    </>
  );
}
export function Insights() {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'Website', 'Bisnis & UMKM', 'Teknologi'];
  const visible = articles
    .map((a, i) => ({ ...a, index: i }))
    .filter(
      (a) =>
        filter === 'Semua' ||
        (filter === 'Website'
          ? [1, 5].includes(a.index)
          : filter === 'Bisnis & UMKM'
            ? [0, 2].includes(a.index)
            : [3, 4].includes(a.index))
    );
  return (
    <>
      <Breadcrumb items={[{ name: 'Insight' }]} />
      <PageHero
        eyebrow="THOUGHTS FOR YOUR NEXT MOVE"
        title={
          <>
            Ide, panduan,
            <br />
            dan <span className="text-blue">sudut pandang baru.</span>
          </>
        }
        description="Bekal untuk memahami teknologi, menentukan prioritas, dan mengambil langkah digital yang lebih terarah."
      />
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Filter artikel">
            {categories.map((f) => (
              <button aria-pressed={filter === f} onClick={() => setFilter(f)} key={f}>
                {f}
              </button>
            ))}
          </div>
          <div className="article-grid" aria-live="polite">
            {visible.map((x) => (
              <a className="article-card" href={`/insight/${x.slug}`} key={x.slug}>
                <ArticleArt theme={x.theme} index={x.index} />
                <div className="article-meta">
                  <span>{x.category}</span>
                  <span>{x.readTime} baca</span>
                </div>
                <h2>{x.title}</h2>
                <p>{x.excerpt}</p>
                <span className="article-link">
                  Baca insight <Icon name="diagonal" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function ArticleDetail({ article: x }: { article: Article }) {
  const index = articles.indexOf(x);
  return (
    <>
      <Breadcrumb items={[{ name: 'Insight', href: '/insight' }, { name: x.title }]} />
      <header className="article-header container">
        <Eyebrow>{x.category}</Eyebrow>
        <h1>{x.title}</h1>
        <p>{x.excerpt}</p>
        <div className="byline">
          <img src="/brand-mark.webp" width="32" height="32" alt="" />
          <span>
            Tim Sliva<span>Panduan praktis · {x.readTime} baca</span>
          </span>
        </div>
      </header>
      <div className="container article-cover">
        <ArticleArt theme={x.theme} index={index} />
      </div>
      <div className="container article-layout">
        <aside className="article-toc">
          <span className="footer-label">DALAM ARTIKEL INI</span>
          <nav aria-label="Daftar isi artikel">
            {x.sections.map((s, i) => (
              <a href={`#bagian-${i + 1}`} key={s.heading}>
                {s.heading}
              </a>
            ))}
          </nav>
          <a className="text-link" href={`/layanan/${x.service}`}>
            Layanan terkait <Icon name="diagonal" size={15} />
          </a>
        </aside>
        <article className="article-prose">
          {x.sections.map((s, i) => (
            <section id={`bagian-${i + 1}`} key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {x.slug === 'website-cepat-dan-seo' && (
            <p className="article-source">
              Referensi:{' '}
              <a
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Search Central — SEO Starter Guide
              </a>
              .
            </p>
          )}
          <div className="article-end">
            <Icon name="message" size={28} />
            <h3>Punya kebutuhan yang serupa?</h3>
            <p>Ceritakan konteks Anda. Kita cari langkah awal yang masuk akal.</p>
            <Button
              href={whatsappUrl(
                `Halo Sliva, saya membaca artikel ${x.title} dan ingin berdiskusi.`
              )}
              external
            >
              Diskusi dengan Sliva
            </Button>
          </div>
        </article>
      </div>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="KEEP EXPLORING"
            title="Sudut pandang berikutnya."
            href="/insight"
            linkText="Semua insight"
          />
          <div className="article-grid">
            {articles
              .filter((a) => a.slug !== x.slug)
              .slice(0, 3)
              .map((a) => (
                <a className="article-card" href={`/insight/${a.slug}`} key={a.slug}>
                  <ArticleArt theme={a.theme} index={articles.indexOf(a)} />
                  <div className="article-meta">
                    <span>{a.category}</span>
                    <span>{a.readTime} baca</span>
                  </div>
                  <h3>{a.title}</h3>
                  <span className="article-link">
                    Baca insight <Icon name="diagonal" size={16} />
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function Pricing() {
  const packages = [
    {
      tag: 'START SMALL',
      title: 'Mulai ramping.',
      text: 'Untuk UMKM dan kebutuhan awal yang fokus pada hasil paling penting.',
      features: [
        'Website profil atau landing page',
        'Konten dan alur konsultasi yang jelas',
        'Prioritas fitur sesuai anggaran',
        'Fondasi untuk pengembangan berikutnya',
      ],
    },
    {
      tag: 'BUILD WHAT’S NEXT',
      title: 'Bangun bisnis.',
      text: 'Untuk bisnis yang membutuhkan aplikasi, integrasi, dan operasional yang lebih rapi.',
      features: [
        'Aplikasi atau software custom',
        'Dashboard dan alur kerja tim',
        'Integrasi sesuai kebutuhan',
        'Demo serta pengujian bertahap',
      ],
    },
    {
      tag: 'GO FURTHER',
      title: 'Transformasi lebih luas.',
      text: 'Untuk organisasi dengan banyak peran, data, dan ketergantungan sistem.',
      features: [
        'Discovery lintas pemangku kepentingan',
        'Arsitektur dan roadmap implementasi',
        'Migrasi serta integrasi terencana',
        'Dokumentasi dan serah terima tim',
      ],
    },
  ];
  return (
    <>
      <Breadcrumb items={[{ name: 'Biaya & cara kerja' }]} />
      <PageHero
        eyebrow="RIGHT-SIZED FOR YOUR AMBITION"
        title={
          <>
            Investasi yang terarah.
            <br />
            <span className="text-blue">Anggaran yang masuk akal.</span>
          </>
        }
        description="Mulai dari kebutuhan paling penting. Kami menyusun ruang lingkup dan penawaran setelah memahami tujuan, fitur, serta konteks proyek Anda."
      />
      <section className="section">
        <div className="container pricing-grid">
          {packages.map((x, i) => (
            <div className={`pricing-card ${i === 1 ? 'pricing-featured' : ''}`} key={x.title}>
              <Eyebrow>{x.tag}</Eyebrow>
              <h2>{x.title}</h2>
              <p>{x.text}</p>
              <div className="pricing-amount">
                Sesuai kebutuhan<span>Penawaran setelah diskusi awal</span>
              </div>
              <ul className="check-list">
                {x.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={17} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappUrl(
                  `Halo Sliva, saya tertarik pendekatan ${x.title} Mohon bantu susun scope dan estimasi biaya.`
                )}
                secondary={i !== 1}
                external
              >
                Diskusikan anggaran
              </Button>
            </div>
          ))}
        </div>
        <div className="container">
          <p className="small-note pricing-note">
            Pendekatan di atas adalah gambaran lingkup, bukan paket dengan harga tetap. Biaya
            layanan pihak ketiga, infrastruktur, revisi di luar scope, dan maintenance dijelaskan
            dalam penawaran.
          </p>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="NO GUESSWORK. JUST A CLEAR PROCESS."
            title="Anda tahu langkahnya sejak awal."
          />
          <Process />
        </div>
      </section>
      <section className="section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>WHAT SHAPES THE ESTIMATE</Eyebrow>
            <h2>Apa yang memengaruhi biaya?</h2>
            <p>
              Proyek kecil bisa tetap berdampak jika prioritasnya tepat. Kami membantu
              menyeimbangkan kebutuhan, waktu, dan biaya dengan ruang lingkup yang dapat ditinjau.
            </p>
          </div>
          <ul className="check-list scope-card">
            {[
              'Jumlah fitur, halaman, dan peran pengguna',
              'Desain khusus dan kompleksitas alur',
              'Integrasi, data lama, serta migrasi',
              'Platform, pengujian, dan kebutuhan keamanan',
              'Hosting, lisensi, dan biaya operasional',
              'Dokumentasi, pelatihan, serta dukungan',
            ].map((f) => (
              <li key={f}>
                <Icon name="check" size={17} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
export function Products() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Produk Sliva' }]} />
      <PageHero
        eyebrow="IDEAS WE BELIEVE IN"
        title={
          <>
            Produk dengan tujuan.
            <br />
            <span className="text-blue">Dibangun dengan kepedulian.</span>
          </>
        }
        description="Selain membantu kebutuhan digital Anda, Sliva mengembangkan ekosistem produk yang berangkat dari tantangan nyata."
      />
      <section className="section">
        <div className="container product-feature">
          <div className="slivadoc-art" aria-hidden="true">
            <div className="pet-orbit" />
            <div className="pet-card">
              <Icon name="heart" size={72} />
              <span>
                slivadoc<span>.</span>
              </span>
              <small>Animal health, connected.</small>
              <div>
                <Icon name="database" />
                <Icon name="sparkles" />
                <Icon name="heart" />
              </div>
            </div>
            <span className="pet-cross">+</span>
          </div>
          <div>
            <Eyebrow>SLIVADOC / ANIMAL HEALTH</Eyebrow>
            <h2>
              Kesehatan hewan,
              <br />
              lebih terhubung.
            </h2>
            <p>
              Slivadoc adalah ekosistem digital kesehatan hewan dari Sliva. Arah pengembangannya
              mencakup pencatatan layanan, pengelolaan praktik veterinary, dan pemanfaatan teknologi
              untuk mendukung perawatan hewan.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={17} />
                Pencatatan dan pengelolaan informasi layanan
              </li>
              <li>
                <Icon name="check" size={17} />
                Ekosistem untuk kebutuhan veterinary
              </li>
              <li>
                <Icon name="check" size={17} />
                Eksplorasi AI sebagai alat bantu profesional
              </li>
            </ul>
            <Button href="https://slivadoc.com/" external>
              Jelajahi Slivadoc
            </Button>
            <p className="small-note">
              Ketersediaan fitur dan informasi produk terbaru mengikuti situs Slivadoc. Teknologi
              pendukung tidak menggantikan penilaian dokter hewan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function Partnership() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Kemitraan' }]} />
      <PageHero
        eyebrow="GOOD IDEAS GROW TOGETHER"
        title={
          <>
            Punya peluang?
            <br />
            <span className="text-blue">Mari bergerak bersama.</span>
          </>
        }
        description="Kami terbuka untuk kolaborasi teknologi, implementasi proyek, pendampingan tim, dan pengembangan produk bersama."
      />
      <section className="section">
        <div className="container industry-grid">
          {[
            {
              icon: 'building',
              name: 'Partner bisnis & agency',
              text: 'Lengkapi kebutuhan teknis proyek Anda melalui kerja sama dengan scope dan peran yang jelas.',
            },
            {
              icon: 'landmark',
              name: 'Instansi & organisasi',
              text: 'Diskusikan kebutuhan sistem, pendampingan implementasi, serta kolaborasi sesuai persyaratan organisasi.',
            },
            {
              icon: 'rocket',
              name: 'Pemilik ide & startup',
              text: 'Mulai dari discovery dan validasi, lalu tentukan bentuk pengembangan produk yang paling tepat.',
            },
          ].map((x) => (
            <div className="industry-card" key={x.name}>
              <Icon name={x.icon} size={32} />
              <h2>{x.name}</h2>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section soft-section">
        <div className="container detail-body-grid">
          <div>
            <Eyebrow>LET’S START WITH A CONVERSATION</Eyebrow>
            <h2>
              Bentuk kerja sama
              <br />
              yang saling dipahami.
            </h2>
            <p>
              Kirim gambaran proyek, peran yang dibutuhkan, target waktu, dan mekanisme kolaborasi
              yang Anda bayangkan. Kami akan meninjau kecocokan serta langkah lanjutnya bersama.
            </p>
            <Button
              href={whatsappUrl('Halo Sliva, saya ingin membahas peluang kemitraan / kolaborasi.')}
              external
            >
              Diskusikan kolaborasi
            </Button>
          </div>
          <div className="scope-card">
            <h3>Disepakati sebelum bekerja</h3>
            <ul className="check-list">
              {[
                'Ruang lingkup dan pembagian peran',
                'Kerahasiaan serta izin penggunaan informasi',
                'Jadwal, biaya, dan mekanisme pembayaran',
                'Hak kekayaan intelektual dan lisensi',
                'Komunikasi, pengujian, serta serah terima',
              ].map((f) => (
                <li key={f}>
                  <Icon name="check" size={17} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'FAQ' }]} />
      <PageHero
        eyebrow="ANSWERS TO GET YOU STARTED"
        title={
          <>
            Sedikit kejelasan.
            <br />
            <span className="text-blue">Langkah yang lebih yakin.</span>
          </>
        }
        description="Pertanyaan yang sering muncul sebelum memulai pengembangan website, aplikasi, dan solusi digital bersama Sliva."
      />
      <section className="section">
        <div className="container faq-page">
          <FAQList />
          <div className="notice">
            <Icon name="message" size={25} />
            <p>
              Pertanyaan Anda belum terjawab? <a href="/kontak">Hubungi Sliva</a> untuk membahas
              konteks proyek secara langsung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
