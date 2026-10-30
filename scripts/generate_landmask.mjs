import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const server = http.createServer((req, res) => {
  const filePath = path.join(process.cwd(), req.url.replace(/^\//, ''));
  let contentType = 'application/octet-stream';
  if (filePath.endsWith('.html')) contentType = 'text/html';
  else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) contentType = 'image/jpeg';
  if (fs.existsSync(filePath)) {
    res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9877, () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const html = `<!DOCTYPE html><html><body><canvas id="c"></canvas><script>
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'http://localhost:9877/public/textures/earth_specular_2048.jpg';
    img.onload = () => {
      // 1024x512 gives 0.35 degree resolution (~39km at equator)
      const w = 1024;
      const h = 512;
      const c = document.getElementById('c');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const imgData = ctx.getImageData(0, 0, w, h).data;
      
      // 1 bit per pixel: 1 = land, 0 = ocean
      // In earth_specular, ocean is white (high brightness), land is black (low brightness)
      // Threshold 0.65 captures anti-aliased coastlines where land meets pure white ocean
      const totalPixels = w * h;
      const rawLand = new Uint8Array(totalPixels);
      for (let i = 0; i < totalPixels; i++) {
        const dIdx = i * 4;
        const bri = (imgData[dIdx] * 0.299 + imgData[dIdx + 1] * 0.587 + imgData[dIdx + 2] * 0.114) / 255;
        if (bri < 0.65) {
          rawLand[i] = 1;
        }
      }
      
      const byteLen = Math.ceil(totalPixels / 8);
      const bytes = new Uint8Array(byteLen);
      let landCount = 0;
      
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x;
          // Accept if land or immediately adjacent to land (ensures thin peninsulas & ports are solid)
          let isLand = rawLand[i] === 1;
          if (!isLand) {
            // Check 4-neighbors
            if ((x > 0 && rawLand[i - 1]) ||
                (x < w - 1 && rawLand[i + 1]) ||
                (y > 0 && rawLand[i - w]) ||
                (y < h - 1 && rawLand[i + w])) {
              // Only dilate if not deep ocean
              const dIdx = i * 4;
              const bri = (imgData[dIdx] * 0.299 + imgData[dIdx + 1] * 0.587 + imgData[dIdx + 2] * 0.114) / 255;
              if (bri < 0.85) {
                isLand = true;
              }
            }
          }
          if (isLand) {
            landCount++;
            const byteIdx = Math.floor(i / 8);
            const bitIdx = i % 8;
            bytes[byteIdx] |= (1 << bitIdx);
          }
        }
      }
      
      // Convert to binary string for base64
      let binary = '';
      for (let i = 0; i < byteLen; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const b64 = btoa(binary);
      
      const result = {
        width: w,
        height: h,
        totalPixels,
        landCount,
        landRatio: Number((landCount / totalPixels).toFixed(4)),
        base64: b64
      };
      
      document.body.innerHTML = '<pre id="res">' + JSON.stringify(result) + '</pre>';
    };
  </script></body></html>`;

  fs.writeFileSync('temp_landmask.html', html);

  const edge = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--virtual-time-budget=5000',
    '--dump-dom',
    'http://localhost:9877/temp_landmask.html'
  ]);

  let stdout = '';
  edge.stdout.on('data', d => stdout += d);
  edge.on('close', () => {
    const match = stdout.match(/<pre id="res">([\s\S]*?)<\/pre>/);
    if (match) {
      const data = JSON.parse(match[1]);
      console.log(`✅ Landmask generated: ${data.width}x${data.height}, ${data.landCount} land pixels (${(data.landRatio * 100).toFixed(1)}%), base64 length: ${data.base64.length}`);
      
      const fileContent = `// NASA Blue Marble True Earth Specular Landmask (512x256 1-bit packed)
// Resolution: 512x256 (0.7 deg/px). 1 bit per pixel: 1 = land, 0 = ocean.
export const LAND_MASK_WIDTH = ${data.width};
export const LAND_MASK_HEIGHT = ${data.height};
export const LAND_MASK_B64 = "${data.base64}";

let cachedBytes = null;

export function getLandMaskBytes() {
  if (cachedBytes) return cachedBytes;
  if (typeof atob === 'undefined') return null;
  const binary = atob(LAND_MASK_B64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  cachedBytes = bytes;
  return cachedBytes;
}

export function isLandAt(lat, lng) {
  const bytes = getLandMaskBytes();
  if (!bytes) return false;
  // Lat: +90 to -90 -> y: 0 to height-1
  // Lng: -180 to +180 -> x: 0 to width-1
  const u = Math.max(0, Math.min(1, (lng + 180) / 360));
  const v = Math.max(0, Math.min(1, (90 - lat) / 180));
  const x = Math.min(LAND_MASK_WIDTH - 1, Math.floor(u * LAND_MASK_WIDTH));
  const y = Math.min(LAND_MASK_HEIGHT - 1, Math.floor(v * LAND_MASK_HEIGHT));
  const idx = y * LAND_MASK_WIDTH + x;
  const byteIdx = Math.floor(idx / 8);
  const bitIdx = idx % 8;
  return (bytes[byteIdx] & (1 << bitIdx)) !== 0;
}
`;
      fs.writeFileSync('src/data/earthLandMask.js', fileContent, 'utf-8');
      console.log('✅ Wrote src/data/earthLandMask.js successfully!');
    } else {
      console.error('❌ Failed to capture output:', stdout.slice(0, 500));
    }
    server.close();
    try { fs.unlinkSync('temp_landmask.html'); } catch {}
    process.exit(0);
  });
});
