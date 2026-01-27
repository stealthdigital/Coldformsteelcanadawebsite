# 📋 Cloudinary Filename Update Template

Use this template to quickly update `/config/cloudinary-urls.ts` with your actual Cloudinary filenames.

---

## 🔍 How to Find Your Cloudinary Filenames

### **Method 1: Cloudinary Media Library (Recommended)**
1. Go to: https://console.cloudinary.com/console/dj76bnpni/media_library
2. Search for the image name (e.g., "Piccolo" or "Learning Centre")
3. Click on the image
4. Look for **"Public ID"** - This is your filename
5. Copy and paste below

### **Method 2: Browser Network Tab**
1. Open your website
2. Open Chrome DevTools (F12) → Network tab
3. Reload the page
4. Look for images loading from `res.cloudinary.com`
5. Click on the image to see the full URL
6. Copy the filename portion

---

## 📝 Fill in Your Actual Filenames

Replace the placeholder filenames in `/config/cloudinary-urls.ts` with the actual ones from your Cloudinary account.

### **LOGOS** ✅ Status: Unknown
```
Current: CFSC-LogoV2_-_White_rzwfwq.png
Actual:  ________________________________ (update if different)
```

### **PICCOLO MODEL**
```typescript
// Exteriors - Dark
darkExterior1: CFS-Piccolo-Dark-Exterior-2_p5ewht.jpg ✅ (verified from your example)
darkExterior2: CFS-Piccolo-Dark-Exterior-6-2023-08-02_____
darkExterior3: CFS-Piccolo-East-Entry-Dark-Exterior-1-2023-09-07_____

// Exteriors - Light
lightExterior1: CFS-Piccolo-Light-Exterior-3-2023-08-02_vhmtwn.jpg ✅ (verified from your example)
lightExterior2: CFS-Piccolo-Light-Exterior-5-2023-08-02_____
lightExterior3: CFS-Piccolo-East-Entry-Light-Exterior-1-2023-09-07_____

// Interiors - Dark
darkInterior1: CFS-Piccolo-Dark-Interior-2-2023-08-02_____
darkInterior2: CFS-Piccolo-Dark-Interior-3-2023-08-02_____
darkInteriorBedroom: CFS-Piccolo-Dark-Interior-Bedroom-2023-08-02_____

// Interiors - Light
lightInterior1: CFS-Piccolo-Light-Interior-1-2023-08-02_____
lightInteriorBathroom1: CFS-Piccolo-Light-Interior-Bathroom-1-2023-08-02_____
lightInteriorBathroom2: CFS-Piccolo-Light-interior-Bathroom-2-2023-08-02_____
lightInteriorBedroom: CFS-Piccolo-Light-Interior-Bedroom-1-2023-08-02_____

// Floor Plan
floorPlan: PICCOLO-FLOOR-PLAN_____
```

### **MEDIO MODEL**
```typescript
// Exteriors - Dark
darkExterior1: Medio-Dark-Exterior-2_____
darkExterior2: Medio-Dark-Exterior-4_____
darkExterior3: Medio-Dark-Exterior-5_____

// Exteriors - Light
lightExterior1: Medio-Light-Exterior-3_____
lightExterior2: Medio-Light-Exterior-4_____

// Interiors - Dark
darkInterior1: Medio-Dark-Interior-1_____
darkInterior2: Medio-Dark-Interior-2_____
darkInterior3: Medio-Dark-Interior-3_____ (HERO IMAGE - high priority!)
darkInterior4: Medio-Dark-Interior-4_____

// Interiors - Light
lightInterior1: Medio-Light-Interior-1_____
lightInterior2: Medio-Light-Interior-2_dv2a2c.jpg ✅ (verified from your example)
lightInterior3: Medio-Light-Interior-3_____

// Floor Plan
floorPlan: MEDIO-FLOOR-PLAN_____
```

### **LEARNING CENTER**
```typescript
steelVsWood: Steel_vs._Wood-_Full_Breakdown_____
costDrivers: What_Drives_the_Cost_of_Your_Build_____
johnMontgomery: John_Montgomery_____
marcReynolds: Marc_Reynolds_____
factoryWallPanels: Wall_panels_engineered_and_assembled_in_our_factory_____
framecad: FrameCAD_____
framecadPartner: FrameCAD_Partner_____
labeledPanels: Each_panel_is_labeled_and_numbered_for_easy_onsite_assembly_____
galvanizedSteel: Galvanized_steel_features_a_zinc_coating_that_creates_a_protective_barrier_against_moisture_oxygen_and_corrosion_____
coldFormedSteel: Cold_formed_steel_framing_is_engineered_to_last_for_decades_in_Canadian_climates_e9eekf.jpg ✅ (verified from your example)
```

### **SUCCESS STORIES**
```typescript
// Steel-Built Barndo Retreat (Ste-Marthe)
steMartheCompleted: Completed_Barndominium_____ (HERO IMAGE - high priority!)

// Blue Mountain Steel Workshop
blueMountainCompleted: Completed_Steel_Building_-_Final_Result_____

// Family Barndominium (Bonfield)
bonfieldBarndo: Family_Barndominium_____

// Dual-Structure (Pownal)
pownalDualStructure: Dual_Structures_-_Barndominium___Garage_Complete_____

// Barndominium Kit Design and Delivery
barndominiumKitDesign: Barndominium_Kit_Design_and_Delivery_____
barndominiumKitPrecisionSteel: Precision_Steel_Ceiling_Framework_jzl9zo.png ✅ (verified from your example)
barndominiumKitProjectNearing: Project_Nearing_Completion_hv5zp_____
barndominiumKitWallPanel: Wall_Panel_Installation_-_Progress_____
barndominiumKitSteelFrame: Steel_Frame_Structures_with_Mezzanine_____
barndominiumKitTwoStoryWindow: Two-Story_Window_Installation_____
barndominiumKitNaturalLight: Natural_Light_and_Open_Space_____
barndominiumKitCompleted: Completed_Barndominium_at_Dusk_____

// Marvelous Barndominium (Sudbury)
sudburyBarndo: Marvelous_Barndominium_for_Northern_Living_____

// Modern Two-Story (Prince Edward County)
princeEdwardBarndo: Two-Tone_Blue_Exterior_with_Windows_____

// Fort Erie
fortErieBarndo: Completed_Fort_Erie_Barndominium_____

// Sister Barndominiums (Mossley)
mossleyBarndos: Sister_Barndominiums_____
```

### **TEAM PHOTOS**
```typescript
johnMontgomery: John_Montgomery_____ (probably same as Learning Center)
marcReynolds: Marc_Reynolds_____ (probably same as Learning Center)
```

---

## 🎯 Priority Order

Update these first for maximum impact:

### **1. High Priority (Visible on Main Pages)**
- ✅ Logo: `CFSC-LogoV2_-_White_____`
- 🔴 Hero Image (Home): `Medio-Dark-Interior-3_____`
- 🔴 Piccolo Card: `CFS-Piccolo-Dark-Exterior-2_p5ewht.jpg` ✅
- 🔴 Medio Card: `Medio-Dark-Exterior-2_____`
- 🔴 Success Stories Hero: `Completed_Barndominium_____`

### **2. Medium Priority (Model Pages)**
- Floor plans (Piccolo and Medio)
- Gallery images for model detail pages

### **3. Low Priority (Article Pages)**
- Learning Center article images
- Individual story detail images

---

## 📋 Quick Copy-Paste Format

Once you have your filenames, update `/config/cloudinary-urls.ts` like this:

```typescript
// Find the section (e.g., PiccoloURLs)
export const PiccoloURLs = {
  darkExterior1: cloudinary('CFS-Piccolo-Dark-Exterior-2_p5ewht.jpg', 'f_auto,q_auto,w_800'),
  darkExterior2: cloudinary('CFS-Piccolo-Dark-Exterior-6-2023-08-02_YOUR_SUFFIX_HERE.jpg', 'f_auto,q_auto,w_800'),
  // ... continue for all images
};
```

---

## ✅ How to Verify It's Working

1. **Update a filename** in `/config/cloudinary-urls.ts`
2. **Reload your website**
3. **Check the image loads** (right-click → "Open Image in New Tab")
4. **Verify the URL** starts with: `https://res.cloudinary.com/dj76bnpni/image/upload/`

---

## 🆘 If Images Still Don't Load

### **Check These Common Issues:**

1. **Wrong suffix?**
   - Cloudinary adds unique suffixes like `_p5ewht`
   - Make sure you copied the ENTIRE filename including the suffix

2. **Typo in the filename?**
   - Cloudinary is case-sensitive
   - Spaces become underscores
   - Special characters may change

3. **Image not uploaded?**
   - Verify the image exists in your Cloudinary Media Library

4. **Wrong transformation?**
   - Try removing transformations temporarily to test:
   ```typescript
   cloudinary('filename.jpg') // No transformation parameter
   ```

---

## 💡 Pro Tip: Bulk Update

If you have many images, you can:
1. Export your Cloudinary Media Library to CSV
2. Use find/replace in your code editor
3. Match original filenames → Cloudinary filenames with suffixes

---

Good luck with the migration! Once you update these filenames, your site will fly! 🚀
