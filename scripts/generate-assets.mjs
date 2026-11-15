// Generates favicons, logo.png and the default Open Graph image from SVG.
// Run: node scripts/generate-assets.mjs   (re-run after changing brand colours)
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const GREEN = '#226F54';
const RED = '#6E0509';
const INK = '#1D1F22';
const arch = 'M1 29V11.5C1 5.6 5.4 1.6 11 1c5.6.6 10 4.6 10 10.5V29Z';

const mark = (size, pad = 0.18) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#fff"/>
  <g transform="translate(${16 - 11 * (1 - pad)} ${16 - 15 * (1 - pad)}) scale(${1 - pad})">
    <path d="${arch}" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <rect x="4.5" y="17" width="13" height="9" fill="${GREEN}"/>
  </g>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 30"><path d="${arch}" fill="none" stroke="${INK}" stroke-width="1.6"/><rect x="4.5" y="17" width="13" height="9" fill="${GREEN}"/></svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <g transform="translate(860 110)">
    <path d="M18 438V158C18 80 75 22 150 10c75 12 132 70 132 148v280Z" fill="none" stroke="#CDCDC7" stroke-width="1.5" transform="translate(16 16)"/>
    <path d="M18 438V158C18 80 75 22 150 10c75 12 132 70 132 148v280Z" fill="#EEF4F1" stroke="${INK}" stroke-width="2"/>
    <rect x="70" y="250" width="160" height="150" fill="${GREEN}"/>
    <rect x="12" y="300" width="12" height="12" fill="${RED}"/>
    <line x1="-40" y1="438" x2="340" y2="438" stroke="${INK}" stroke-width="2"/>
  </g>
  <text x="96" y="272" font-family="Dana, Vazirmatn, Tahoma, 'Segoe UI', sans-serif" font-size="128" font-weight="700" fill="${INK}" direction="rtl" text-anchor="end">دریچه</text>
  <text x="100" y="380" font-family="Outfit, 'Segoe UI', Arial, sans-serif" font-size="44" font-weight="300" fill="${INK}" letter-spacing="-1">Daricheh</text>
  <text x="100" y="470" font-family="Outfit, 'Segoe UI', Arial, sans-serif" font-size="26" fill="#6A6F75">Web design &amp; SEO for Iranian-owned businesses across the UK</text>
  <text x="100" y="520" font-family="Outfit, 'Segoe UI', Arial, sans-serif" font-size="24" fill="${GREEN}">daricheh.co.uk</text>
</svg>`;

await mkdir('public/og', { recursive: true });
await writeFile('public/favicon.svg', faviconSvg);
await sharp(Buffer.from(mark(32, 0.12))).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(mark(180))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(mark(512))).png().toFile('public/logo.png');
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og/daricheh-default.png');
console.log('Assets written to /public');
