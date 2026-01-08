const fs = require('fs');
const path = require('path');

const directory = path.join(process.cwd(), 'public/assets/Models/Piccolo');

if (!fs.existsSync(directory)) {
  console.error(`Directory not found: ${directory}`);
  console.log('Please ensure you are running this script from the project root and that public/assets/Models/Piccolo exists.');
  process.exit(1);
}

const files = fs.readdirSync(directory);
let count = 0;

console.log(`Scanning ${directory} for files with spaces...`);

files.forEach(file => {
  // Skip if it's not a file or hidden
  if (file.startsWith('.')) return;
  
  // Replace spaces with hyphens, collapse multiple hyphens
  const newName = file.replace(/\s+/g, '-').replace(/-+/g, '-');
  
  if (file !== newName) {
    const oldPath = path.join(directory, file);
    const newPath = path.join(directory, newName);
    
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: "${file}" -> "${newName}"`);
      count++;
    } catch (err) {
      console.error(`❌ Error renaming "${file}": ${err.message}`);
    }
  }
});

if (count === 0) {
  console.log('No files needed renaming.');
} else {
  console.log(`Successfully renamed ${count} files.`);
}
