import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { mkdir, writeFile } from 'node:fs/promises';
const chrome = await launch({
  chromePath: process.env.CHROME_PATH,
  chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
});
const summary = [];
await mkdir('qa/lighthouse', { recursive: true });
try {
  for (const [path, name, desktop] of [
    ['/', 'home-mobile', false],
    ['/layanan/pembuatan-website', 'service-mobile', false],
    ['/kontak', 'contact-mobile', false],
    ['/', 'home-desktop', true],
  ]) {
    const options = {
      port: chrome.port,
      logLevel: 'error',
      output: 'html',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      ...(desktop
        ? {
            formFactor: 'desktop',
            screenEmulation: {
              mobile: false,
              width: 1440,
              height: 1000,
              deviceScaleFactor: 1,
              disabled: false,
            },
            throttling: {
              rttMs: 40,
              throughputKbps: 10240,
              cpuSlowdownMultiplier: 1,
              requestLatencyMs: 0,
              downloadThroughputKbps: 0,
              uploadThroughputKbps: 0,
            },
          }
        : {}),
    };
    const result = await lighthouse(`http://127.0.0.1:4173${path}`, options);
    const scores = Object.fromEntries(
      Object.entries(result.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)])
    );
    summary.push({
      name,
      path,
      scores,
      metrics: {
        FCP: result.lhr.audits['first-contentful-paint'].displayValue,
        LCP: result.lhr.audits['largest-contentful-paint'].displayValue,
        CLS: result.lhr.audits['cumulative-layout-shift'].displayValue,
        TBT: result.lhr.audits['total-blocking-time'].displayValue,
      },
      opportunities: Object.entries(result.lhr.audits)
        .filter(([, a]) => a.score !== null && a.score < 1 && a.details?.type === 'opportunity')
        .map(([id, a]) => ({ id, title: a.title, value: a.displayValue })),
      failedAudits: Object.entries(result.lhr.audits)
        .filter(([, a]) => a.score !== null && a.score < 1 && a.scoreDisplayMode === 'binary')
        .map(([id, a]) => ({ id, title: a.title })),
    });
    await writeFile(`qa/lighthouse/${name}.html`, result.report);
    console.log(name, scores, summary.at(-1).metrics);
  }
  await writeFile('qa/lighthouse/summary.json', JSON.stringify(summary, null, 2) + '\n');
} finally {
  await chrome.kill();
}
