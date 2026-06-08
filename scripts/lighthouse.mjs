#!/usr/bin/env node
/**
 * Lighthouse performance audit
 * Usage: node scripts/lighthouse.mjs [--url http://localhost:3000]
 * Requires a running dev/build server on the target URL.
 */
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const BASE_URL = process.argv.includes('--url')
  ? process.argv[process.argv.indexOf('--url') + 1]
  : 'http://localhost:3000';

const PAGES = [
  { name: 'Landing', path: '/' },
  { name: 'Book Demo', path: '/book-demo' },
];

const THRESHOLDS = {
  performance: 70,
  accessibility: 85,
  'best-practices': 80,
  seo: 80,
};

const CATEGORY_LABELS = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  'best-practices': 'Best Practices',
  seo: 'SEO',
};

async function auditPage(url, chrome) {
  const result = await lighthouse(url, {
    port: chrome.port,
    logLevel: 'silent',
    output: 'json',
    onlyCategories: Object.keys(THRESHOLDS),
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
    throttling: { cpuSlowdownMultiplier: 1 },
  });

  if (!result?.lhr) throw new Error(`Lighthouse returned no results for ${url}`);
  return result.lhr;
}

function scoreColor(score, threshold) {
  if (score >= threshold) return '\x1b[32m'; // green
  if (score >= threshold - 10) return '\x1b[33m'; // yellow
  return '\x1b[31m'; // red
}
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

let failed = false;

// Chrome resolution order:
//   1. CHROME_PATH env var (explicit override — recommended in CI)
//   2. Playwright's bundled Chromium (auto-detected via @playwright/test)
//   3. System Chrome / Chromium (chrome-launcher default)
async function resolveChromePath() {
  if (process.env['CHROME_PATH']) return process.env['CHROME_PATH'];
  try {
    // @playwright/test exposes the executable path for its bundled Chromium
    const { chromium } = await import('@playwright/test');
    const execPath = chromium.executablePath();
    if (execPath) return execPath;
  } catch {
    // @playwright/test not available or chromium not installed — fall through
  }
  return undefined; // let chrome-launcher find a system Chrome
}

const chromePath = await resolveChromePath();

const chrome = await chromeLauncher.launch({
  chromePath,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});

console.log(`\n${BOLD}Lighthouse Audit — ${BASE_URL}${RESET}\n`);

const colW = 18;
const header = [
  'Page'.padEnd(14),
  ...Object.values(CATEGORY_LABELS).map((l) => l.padEnd(colW)),
].join('  ');
console.log(BOLD + header + RESET);
console.log('─'.repeat(header.length));

for (const page of PAGES) {
  const url = BASE_URL + page.path;
  try {
    const lhr = await auditPage(url, chrome);
    const scores = Object.fromEntries(
      Object.keys(THRESHOLDS).map((k) => [k, Math.round((lhr.categories[k]?.score ?? 0) * 100)]),
    );

    const row = [
      page.name.padEnd(14),
      ...Object.entries(scores).map(([k, score]) => {
        const threshold = THRESHOLDS[k];
        const pass = score >= threshold;
        if (!pass) failed = true;
        const color = scoreColor(score, threshold);
        const cell = `${score} (>=  ${threshold})`;
        return `${color}${cell.padEnd(colW)}${RESET}`;
      }),
    ].join('  ');

    console.log(row);
  } catch (err) {
    console.error(`  x ${page.name}: ${err.message}`);
    failed = true;
  }
}

await chrome.kill();

console.log('');
if (failed) {
  console.error(`${'\x1b[31m'}x One or more pages failed Lighthouse thresholds.${RESET}`);
  process.exit(1);
} else {
  console.log(`${'\x1b[32m'}All pages passed Lighthouse thresholds.${RESET}`);
}
