# Assets Folder

This folder contains production images for the Cold Form Steel Canada website.

## Important: Two-Branch System

Images are stored in the **`assets` branch** on GitHub, NOT in Figma Make.

- **`main` branch**: Code (pushed from Figma Make)
- **`assets` branch**: Images (uploaded to GitHub)

## Upload Your Images (One-Time Setup)

1. Go to GitHub repository
2. **Switch to `assets` branch**
3. Navigate to this folder (`/public/assets/`)
4. Upload these PNG files with exact names:

### Required Images:

1. `e2e217c234df09ee63fb7874604664b6915f74ac.png` - Company logo
2. `1a5df16654a4eb18c1d923f59d0175c816f96be8.png` - FrameCAD logo
3. `341e33826ef795d0cf2867c3001b627df15e31ff.png` - Steelbuilt logo
4. `308e1fbaa5498e6932bee902e6edee7720954263.png` - CFSC logo
5. `58f51d3f6fcfbb103c76adbc254fe9642bf10499.png` - Maple leaf icon
6. `be69edff5a1a525e997504d24005a866111a3d19.png` - Piccolo model
7. `1534d6aaa1eca69e99668609af3c96393e80e966.png` - Medio model
8. `e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png` - Hero background

## How It Works

When you push from Figma Make:
1. ✅ Code updates on `main` branch
2. ✅ Vercel builds the site
3. ✅ Build script pulls images from `assets` branch automatically
4. ✅ **Your images are never deleted!**

See `/DEPLOYMENT_GUIDE.md` for full instructions.
