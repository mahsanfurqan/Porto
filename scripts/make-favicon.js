const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
// png-to-ico is ESM; import dynamically at runtime to be compatible with CommonJS script
let pngToIco;

async function makeFavicon() {
  const projectRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(projectRoot, 'public');
  const svgPath = path.join(publicDir, 'logo.svg');
  const outIco = path.join(publicDir, 'favicon.ico');

  if (!fs.existsSync(svgPath)) {
    console.error('ERROR: public/logo.svg not found');
    process.exit(1);
  }

  try {
    // create multiple sized PNGs in memory
    const sizes = [16, 32, 48, 64];
    const buffers = await Promise.all(
      sizes.map((s) =>
        sharp(svgPath)
          .resize(s, s)
          .png()
          .toBuffer()
      )
    );

    // png-to-ico expects file paths, so write temporary pngs
    const tmpDir = path.join(projectRoot, 'tmp-favicon');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

    const tmpPaths = [];
    for (let i = 0; i < buffers.length; i++) {
      const p = path.join(tmpDir, `icon-${sizes[i]}.png`);
      fs.writeFileSync(p, buffers[i]);
      tmpPaths.push(p);
    }

  // dynamic import to support ESM package
  const mod = await import('png-to-ico');
  pngToIco = mod.default || mod;
  const icoBuffer = await pngToIco(tmpPaths);
    fs.writeFileSync(outIco, icoBuffer);

    // cleanup tmp
    tmpPaths.forEach((p) => fs.unlinkSync(p));
    fs.rmdirSync(tmpDir);

    console.log('favicon.ico created at', outIco);
  } catch (err) {
    console.error('Error creating favicon:', err);
    process.exit(1);
  }
}

makeFavicon();
