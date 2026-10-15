import { useState } from 'react';
import { services } from '../data/services';
import { site, whatsappUrl } from '../data/site';
import { Icon } from '../components/Icons';
import { Breadcrumb, Eyebrow } from '../components/Shared';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    service: 'Belum yakin, ingin diskusi dulu',
    budget: 'Belum ditentukan',
    message: '',
  });
  const text = `Halo Sliva, saya ingin konsultasi proyek.\n\nNama: ${form.name}\nUsaha / organisasi: ${form.organization || '-'}\nKebutuhan: ${form.service}\nAnggaran: ${form.budget}\n\nCerita singkat:\n${form.message}`;
  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));
  return (
    <>
      <Breadcrumb items={[{ name: 'Kontak' }]} />
      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <Eyebrow>EVERY GREAT THING STARTS WITH HELLO</Eyebrow>
            <h1>
              Mulai dari
              <br />
              <span className="text-blue">cerita Anda.</span>
            </h1>
            <p className="body-large">
              Ide yang masih mentah, tantangan yang belum terjawab, atau rencana yang siap dibangun.
              Kami siap mendengarkan.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="channel-icon">
                <Icon name="message" size={25} />
              </span>
              <span>
                <small>WHATSAPP</small>
                <b>{site.phone}</b>
                <span>Ngobrol langsung dengan Sliva</span>
              </span>
              <Icon name="diagonal" size={23} />
            </a>
            <a href={`mailto:${site.email}`} className="contact-channel">
              <span className="channel-icon">
                <Icon name="mail" size={25} />
              </span>
              <span>
                <small>EMAIL</small>
                <b>{site.email}</b>
                <span>Kirim brief atau gambaran kebutuhan</span>
              </span>
              <Icon name="diagonal" size={23} />
            </a>
            <div className="contact-note">
              <Icon name="globe" size={23} />
              <span>
                Di mana pun Anda berada,
                <br />
                <b>kita bisa membangun bersama.</b>
                <small>Kolaborasi secara remote di seluruh Indonesia.</small>
              </span>
            </div>
            <div className="contact-quote">
              “Setiap kemungkinan besar,
              <br />
              berawal dari satu percakapan.”<span aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="contact-form-card">
            <div className="form-heading">
              <span>LET’S BUILD SOMETHING</span>
              <Icon name="diagonal" size={24} />
            </div>
            <h2>Ceritakan idemu.</h2>
            <p>Isi singkat, lalu lanjutkan percakapan di WhatsApp.</p>
            <form
              action={`https://wa.me/${site.whatsapp}`}
              method="get"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input type="hidden" name="text" value={text} />
              <div className="form-row">
                <div>
                  <label htmlFor="contact-name">
                    Nama Anda <span>*</span>
                  </label>
                  <input
                    id="contact-name"
                    autoComplete="name"
                    placeholder="Nama panggilan juga boleh"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-org">Usaha / organisasi</label>
                  <input
                    id="contact-org"
                    autoComplete="organization"
                    placeholder="Nama bisnis atau instansi"
                    value={form.organization}
                    onChange={(e) => update('organization', e.target.value)}
                    maxLength={150}
                  />
                </div>
              </div>
              <label htmlFor="contact-service">Apa yang ingin dibangun?</label>
              <select
                id="contact-service"
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option>Belum yakin, ingin diskusi dulu</option>
                {services.map((s) => (
                  <option key={s.slug}>{s.name}</option>
                ))}
                <option>Kemitraan / kolaborasi</option>
                <option>Kebutuhan teknologi lainnya</option>
              </select>
              <label htmlFor="contact-budget">Gambaran anggaran</label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={(e) => update('budget', e.target.value)}
              >
                <option>Belum ditentukan</option>
                <option>Di bawah Rp 5 juta</option>
                <option>Rp 5–15 juta</option>
                <option>Rp 15–50 juta</option>
                <option>Rp 50–100 juta</option>
                <option>Di atas Rp 100 juta</option>
              </select>
              <p className="field-note">Untuk membantu menentukan pendekatan, bukan harga paket.</p>
              <label htmlFor="contact-message">
                Ceritakan sedikit tentang kebutuhan Anda <span>*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Masalah yang ingin diselesaikan, fitur utama, atau target yang ingin dicapai..."
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                minLength={10}
                maxLength={3000}
                required
              />
              <label className="consent">
                <input type="checkbox" required />
                <span>
                  Saya setuju informasi ini digunakan untuk menanggapi konsultasi sesuai{' '}
                  <a href="/privasi">kebijakan privasi</a>.
                </span>
              </label>
              <button type="submit" className="button button-primary form-submit">
                Lanjutkan ke WhatsApp <Icon name="message" size={20} />
              </button>
              <p className="form-disclaimer">
                WhatsApp akan terbuka dengan pesan yang sudah disiapkan. Pesan baru terkirim setelah
                Anda menekan Kirim di WhatsApp.
              </p>
            </form>
            <noscript>
              <p>
                Untuk menyiapkan pesan dari formulir, aktifkan JavaScript atau hubungi{' '}
                <a href={whatsappUrl()}>WhatsApp Sliva secara langsung</a>.
              </p>
            </noscript>
          </div>
        </div>
      </section>
    </>
  );
}
