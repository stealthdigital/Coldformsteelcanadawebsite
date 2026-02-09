const fs = require('fs');
const path = require('path');

// Determine if this is pre-build or post-build based on existence of build/
const isBuildComplete = fs.existsSync(path.join(process.cwd(), 'build'));

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
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
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
  // STEP 3: Setup Vercel Build Output API v3
  // ============================================
  console.log('🚀 Setting up Vercel Build Output API v3...');
  
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
  
  // Copy build files to .vercel/output/static
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
  
  const buildDir = path.join(process.cwd(), 'build');
  if (fs.existsSync(buildDir)) {
    console.log('📦 Copying build/ to .vercel/output/static/...');
    copyRecursive(buildDir, staticDir);
    console.log('✅ Build files copied to .vercel/output/static');
  }
  
  // Copy public assets
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    console.log('📦 Copying public/ assets to .vercel/output/static/...');
    const publicFiles = fs.readdirSync(publicDir);
    publicFiles.forEach(file => {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(staticDir, file);
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
  
  // Log final structure
  console.log('📁 Final .vercel/output structure:');
  if (fs.existsSync(staticDir)) {
    const staticFiles = fs.readdirSync(staticDir);
    console.log('   static/:', staticFiles.join(', '));
  }
  
} else {
  console.log('ℹ️  Skipping SEO injection (build/index.html not found yet)');
}
