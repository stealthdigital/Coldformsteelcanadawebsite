# 🐛 Figma Asset Import Issue - Quick Fix

## **Problem**
You're seeing black screens because many components use `figma:asset` imports which don't work in Next.js.

**Affected Pages:**
- Learning Centre ✅ FIXED
- Models & Pricing ❌ Will black screen
- Success Stories ❌ Will black screen
- About ❌ Will black screen
- Piccolo ❌ Will black screen
- Medio ❌ Will black screen
- Several article pages ❌ Will black screen

## **Why This Happens**
`figma:asset` is a Vite-specific virtual module that Figma Make uses. Next.js doesn't understand it.

## **The Solution**

You have 2 options:

### **OPTION 1: Use the 8 GitHub Images You Already Have** ⭐ RECOMMENDED

You already uploaded 8 critical images to GitHub that work in production. We can use those for now:

```
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png (Logo)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/308e1fbaa5498e6932bee902e6edee7720954263.png (CFSC Logo)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/1a5df16654a4eb18c1d923f59d0175c816f96be8.png (FrameCAD)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/341e33826ef795d0cf2867c3001b627df15e31ff.png (SteelBuilt)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png (Maple Leaf)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/be69edff5a1a525e997504d24005a866111a3d19.png (Piccolo)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png (Medio)
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png (Hero)
```

For the rest (100+ images), use Unsplash placeholders temporarily.

### **OPTION 2: Keep Testing in Vite for Now**

If you want to see all images working now:
- Revert Navigation to the old version
- Keep using Vite (`npm run dev` with Vite)
- Deploy Next.js version later after fixing all images

## **What I Recommend**

**Let me fix all the affected files right now** (10-15 minutes):
- Replace `figma:asset` imports with the 8 GitHub URLs where applicable  
- Use Unsplash placeholders for other images
- All pages will work, just with some temporary placeholder images

Then you can:
1. Test the full site in Next.js
2. Upload the remaining 100+ images to GitHub later
3. Replace placeholders with real images incrementally

**OR**

**Deploy what works now** and fix images page-by-page:
- Core pages work (Home, Contact, FAQ)
- Learning Centre works ✅
- Fix other pages gradually

---

## **Your Choice**

**Tell me:**

**"Fix all figma:asset imports now"**  
→ I'll replace all `figma:asset` with GitHub URLs + placeholders (10-15 min)  
→ All pages will work in Next.js  
→ Some images will be placeholders until you upload them

**"Let's just deploy what works"**  
→ Deploy the working pages  
→ Fix other pages one by one later

**"Revert to Vite for now"**  
→ I'll revert Navigation  
→ You can keep testing in Vite  
→ Do Next.js migration later when all images are ready

---

What would you like me to do?
