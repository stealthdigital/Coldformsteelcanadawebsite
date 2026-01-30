const fs = require('fs');
const path = require('path');

console.log('🔍 Checking current directory:', process.cwd());
console.log('🔍 Checking if build/ exists:', fs.existsSync('build'));
console.log('🔍 Checking if build/index.html exists:', fs.existsSync('build/index.html'));

if (fs.existsSync('build')) {
  const buildFiles = fs.readdirSync('build');
  console.log('📁 Files in build/:', buildFiles);
}

console.log('🔍 Checking if .vercel/output exists:', fs.existsSync('.vercel/output'));
console.log('🔍 Checking if .vercel/output/static exists:', fs.existsSync('.vercel/output/static'));

if (fs.existsSync('.vercel/output/static')) {
  const staticFiles = fs.readdirSync('.vercel/output/static');
  console.log('📁 Files in .vercel/output/static/:', staticFiles);
}
