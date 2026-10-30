import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const GITHUB_TOKEN = process.argv[2] || process.env.GITHUB_TOKEN || '';
const OWNER = 'noctilux13';
const REPO = 'polimiarchedtestlearning';

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github.v3+json',
  'User-Agent': 'Fast-Deployer',
  'Content-Type': 'application/json'
};

async function api(endpoint, options = {}, maxRetries = 3) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}${endpoint}`;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, { ...options, headers: { ...headers, ...options.headers } });
      if (!res.ok) {
        const errText = await res.text();
        if (attempt < maxRetries && (res.status >= 500 || res.status === 403)) {
          console.log(`⚠️ Retry ${attempt}/${maxRetries} on HTTP ${res.status}...`);
          await new Promise(r => setTimeout(r, 1000 * attempt));
          continue;
        }
        throw new Error(`API ${options.method || 'GET'} ${endpoint} failed (${res.status}): ${errText}`);
      }
      return res.json();
    } catch (err) {
      if (attempt < maxRetries) {
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }
      throw err;
    }
  }
}

async function createBlob(contentBuffer) {
  const res = await api('/git/blobs', {
    method: 'POST',
    body: JSON.stringify({
      content: contentBuffer.toString('base64'),
      encoding: 'base64'
    })
  });
  return res.sha;
}

// Upload map of files with concurrency
async function uploadFilesConcurrent(fileMap, concurrency = 6) {
  const entries = Object.entries(fileMap);
  const treeItems = [];
  let index = 0;

  async function worker() {
    while (index < entries.length) {
      const i = index++;
      const [repoPath, localPath] = entries[i];
      if (!fs.existsSync(localPath)) continue;

      const buf = fs.readFileSync(localPath);
      const sha = await createBlob(buf);
      treeItems.push({
        path: repoPath.replace(/\\/g, '/'),
        mode: '100644',
        type: 'blob',
        sha
      });

      if (treeItems.length % 10 === 0 || treeItems.length === entries.length) {
        console.log(`  Uploaded ${treeItems.length}/${entries.length} files...`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return treeItems;
}

async function commitToBranch(branchName, fileMap, commitMessage) {
  console.log(`\n🚀 Deploying to branch: '${branchName}'...`);

  // 1. Get latest commit on branch
  const refData = await api(`/git/ref/heads/${branchName}`);
  const latestCommitSha = refData.object.sha;
  const commitData = await api(`/git/commits/${latestCommitSha}`);
  const baseTreeSha = commitData.tree.sha;

  console.log(`Current ${branchName} HEAD: ${latestCommitSha.slice(0, 7)}, Base Tree: ${baseTreeSha.slice(0, 7)}`);

  // 2. Upload blobs concurrently
  const treeItems = await uploadFilesConcurrent(fileMap, 6);

  // 3. Create tree on top of base_tree
  console.log('🌲 Creating git tree...');
  const newTree = await api('/git/trees', {
    method: 'POST',
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: treeItems
    })
  });
  console.log(`✅ Created Tree: ${newTree.sha.slice(0, 7)}`);

  // 4. Create commit
  console.log('📝 Creating git commit...');
  const newCommit = await api('/git/commits', {
    method: 'POST',
    body: JSON.stringify({
      message: commitMessage,
      tree: newTree.sha,
      parents: [latestCommitSha],
      author: {
        name: 'noctilux13',
        email: 'noctilux13@users.noreply.github.com',
        date: new Date().toISOString()
      }
    })
  });
  console.log(`✅ Created Commit: ${newCommit.sha.slice(0, 7)}`);

  // 5. Update branch ref
  await api(`/git/refs/heads/${branchName}`, {
    method: 'PATCH',
    body: JSON.stringify({
      sha: newCommit.sha,
      force: true
    })
  });
  console.log(`🎉 Branch '${branchName}' successfully updated to ${newCommit.sha.slice(0, 7)}!`);
  return newCommit.sha;
}

// Recursively gather files from directory
function collectFiles(dir, base = '') {
  let list = [];
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const relPath = path.join(base, entry.name).replace(/\\/g, '/');
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      list = list.concat(collectFiles(fullPath, relPath));
    } else {
      list.push(relPath);
    }
  }
  return list;
}

async function main() {
  console.log(`======================================================`);
  console.log(`🚀 Starting Fast GitHub Deploy to ${OWNER}/${REPO}`);
  console.log(`======================================================`);

  // 1. Files for 'main' branch:
  // All src files + core configs + new public images + offline htmls
  const mainFiles = {};

  // All src/ files
  const srcFiles = collectFiles(path.join(rootDir, 'src'));
  for (const f of srcFiles) {
    mainFiles[`src/${f}`] = path.join(rootDir, 'src', f);
  }

  // Root configs & offline bundles
  const rootFiles = [
    'package.json',
    'package-lock.json',
    'index.html',
    'vite.config.js',
    'README.md',
    '艺术与建筑史研考平台_单文件离线版.html',
    'art_learning_platform_portable.html'
  ];
  for (const f of rootFiles) {
    const full = path.join(rootDir, f);
    if (fs.existsSync(full)) mainFiles[f] = full;
  }

  // New public files that were added/modified
  const newPublicFiles = [
    'public/data/artworksCache.json',
    'public/images/artists/bbrp.jpg',
    'public/images/artists/daniel-libeskind.jpg',
    'public/images/artists/frank-gehry.jpg',
    'public/images/artists/gio-ponti.jpg',
    'public/images/artists/giuseppe-terragni.jpg',
    'public/images/artists/luigi-figini.jpg',
    'public/images/artists/norman-foster.jpg',
    'public/images/artists/oscar-niemeyer.jpg',
    'public/images/artists/renzo-piano.jpg',
    'public/images/artists/santiago-calatrava.jpg',
    'public/images/artists/zaha-hadid.jpg',
    'public/images/artworks/auditorium-parco-della-musica.jpg',
    'public/images/artworks/bac-de-roda-bridge.jpg',
    'public/images/artworks/casa-del-fascio.jpg',
    'public/images/artworks/cathedral-of-brasilia.jpg',
    'public/images/artworks/centre-pompidou.jpg',
    'public/images/artworks/citylife-milan.jpg',
    'public/images/artworks/dancing-house.jpg',
    'public/images/artworks/guggenheim-bilbao.jpg',
    'public/images/artworks/jewish-museum-berlin.jpg',
    'public/images/artworks/maxxi-rome.jpg',
    'public/images/artworks/niteroi-contemporary-art-museum.jpg',
    'public/images/artworks/one-world-trade-center.jpg',
    'public/images/artworks/pirelli-tower.jpg',
    'public/images/artworks/reichstag-dome.jpg',
    'public/images/artworks/tjibaou-cultural-centre.jpg',
    'public/images/artworks/velasca-tower.jpg',
    'public/images/artworks/villa-figini.jpg',
    'public/images/artworks/walt-disney-concert-hall.jpg',
    'public/images/artworks/zurich-stadelhofen-station.jpg'
  ];

  // Include sci-fi Earth textures
  const textureFiles = collectFiles(path.join(rootDir, 'public', 'textures'));
  for (const f of textureFiles) {
    const rel = `public/textures/${f}`;
    newPublicFiles.push(rel);
  }

  for (const f of newPublicFiles) {
    const full = path.join(rootDir, f);
    if (fs.existsSync(full)) mainFiles[f] = full;
  }

  const mainSha = await commitToBranch(
    'main',
    mainFiles,
    'feat: return to 2D soft-glowing celestial particle globe, preserve high density, and correct real-world NASA continent boundaries'
  );

  // Sync local git HEAD
  try {
    const gitHead = path.join(rootDir, '.git', 'refs', 'heads', 'main');
    fs.writeFileSync(gitHead, `${mainSha}\n`);
    console.log(`📌 Local .git/refs/heads/main synchronized.`);
  } catch (e) {}

  // 2. Files for 'gh-pages' branch:
  // Upload fresh dist files
  const ghPagesFiles = {};
  const distDir = path.join(rootDir, 'dist');
  const distFiles = collectFiles(distDir);
  for (const f of distFiles) {
    ghPagesFiles[f] = path.join(distDir, f);
  }

  // Also include the newly added public artwork/artist images on gh-pages so live site renders them
  for (const f of newPublicFiles) {
    const full = path.join(rootDir, f);
    if (fs.existsSync(full)) {
      const relToPublic = f.replace(/^public\//, '');
      ghPagesFiles[relToPublic] = full;
    }
  }

  await commitToBranch(
    'gh-pages',
    ghPagesFiles,
    'deploy: 2D celestial glowing particle globe with NASA Blue Marble land boundaries and mobile responsiveness'
  );

  console.log(`\n======================================================`);
  console.log(`🎉 部署大获全胜！`);
  console.log(`📦 GitHub main 代码仓库: https://github.com/${OWNER}/${REPO}`);
  console.log(`🌐 GitHub Pages 在线网站: https://${OWNER}.github.io/${REPO}/`);
  console.log(`======================================================\n`);
}

main().catch(err => {
  console.error('❌ Upload failed:', err);
  process.exit(1);
});
