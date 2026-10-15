import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { routes } from '../src/routes';

for (const width of [1440, 768, 390, 320])
  test(`all 50 routes render without errors or horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    for (const route of routes) {
      const response = await page.goto(route.path);
      expect(response?.status(), route.path).toBe(200);
      await expect(page.locator('h1'), route.path).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page).toHaveTitle(route.title);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `Overflow: ${route.path} at ${width}`
      ).toBe(true);
    }
    expect(errors).toEqual([]);
  });

const templates = [
  '/',
  '/layanan',
  '/layanan/pembuatan-website',
  '/industri',
  '/industri/pemerintahan',
  '/solusi',
  '/solusi/portal-layanan-publik',
  '/tentang',
  '/insight',
  '/insight/cara-memilih-vendor-aplikasi',
  '/biaya',
  '/produk',
  '/kemitraan',
  '/kontak',
  '/faq',
  '/privasi',
  '/ketentuan',
];
for (const path of templates)
  test(`accessible template ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    const audit = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      audit.violations.map((x) => ({
        id: x.id,
        impact: x.impact,
        nodes: x.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
      }))
    ).toEqual([]);
  });
test('navigation, keyboard tabs, FAQ and content filters work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Buka menu' });
  await toggle.click();
  await expect(page.getByRole('navigation', { name: 'Navigasi mobile' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('navigation', { name: 'Navigasi mobile' })).toBeHidden();
  await page.getByRole('tab', { name: 'UMKM & Bisnis Lokal' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Mulai dari yang penting');
  await page.keyboard.press('ArrowUp');
  await expect(page.getByRole('tab', { name: 'Perusahaan & Enterprise' })).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Satukan proses');
  const faq = page.locator('.faq-item').first();
  await faq.locator('summary').click();
  await expect(faq.locator('p')).toBeVisible();
  await faq.locator('summary').click();
  await expect(faq.locator('p')).toBeHidden();
  await page.goto('/solusi');
  await page.getByRole('button', { name: 'pemerintahan', exact: true }).click();
  await expect(page.locator('.solution-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await expect(page.locator('.solution-card')).toHaveCount(3);
  await page.goto('/insight');
  await page.getByRole('button', { name: 'Website', exact: true }).click();
  await expect(page.locator('.article-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'Semua', exact: true }).click();
  await expect(page.locator('.article-card')).toHaveCount(6);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.locator('.nav-dropdown summary').click();
  await expect(page.locator('.dropdown-panel')).toBeVisible();
  await page.locator('.dropdown-grid a').first().click();
  await expect(page).toHaveURL(/layanan\/pembuatan-website/);
});
test('consultation prepares the correct WhatsApp message and validates required fields', async ({
  page,
  context,
}) => {
  await context.route('https://wa.me/**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: '<title>WhatsApp handoff test</title>WhatsApp handoff intercepted for testing.',
    })
  );
  await page.goto('/kontak');
  await page.getByRole('button', { name: 'Lanjutkan ke WhatsApp' }).click();
  expect(
    await page.locator('#contact-name').evaluate((e: HTMLInputElement) => e.validity.valueMissing)
  ).toBe(true);
  await page.getByLabel('Nama Anda').fill('Tes Sliva');
  await page.getByLabel('Usaha / organisasi').fill('UMKM Contoh');
  await page.getByLabel('Apa yang ingin dibangun?').selectOption({ label: 'Website & E-commerce' });
  await page.getByLabel('Gambaran anggaran').selectOption({ label: 'Rp 5–15 juta' });
  await page
    .getByLabel('Ceritakan sedikit')
    .fill('Saya ingin membuat website company profile dengan katalog produk.');
  await page.locator('input[type=checkbox]').check();
  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Lanjutkan ke WhatsApp' }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  const url = new URL(popup.url());
  expect(url.hostname).toBe('wa.me');
  expect(url.pathname).toBe('/6282391239651');
  expect(url.searchParams.get('text')).toContain('Tes Sliva');
  expect(url.searchParams.get('text')).toContain('UMKM Contoh');
  expect(url.searchParams.get('text')).toContain('Website & E-commerce');
  expect(url.searchParams.get('text')).toContain('Rp 5–15 juta');
  expect(url.searchParams.get('text')).toContain('katalog produk');
  await expect(page.locator(`a[href="mailto:evans.moris21@gmail.com"]`).first()).toBeVisible();
});
test('HTML content is available without JavaScript and unknown URLs return 404', async ({
  browser,
  request,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const path of ['/', '/layanan/pembuatan-website', '/insight/cara-memilih-vendor-aplikasi']) {
    await page.goto(`http://127.0.0.1:4173${path}`);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).not.toBeEmpty();
  }
  const notFound = await request.get('/halaman-yang-tidak-ada');
  expect(notFound.status()).toBe(404);
  await page.goto('http://127.0.0.1:4173/halaman-yang-tidak-ada');
  await expect(page.locator('h1')).toContainText('arah baru');
  await context.close();
});
