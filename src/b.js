const fs = require('fs');
const path = require('path');

// Determine if this is pre-build or post-build based on existence of build/
const isBuildComplete = fs.existsSync(path.join(process.cwd(), 'build'));

console.log('=== b.js Build Script Starting ===');
console.log('Current directory:', process.cwd());
console.log('Build complete:', isBuildComplete);

// ============================================
// STEP 1: Restore PostCSS config (always run)
// ============================================
const postcssConfig = `export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};`;

fs.writeFileSync('postcss.config.js', postcssConfig);
console.log('✅ PostCSS config restored');

// ============================================
// STEP 2: Post-build tasks (SEO + Vercel setup)
// ============================================
if (isBuildComplete) {
  const indexPath = path.join(process.cwd(), 'build', 'index.html');
  
  if (fs.existsSync(indexPath)) {
    console.log('✅ Found build/index.html, injecting SEO...');
    
    let html = fs.readFileSync(indexPath, 'utf-8');
    console.log('📄 Original HTML length:', html.length);
    
    const seoTags = `
    <!-- Primary Meta Tags -->
    <title>Cold Form Steel Canada - Modern Barndominium & Steel Buildings</title>
    <meta name="title" content="Cold Form Steel Canada - Modern Barndominium & Steel Buildings">
    <meta name="description" content="Premium cold-formed steel buildings and barndominiums across Canada. Custom designs, expert engineering, and coast-to-coast delivery. Get your free quote today.">
    <meta name="keywords" content="barndominium Canada, cold form steel, steel buildings, metal buildings Canada, barndominium Ontario, steel frame homes">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://coldformsteelcanada.com/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://coldformsteelcanada.com/">
    <meta property="og:title" content="Cold Form Steel Canada - Modern Barndominium & Steel Buildings">
    <meta property="og:description" content="Premium cold-formed steel buildings and barndominiums across Canada. Custom designs, expert engineering, and coast-to-coast delivery.">
    <meta property="og:image" content="https://coldformsteelcanada.com/images/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://coldformsteelcanada.com/">
    <meta property="twitter:title" content="Cold Form Steel Canada - Modern Barndominium & Steel Buildings">
    <meta property="twitter:description" content="Premium cold-formed steel buildings and barndominiums across Canada. Custom designs, expert engineering, and coast-to-coast delivery.">
    <meta property="twitter:image" content="https://coldformsteelcanada.com/images/og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://res.cloudinary.com/dj76bnpni/image/upload/v1769179306/CFSC-Favicon_nlvmgl.png">
    <link rel="manifest" href="/site.webmanifest">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    
    <!-- Verification -->
    <meta name="google-site-verification" content="your-verification-code">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cold Form Steel Canada",
      "url": "https://coldformsteelcanada.com",
      "logo": "https://coldformsteelcanada.com/images/logo.png",
      "description": "Premium cold-formed steel buildings and barndominiums across Canada",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-STEEL-CA",
        "contactType": "Customer Service"
      }
    }
    </script>
  `;
    
    html = html.replace('</head>', `  ${seoTags}\n  </head>`);
    console.log('📄 Modified HTML length:', html.length);
    
    fs.writeFileSync(indexPath, html);
    console.log('✅ SEO injected into build/index.html');
  } else {
    console.log('⚠️  build/index.html not found, skipping SEO injection');
  }
  
  // ============================================
  // STEP 3: Verify build directory contents
  // ============================================
  const buildDir = path.join(process.cwd(), 'build');
  console.log('\n📁 Checking build directory contents...');
  if (fs.existsSync(buildDir)) {
    const buildFiles = fs.readdirSync(buildDir);
    console.log('Build directory files:', buildFiles.join(', '));
    
    // Check if favicon.svg is already in build output (Vite should copy it)
    const faviconInBuild = buildFiles.includes('favicon.svg');
    console.log('Favicon in build?', faviconInBuild);
  }
  
  // ============================================
  // STEP 4: Setup Vercel Build Output API v3
  // ============================================
  console.log('\n🚀 Setting up Vercel Build Output API v3...');
  
  const outputDir = path.join(process.cwd(), '.vercel', 'output');
  const staticDir = path.join(outputDir, 'static');
  const configPath = path.join(outputDir, 'config.json');
  
  // Create directories
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Create config.json for SPA routing
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
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('✅ Vercel routes config created at .vercel/output/config.json');
  
  // ============================================
  // STEP 5: Copy files to Vercel output
  // ============================================
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
  
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }
  
  // Copy build directory to .vercel/output/static
  if (fs.existsSync(buildDir)) {
    console.log('\n📦 Copying build/ to .vercel/output/static/...');
    copyRecursive(buildDir, staticDir);
    console.log('✅ Build files copied to .vercel/output/static');
  }
  
  // ============================================
  // STEP 6: Verify and copy critical files
  // ============================================
  console.log('\n🔍 Verifying critical files...');
  
  // List of critical files that MUST be in the output
  const criticalFiles = [
    'favicon.svg',
    'robots.txt',
    'sitemap.xml',
    'site.webmanifest'
  ];
  
  const publicDir = path.join(process.cwd(), 'public');
  console.log('Public directory path:', publicDir);
  console.log('Public directory exists?', fs.existsSync(publicDir));
  
  if (fs.existsSync(publicDir)) {
    const publicFiles = fs.readdirSync(publicDir);
    console.log('Files in public/:', publicFiles.join(', '));
  }
  
  // Ensure each critical file exists in the static output
  criticalFiles.forEach(file => {
    const destPath = path.join(staticDir, file);
    const buildPath = path.join(buildDir, file);
    const publicPath = path.join(publicDir, file);
    
    // If file is already in static output, we're good
    if (fs.existsSync(destPath)) {
      console.log(`   ✓ ${file} already in output`);
      return;
    }
    
    // Try to copy from build directory first (Vite should have put it there)
    if (fs.existsSync(buildPath)) {
      fs.copyFileSync(buildPath, destPath);
      console.log(`   ✓ Copied ${file} from build/`);
      return;
    }
    
    // Fallback: copy from public directory
    if (fs.existsSync(publicPath)) {
      fs.copyFileSync(publicPath, destPath);
      console.log(`   ✓ Copied ${file} from public/`);
      return;
    }
    
    console.log(`   ⚠️  ${file} not found anywhere!`);
  });
  
  // Copy public/assets directory if it exists
  const publicAssetsDir = path.join(publicDir, 'assets');
  const staticAssetsDir = path.join(staticDir, 'assets');
  
  if (fs.existsSync(publicAssetsDir)) {
    console.log('\n📦 Copying public/assets/ to output...');
    if (!fs.existsSync(staticAssetsDir)) {
      fs.mkdirSync(staticAssetsDir, { recursive: true });
    }
    const assetFiles = fs.readdirSync(publicAssetsDir);
    assetFiles.forEach(file => {
      const srcPath = path.join(publicAssetsDir, file);
      const destPath = path.join(staticAssetsDir, file);
      if (fs.statSync(srcPath).isFile() && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`   ✓ Copied asset: ${file}`);
      }
    });
  }
  
  // Copy public/images directory if it exists
  const publicImagesDir = path.join(publicDir, 'images');
  const staticImagesDir = path.join(staticDir, 'images');
  
  if (fs.existsSync(publicImagesDir)) {
    console.log('\n📦 Copying public/images/ to output...');
    if (!fs.existsSync(staticImagesDir)) {
      fs.mkdirSync(staticImagesDir, { recursive: true });
    }
    const imageFiles = fs.readdirSync(publicImagesDir);
    imageFiles.forEach(file => {
      const srcPath = path.join(publicImagesDir, file);
      const destPath = path.join(staticImagesDir, file);
      if (fs.statSync(srcPath).isFile() && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`   ✓ Copied image: ${file}`);
      }
    });
  }
  
  // ============================================
  // STEP 7: Final verification
  // ============================================
  console.log('\n📁 Final .vercel/output/static/ structure:');
  if (fs.existsSync(staticDir)) {
    const staticFiles = fs.readdirSync(staticDir);
    console.log('   Root files:', staticFiles.join(', '));
    
    // Check for favicon specifically
    const faviconPath = path.join(staticDir, 'favicon.svg');
    if (fs.existsSync(faviconPath)) {
      const faviconSize = fs.statSync(faviconPath).size;
      console.log('\n✅ favicon.svg confirmed in output (' + faviconSize + ' bytes)');
    } else {
      console.log('\n❌ WARNING: favicon.svg NOT in final output!');
    }
  }
  
  console.log('\n=== b.js Build Script Complete ===\n');
  
} else {
  console.log('ℹ️  Skipping post-build tasks (build/index.html not found yet)');
}