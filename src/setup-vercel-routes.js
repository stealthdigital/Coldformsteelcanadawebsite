const fs = require('fs');
const path = require('path');

// Ensure .vercel/output directories exist
const outputDir = path.join(process.cwd(), '.vercel', 'output');
const staticDir = path.join(outputDir, 'static');
const configPath = path.join(outputDir, 'config.json');

// Create directories if they don't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create config.json for Vercel Build Output API v3
const config = {
  version: 3,
  routes: [
    {
      src: '^/assets/(.*)$',
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      },
      continue: true
    },
    {
      src: '^/images/(.*)$',
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      },
      continue: true
    },
    {
      handle: 'filesystem'
    },
    {
      src: '/(.*)',
      dest: '/index.html'
    }
  ]
};

// Write config.json
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log('✅ Vercel routes config created at .vercel/output/config.json');

// Copy all files from build to static
const copyRecursive = (src, dest) => {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Create static directory
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// Copy build files to .vercel/output/static
const buildDir = path.join(process.cwd(), 'build');
if (fs.existsSync(buildDir)) {
  console.log('📦 Copying build/ to .vercel/output/static/...');
  copyRecursive(buildDir, staticDir);
  console.log('✅ Build files copied to .vercel/output/static');
} else {
  console.log('⚠️  Build directory not found, skipping file copy');
}

// Copy public folder assets to .vercel/output/static (so they're at the root)
const publicDir = path.join(process.cwd(), 'public');
if (fs.existsSync(publicDir)) {
  console.log('📦 Copying public/ assets to .vercel/output/static/...');
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach(file => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(staticDir, file);
    // Only copy if it doesn't already exist (build files take precedence)
    if (!fs.existsSync(destPath)) {
      const stats = fs.statSync(srcPath);
      if (stats.isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
  console.log('✅ Public assets copied to .vercel/output/static');
}

// Log what we created
console.log('📁 Final .vercel/output structure:');
if (fs.existsSync(staticDir)) {
  const staticFiles = fs.readdirSync(staticDir);
  console.log('   static/:', staticFiles.join(', '));
}