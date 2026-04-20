const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcArg = process.argv[2];
const src = srcArg || path.join(process.cwd(), 'public', 'assets', 'hero8.jpeg');
const out = path.join(process.cwd(), 'public', 'og-image.png');

(async () => {
  try {
    if (!fs.existsSync(src)) {
      console.error('Source image not found:', src);
      process.exit(1);
    }

    // Resize/crop to 1200x630 (OG recommended)
    const base = await sharp(src).resize(1200, 630, { fit: 'cover' }).toBuffer();

    // Create SVG overlay with semi-transparent dark layer and text
    const svgOverlay = (title, subtitle) => `
      <svg width="1200" height="630">
        <defs>
          <style>
            .title { fill: #fff; font-size:56px; font-weight:700; font-family: Inter, system-ui, Arial, sans-serif; }
            .subtitle { fill: #fff; font-size:24px; font-weight:500; font-family: Inter, system-ui, Arial, sans-serif; }
          </style>
        </defs>
        <rect x="0" y="0" width="1200" height="630" fill="rgba(0,0,0,0.35)" />
        <g>
          <text x="64" y="360" class="title">${title}</text>
          <text x="64" y="420" class="subtitle">${subtitle}</text>
        </g>
      </svg>
    `;

    const title = 'Mazid — Full Stack Developer';
    const subtitle = 'Portfolio • React • Node.js • MongoDB • Open-source';
    const svgBuffer = Buffer.from(svgOverlay(title, subtitle));

    // Composite the svg on top of the image
    await sharp(base)
      .composite([{ input: svgBuffer, blend: 'over' }])
      .png({ quality: 90 })
      .toFile(out);

    console.log('Wrote', out);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
