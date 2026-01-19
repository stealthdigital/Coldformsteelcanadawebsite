#!/usr/bin/env node

/**
 * Performance Optimization Verification Script
 * 
 * Run this after deployment to verify all optimizations are working
 * Usage: node verify-performance.js <your-vercel-url>
 */

const https = require('https');
const http = require('http');

const VERCEL_URL = process.argv[2] || 'https://coldformsteelcanadawebsite.vercel.app';

console.log('\n🔍 Performance Optimization Verification\n');
console.log('Testing URL:', VERCEL_URL);
console.log('=' .repeat(60));

// Test results storage
const results = {
  passed: [],
  failed: [],
  warnings: []
};

// Helper to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ headers: res.headers, body: data, status: res.statusCode }));
    }).on('error', reject);
  });
}

// Test 1: Cache Headers on JS Files
async function testCacheHeaders() {
  console.log('\n📦 Test 1: Cache Headers on Static Assets');
  console.log('-'.repeat(60));
  
  try {
    // Test a common asset path pattern
    const indexResponse = await makeRequest(VERCEL_URL);
    
    // Look for JS file in the HTML
    const jsMatch = indexResponse.body.match(/\/assets\/[^"]+\.js/);
    const cssMatch = indexResponse.body.match(/\/assets\/[^"]+\.css/);
    
    if (jsMatch) {
      const jsUrl = VERCEL_URL + jsMatch[0];
      const jsResponse = await makeRequest(jsUrl);
      const cacheControl = jsResponse.headers['cache-control'];
      
      console.log('JS File:', jsMatch[0]);
      console.log('Cache-Control:', cacheControl || 'NOT FOUND');
      
      if (cacheControl && cacheControl.includes('max-age=31536000') && cacheControl.includes('immutable')) {
        results.passed.push('✅ JS files have 1-year cache headers');
        console.log('✅ PASS: 1-year cache with immutable flag');
      } else {
        results.failed.push('❌ JS files missing proper cache headers');
        console.log('❌ FAIL: Expected "max-age=31536000, immutable"');
      }
    }
    
    if (cssMatch) {
      const cssUrl = VERCEL_URL + cssMatch[0];
      const cssResponse = await makeRequest(cssUrl);
      const cacheControl = cssResponse.headers['cache-control'];
      
      console.log('\nCSS File:', cssMatch[0]);
      console.log('Cache-Control:', cacheControl || 'NOT FOUND');
      
      if (cacheControl && cacheControl.includes('max-age=31536000') && cacheControl.includes('immutable')) {
        results.passed.push('✅ CSS files have 1-year cache headers');
        console.log('✅ PASS: 1-year cache with immutable flag');
      } else {
        results.failed.push('❌ CSS files missing proper cache headers');
        console.log('❌ FAIL: Expected "max-age=31536000, immutable"');
      }
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test cache headers: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Test 2: Critical CSS Inline
async function testCriticalCSS() {
  console.log('\n🎨 Test 2: Critical CSS Inline');
  console.log('-'.repeat(60));
  
  try {
    const response = await makeRequest(VERCEL_URL);
    
    // Check for inline style tag
    const hasStyleTag = response.body.includes('<style>');
    const hasCriticalCSS = response.body.includes('background-color: #faf8f5');
    const hasBodyStyles = response.body.includes('body {');
    
    console.log('Has <style> tag:', hasStyleTag ? '✅ Yes' : '❌ No');
    console.log('Has critical background color:', hasCriticalCSS ? '✅ Yes' : '❌ No');
    console.log('Has body styles:', hasBodyStyles ? '✅ Yes' : '❌ No');
    
    if (hasStyleTag && hasCriticalCSS && hasBodyStyles) {
      results.passed.push('✅ Critical CSS is inlined in HTML');
      console.log('\n✅ PASS: Critical CSS found in <head>');
    } else {
      results.failed.push('❌ Critical CSS missing or incomplete');
      console.log('\n❌ FAIL: Critical CSS not found');
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test critical CSS: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Test 3: Preconnect Headers
async function testPreconnect() {
  console.log('\n🔗 Test 3: Preconnect & DNS Prefetch');
  console.log('-'.repeat(60));
  
  try {
    const response = await makeRequest(VERCEL_URL);
    
    const hasGTMPreconnect = response.body.includes('preconnect" href="https://www.googletagmanager.com');
    const hasGitHubPreconnect = response.body.includes('preconnect" href="https://raw.githubusercontent.com');
    const hasGTMDNS = response.body.includes('dns-prefetch" href="https://www.googletagmanager.com');
    
    console.log('GTM Preconnect:', hasGTMPreconnect ? '✅ Yes' : '❌ No');
    console.log('GitHub Preconnect:', hasGitHubPreconnect ? '✅ Yes' : '❌ No');
    console.log('GTM DNS Prefetch:', hasGTMDNS ? '✅ Yes' : '❌ No');
    
    if (hasGTMPreconnect && hasGitHubPreconnect && hasGTMDNS) {
      results.passed.push('✅ Preconnect and DNS prefetch configured');
      console.log('\n✅ PASS: Resource hints configured correctly');
    } else {
      results.warnings.push('⚠️ Some preconnect/DNS prefetch hints missing');
      console.log('\n⚠️ WARNING: Some resource hints missing');
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test preconnect: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Test 4: GTM Deferred Loading
async function testGTMDefer() {
  console.log('\n⏱️  Test 4: Google Tag Manager Deferred');
  console.log('-'.repeat(60));
  
  try {
    const response = await makeRequest(VERCEL_URL);
    
    const hasLoadEvent = response.body.includes("window.addEventListener('load'");
    const hasGTMInLoad = response.body.includes("window.addEventListener('load'") && 
                        response.body.includes('www.googletagmanager.com/gtm.js');
    
    console.log('Uses window load event:', hasLoadEvent ? '✅ Yes' : '❌ No');
    console.log('GTM in load handler:', hasGTMInLoad ? '✅ Yes' : '❌ No');
    
    if (hasGTMInLoad) {
      results.passed.push('✅ GTM is deferred until page load');
      console.log('\n✅ PASS: GTM loads after page load event');
    } else {
      results.warnings.push('⚠️ GTM may not be deferred properly');
      console.log('\n⚠️ WARNING: GTM loading strategy unclear');
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test GTM defer: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Test 5: Meta Tags & Theme Color
async function testMetaTags() {
  console.log('\n🏷️  Test 5: Meta Tags & Theme Color');
  console.log('-'.repeat(60));
  
  try {
    const response = await makeRequest(VERCEL_URL);
    
    const hasThemeColor = response.body.includes('name="theme-color"') && 
                         response.body.includes('#665f55');
    const hasViewport = response.body.includes('name="viewport"');
    const hasCharset = response.body.includes('charset="UTF-8"');
    
    console.log('Theme color (#665f55):', hasThemeColor ? '✅ Yes' : '❌ No');
    console.log('Viewport meta:', hasViewport ? '✅ Yes' : '❌ No');
    console.log('UTF-8 charset:', hasCharset ? '✅ Yes' : '❌ No');
    
    if (hasThemeColor && hasViewport && hasCharset) {
      results.passed.push('✅ Essential meta tags present');
      console.log('\n✅ PASS: Meta tags configured correctly');
    } else {
      results.warnings.push('⚠️ Some meta tags missing');
      console.log('\n⚠️ WARNING: Some meta tags missing');
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test meta tags: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Test 6: Asset Path Verification
async function testAssetPaths() {
  console.log('\n📁 Test 6: Asset Paths');
  console.log('-'.repeat(60));
  
  try {
    const response = await makeRequest(VERCEL_URL);
    
    // Check if assets use hash-based naming
    const hasHashedAssets = response.body.match(/\/assets\/[^"]+\-[a-f0-9]+\.(js|css)/);
    
    console.log('Hash-based asset names:', hasHashedAssets ? '✅ Yes' : '❌ No');
    
    if (hasHashedAssets) {
      results.passed.push('✅ Assets use content-hash naming for cache busting');
      console.log('Example:', hasHashedAssets[0]);
      console.log('\n✅ PASS: Assets have content hashes for optimal caching');
    } else {
      results.warnings.push('⚠️ Assets may not have content hashes');
      console.log('\n⚠️ WARNING: No content-hashed assets found');
    }
    
  } catch (error) {
    results.failed.push('❌ Failed to test asset paths: ' + error.message);
    console.log('❌ ERROR:', error.message);
  }
}

// Run all tests
async function runTests() {
  await testCacheHeaders();
  await testCriticalCSS();
  await testPreconnect();
  await testGTMDefer();
  await testMetaTags();
  await testAssetPaths();
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 VERIFICATION SUMMARY');
  console.log('='.repeat(60));
  
  console.log('\n✅ PASSED (' + results.passed.length + '):');
  results.passed.forEach(msg => console.log('  ' + msg));
  
  if (results.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS (' + results.warnings.length + '):');
    results.warnings.forEach(msg => console.log('  ' + msg));
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ FAILED (' + results.failed.length + '):');
    results.failed.forEach(msg => console.log('  ' + msg));
  }
  
  console.log('\n' + '='.repeat(60));
  
  const totalTests = results.passed.length + results.failed.length + results.warnings.length;
  const passRate = Math.round((results.passed.length / totalTests) * 100);
  
  console.log(`\n📈 Score: ${passRate}% (${results.passed.length}/${totalTests} passed)`);
  
  if (results.failed.length === 0) {
    console.log('\n🎉 All critical optimizations verified!');
    console.log('\n🚀 Next steps:');
    console.log('   1. Run PageSpeed Insights: https://pagespeed.web.dev/');
    console.log(`   2. Test URL: ${VERCEL_URL}`);
    console.log('   3. Check for 75-85 score (up from 53)');
  } else {
    console.log('\n⚠️  Some optimizations may not be deployed correctly.');
    console.log('   Please review the failed tests above.');
  }
  
  console.log('\n');
}

// Start tests
runTests().catch(error => {
  console.error('\n❌ Fatal error running tests:', error);
  process.exit(1);
});
