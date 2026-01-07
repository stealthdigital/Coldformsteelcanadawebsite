# Batch Download All Images from Figma Make

## Instructions

1. **Open your site in Figma Make** (make sure all pages are loaded with images visible)
2. **Open Browser Console** (F12 or Right-click → Inspect → Console tab)
3. **Paste the script below** and press Enter
4. **All images will download automatically** to your Downloads folder

---

## Console Script

```javascript
// Batch download all images from the page
(async function downloadAllImages() {
  console.log('🚀 Starting image download...');
  
  // Find all img elements on the page
  const images = document.querySelectorAll('img');
  const downloaded = new Set();
  let count = 0;
  
  // Helper function to download an image
  async function downloadImage(url, filename) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      
      console.log(`✅ Downloaded: ${filename}`);
      count++;
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error);
    }
  }
  
  // Extract filename from URL
  function getFilename(src) {
    // For GitHub raw URLs
    if (src.includes('raw.githubusercontent.com')) {
      const parts = src.split('/');
      return parts[parts.length - 1];
    }
    // For figma:asset or blob URLs, check data attribute
    return null;
  }
  
  // Process each image
  for (const img of images) {
    const src = img.src || img.getAttribute('src');
    if (!src) continue;
    
    const filename = getFilename(src);
    
    // Skip if already downloaded or no valid filename
    if (!filename || downloaded.has(filename)) continue;
    
    // Only download PNG files
    if (!filename.endsWith('.png')) continue;
    
    downloaded.add(filename);
    
    // Add small delay to avoid overwhelming the browser
    await new Promise(resolve => setTimeout(resolve, 100));
    await downloadImage(src, filename);
  }
  
  console.log(`\n🎉 Download complete! ${count} images downloaded.`);
  console.log('📁 Check your Downloads folder.');
})();
```

---

## Alternative: Download from Multiple Pages

If you need to download images from different pages (Home, Piccolo, Medio, etc.), use this enhanced script:

```javascript
// Navigate through pages and download all images
(async function downloadFromAllPages() {
  console.log('🚀 Starting multi-page image download...');
  
  const downloaded = new Set();
  let totalCount = 0;
  
  // Helper function to download an image
  async function downloadImage(url, filename) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      
      console.log(`✅ Downloaded: ${filename}`);
      totalCount++;
      return true;
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error);
      return false;
    }
  }
  
  // Extract filename from URL
  function getFilename(src) {
    if (src.includes('raw.githubusercontent.com')) {
      const parts = src.split('/');
      return parts[parts.length - 1];
    }
    return null;
  }
  
  // Scan current page for images
  function scanPage() {
    const images = document.querySelectorAll('img');
    const found = [];
    
    images.forEach(img => {
      const src = img.src || img.getAttribute('src');
      if (!src) return;
      
      const filename = getFilename(src);
      if (filename && filename.endsWith('.png') && !downloaded.has(filename)) {
        found.push({ src, filename });
        downloaded.add(filename);
      }
    });
    
    return found;
  }
  
  // Download images from current page
  const imagesToDownload = scanPage();
  console.log(`📸 Found ${imagesToDownload.length} unique images on this page`);
  
  for (const { src, filename } of imagesToDownload) {
    await new Promise(resolve => setTimeout(resolve, 100));
    await downloadImage(src, filename);
  }
  
  console.log(`\n🎉 Download complete! ${totalCount} images downloaded from this page.`);
  console.log('📁 Check your Downloads folder.');
  console.log('\n💡 TIP: Navigate to another page (Piccolo, Medio, etc.) and run this script again to download those images!');
})();
```

---

## Step-by-Step Process

### 1. **Download from Home Page**
   - Open Figma Make with your site
   - Make sure you're on the **Home** page
   - Open Console (F12)
   - Paste the multi-page script above
   - Press Enter
   - Wait for downloads to complete

### 2. **Download from Piccolo Page**
   - Click to navigate to **Piccolo** page
   - Open Console again (F12)
   - Paste the script again
   - Press Enter
   - Wait for downloads

### 3. **Download from Medio Page**
   - Navigate to **Medio** page
   - Run script again

### 4. **Download from Success Stories**
   - Navigate to **Success Stories** page
   - Run script again

### 5. **Download from About Page**
   - Navigate to **About** page
   - Run script again

### 6. **Download from Learning Center**
   - Navigate to **Learning Center** page
   - Run script again

---

## If This Doesn't Work...

### Alternative Method: Check the Build/Compiled Files

The images might be in your browser's cache. You can:

1. Open **DevTools** → **Network** tab
2. Reload the page
3. Filter by "Img" or "PNG"
4. Right-click each image → **Open in new tab** → **Save As**

OR

1. Check if Figma Make has a **`.figma`** or **build** folder where images are cached
2. Look in your browser's cache directory

---

## Troubleshooting

**If images don't download:**
- Make sure you can actually see the images on the page
- Check browser console for any errors
- Try the Network tab method instead
- Some images might be coming from blob URLs - in that case, they're in-memory and harder to batch download

**If filenames are wrong:**
- The script extracts filenames from the URL path
- For GitHub raw URLs, it grabs the last segment
- Make sure the URLs are in the expected format

---

## Next Steps

Once you have all images downloaded:
1. **Upload them to GitHub** assets branch at `public/assets/`
2. **Let me know** and I'll batch update all the code files
3. **Deploy** and everything will work! 🎉

Let me know if this works or if you need a different approach!
