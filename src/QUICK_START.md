# Quick Start - Image Setup

## One-Time Setup (Do This Now)

### Step 1: Create Assets Branch
1. Go to GitHub → Your repository
2. Click branch dropdown → Type "assets" → Click "Create branch: assets from main"

### Step 2: Upload Images to Assets Branch
1. **Make sure you're on `assets` branch** ⚠️
2. Go to `/public/assets/` folder
3. Click "Add file" → "Upload files"
4. Upload these 8 PNG files (rename them to exact names):
   - `e2e217c234df09ee63fb7874604664b6915f74ac.png` - Company logo
   - `1a5df16654a4eb18c1d923f59d0175c816f96be8.png` - FrameCAD logo
   - `341e33826ef795d0cf2867c3001b627df15e31ff.png` - Steelbuilt logo
   - `308e1fbaa5498e6932bee902e6edee7720954263.png` - CFSC logo
   - `58f51d3f6fcfbb103c76adbc254fe9642bf10499.png` - Maple leaf
   - `be69edff5a1a525e997504d24005a866111a3d19.png` - Piccolo model
   - `1534d6aaa1eca69e99668609af3c96393e80e966.png` - Medio model
   - `e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png` - Hero image

5. Go to `/public/images/` folder
6. Upload: `john-montgomery.jpg`

### Step 3: Push from Figma Make
1. Push this code to GitHub
2. Wait for Vercel to build (~2 min)
3. ✅ **Done! Images will appear on your site**

## Daily Workflow

### Updating Code
- Push from Figma Make anytime
- Images automatically pulled from `assets` branch
- **Never need to re-upload images!**

### Adding New Images
- Switch to `assets` branch in GitHub
- Upload to `/public/assets/` or `/public/images/`
- Next build will include them automatically

---

See `/DEPLOYMENT_GUIDE.md` for detailed explanation.
