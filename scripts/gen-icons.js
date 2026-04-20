const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const srcArg = process.argv[2];
const src = srcArg || path.join(process.cwd(), 'public', 'assets', 'avatar-source.png');
const outDir = path.join(process.cwd(), 'public');
const sizes = [16, 32, 48, 96, 192, 256];

(async () => {
  try {
    if (!fs.existsSync(src)) {
      console.error('Source image not found:', src);
      console.error('Place your high-res avatar at public/assets/avatar-source.png or pass a path as the first arg.');
      process.exit(1);
    }

    const pngPaths = [];
    for (const s of sizes) {
      const outPath = path.join(outDir, `icon-${s}.png`);
      await sharp(src).resize(s, s).png().toFile(outPath);
      pngPaths.push(outPath);
      console.log('Wrote', outPath);
    }

    // Create ICO from largest three sizes (png-to-ico prefers multiple sizes)
    const icoBuffer = await pngToIco([pngPaths[2], pngPaths[1], pngPaths[0]]);
    fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);
    console.log('Wrote', path.join(outDir, 'favicon.ico'));

    // Write apple-touch-icon (192)
    const touch = path.join(outDir, 'apple-touch-icon.png');
    fs.copyFileSync(path.join(outDir, 'icon-192.png'), touch);
    console.log('Wrote', touch);

    console.log('Icon generation complete.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
