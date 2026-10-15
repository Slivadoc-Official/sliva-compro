import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

// Keep the supplied logo; trim only its surrounding white margin for usable sizes.
const logo = await sharp('public/logo-sliva.png')
  .trim({ background: '#ffffff', threshold: 20 })
  .toBuffer();
await sharp(logo)
  .resize(96, 96, { fit: 'contain', background: '#ffffff' })
  .webp({ quality: 85 })
  .toFile('public/brand-mark.webp');
for (const [file, size, pad] of [
  ['favicon.png', 48, 5],
  ['apple-touch-icon.png', 180, 24],
  ['brand-logo.png', 512, 60],
]) {
  const inner = await sharp(logo)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: '#ffffff' })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } })
    .composite([{ input: inner, left: pad, top: pad }])
    .png()
    .toFile(`public/${file}`);
}
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#fafcfd"/><stop offset="1" stop-color="#dff3fc"/></linearGradient><linearGradient id="blue" x2=".8" y2="1"><stop stop-color="#87e6f7"/><stop offset=".5" stop-color="#159bd0"/><stop offset="1" stop-color="#0862af"/></linearGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><g stroke="#bfdce9" opacity=".35"><path d="M700 0V630M780 0V630M860 0V630M940 0V630M1020 0V630M1100 0V630M600 70H1200M600 150H1200M600 230H1200M600 310H1200M600 390H1200M600 470H1200M600 550H1200"/></g><circle cx="965" cy="325" r="185" fill="none" stroke="url(#blue)" stroke-width="90"/><circle cx="965" cy="325" r="250" fill="none" stroke="#a8d6e9"/><text x="75" y="103" font-family="sans-serif" font-size="45" font-weight="700" fill="#172b3e">sliva<tspan fill="#087eb8">.</tspan></text><text x="77" y="168" font-family="sans-serif" font-size="13" letter-spacing="4" fill="#547184">YOUR NEXT DIGITAL PARTNER</text><text x="68" y="300" font-family="sans-serif" font-weight="700" font-size="99" letter-spacing="-5" fill="#172b3e">Ide besar.</text><text x="68" y="407" font-family="sans-serif" font-weight="700" font-size="99" letter-spacing="-5" fill="#087eb8">Jadi nyata.</text><path d="M77 432Q285 414 505 432" fill="none" stroke="#3fb8df" stroke-width="5" stroke-linecap="round"/><text x="76" y="495" font-family="sans-serif" font-size="21" fill="#627381">Website · Aplikasi · Software · AI · Cloud</text><text x="76" y="553" font-family="sans-serif" font-size="15" fill="#3e768f">Untuk pemerintah, perusahaan, startup, dan UMKM.</text><text x="1045" y="580" font-family="sans-serif" font-size="18" fill="#1d6d96">sliva.id</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-sliva.png');
await writeFile(
  'public/site.webmanifest',
  JSON.stringify(
    {
      name: 'Sliva Technology Indonesia',
      short_name: 'Sliva',
      lang: 'id',
      start_url: '/',
      display: 'browser',
      background_color: '#ffffff',
      theme_color: '#087eb8',
      icons: [
        { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { src: '/brand-logo.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2
  )
);
console.log('Brand assets optimized from the supplied Sliva logo.');
