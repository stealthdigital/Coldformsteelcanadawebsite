# Image Export Guide for Vercel Deployment

## Current Status
Your site is currently using Unsplash placeholder images on Vercel. To use your actual Figma images, follow this guide.

## Step 1: Export Images from Figma Make

You need to download all images from your Figma Make project. Look for an "Export" or "Download Assets" option in Figma Make.

## Step 2: Organize Exported Images

Once you have the images downloaded, you need to place them in the `/public/assets/` folder of your GitHub repository.

### Image Naming Convention

Each image must be renamed to match its hash from the code. Here's the complete list of images you need:

**Logo Images:**
- e2e217c234df09ee63fb7874604664b6915f74ac.png (Main logo)
- 087975892a70159d9d57ef0b4d49661c5c139f2a.png (FrameCAD logo)
- 9c8f7e6d5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d.png (FrameCAD logo variant)
- 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.png (FrameCAD logo variant)
- 1a5df16654a4eb18c1d923f59d0175c816f96be8.png (FrameCAD logo final)
- 341e33826ef795d0cf2867c3001b627df15e31ff.png (Steelbuilt logo)
- 308e1fbaa5498e6932bee902e6edee7720954263.png (CFSC logo)
- 58f51d3f6fcfbb103c76adbc254fe9642bf10499.png (Maple leaf icon)

**Team Photos:**
- cbd49745b46180bb74688c754b1d8afe7e13ec57.png (Marc's photo)
- Note: f7589f12c4db2294f1600532a47c3b3c990ffc90 (John's photo) is already in /images/john-montgomery.jpg

**Barndominium Hero Images:**
- be69edff5a1a525e997504d24005a866111a3d19.png (Piccolo image)
- 1534d6aaa1eca69e99668609af3c96393e80e966.png (Medio image)
- e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png (Hero image)
- 4086adfd0cdc60a711a4cce16e182090600d2d51.png (Success stories hero)

**Steel Frame/Construction:**
- 72fa0d47ef13aed1d663ccbb6c6149c415652f77.png (Steel frame image)
- dc9de3fb0501c6ceb5e552b7b552685d85966ce4.png (FrameCAD machine)
- d6b984cca7b042e606ad1f86f1c8540696af3c17.png (FrameCAD machine article)
- 7505e6b6a6239d497cabc2d4340489bd1ac0faf8.png (Hybrid framing diagram)

**Interior Images:**
- f2a4a5c29696696e91145cfa2d444ba6c5edf5a5.png (Barn interior)
- 9f0acc5c7e890427c625c5653ab85b4b601fb409.png (Medio light interior)

**Success Stories - Barndominium Projects:**
- aacff60a0dee960bce3e9f2dfa6ecd9d84629639.png (Ste-Marthe barndo)
- 8e7daa72db13e0e8f2f42704c35c5d61d7891ac8.png (Blue Mountain shop)
- e7001ba6cd69df3fe6ec439ec2820d18206c204a.png (Bonfield barndo)
- c18247d0a2e78b3b94f97acddd951cddc94bf345.png (Pownal dual structure)
- 214ac2399f6f4485303d5bccf4e3d20e6d8cc609.png (DIY barndominium)
- 5a96fa1796f97f0d7aa97214ba3b92842ae9db13.png (Sudbury barndo)
- 959b57415ed7df36f148bc05eff8834daf23a217.png (Prince Edward barndo)
- aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d.png (Fort Erie barndo)

**Construction Progress:**
- 632143e42a9e7ee5198a9013d8c9e5b93d9ff52a.png
- f90143aaf5445284b979da88f06ec3d968d66199.png
- fc471085396f043972b02d4aa6be46a2078cd48e.png
- 576c7655791950676eddd0da9c3c0125d6cd74c0.png
- 64846704260d0eb1cfebdc620b2d0dec547636a3.png
- 04fba96d554dc129a131c7352ff1ed21aed17007.png
- 604ba87884f66932ee70916198c12ebf4c44d532.png
- d4ffcbac615b35e584bf19cb477b2a3a6edae199.png
- 65a978eccbb1dd8fbcd7782b8b3f15bb82f535cd.png
- b9457d5a92868ea5d93851b39c051f373f0bc005.png
- a621d3474314d0f8f139ec7dd9169b7d441e810e.png
- d94781aca3185365c60ea20abb6d69825b2963cc.png
- 4ae865b967d9b1b07dfc53f5760debb82de0cf51.png

**Completed Structures:**
- 8af7b9cdc50d1a286a7ba349768a82907ac344ef.png
- 3480b0cf0b6f4d8044196434b9dd06038116a16d.png
- 891200f3ff291e09071137dac4750ea2f5e370ec.png
- c8e5d28af9b150f96722af78c2c8f55dfe1d6af5.png

**Interior Completed:**
- d3f905f3df42420f63c382b18247cfd02b81262d.png
- 66b337a09c565b9b10af72dba42ed38d91e07414.png
- 12897dbc20c79a3247d7fe5c26dd7cc9b3306fbe.png
- 3fe80284fb6c9a14c9dfa89c26d8799be9797946.png
- 4ca0b78ed17571d01a141ea14baa346e7372f60e.png
- ffe1a9dd6e8a415b55c5fa9f58f7b148c9457055.png

**Piccolo Model Images:**
- 844d2d716a993ccf645a794b3281b70d5d79a1d2.png
- 95e93dc5316acea9878c72436d4e188d60727938.png
- 1a896eefd584d3d91dd49b92f1e75c37939fa06b.png
- a77b20ea4e6056975c9ebb783a9c1bf722bbf8f6.png
- 07bced32403e8bd0a9bea3c4961cf6387656bb84.png
- 06178c66638be76ab58cc8c7e0f753f013f2e45a.png
- 2164fcfaf5eb44ba0b67cb1678e8b224458e7416.png
- 927a325977fabee021225568913c084a19f62b14.png
- e1f5f36156d2eeb13a420863c28bc34e9cf37a63.png
- 42bed543e046536bdec86787caa96134ef8df4c8.png
- a58144f7cb23347bc6e39ab12b721c135b437a4f.png
- 1dc68e97bf2c4eabf1bd60f58dc64fa056d344e9.png
- 56d14867b99a2a96a43d18d6f5b95d820f536ff4.png

**Medio Model Images:**
- af0dd6c5b4708ec825b2cd1513303e049029d3e4.png
- b2d43f00cef7cd1cd7786c99a21ddfa8daecebb6.png
- eecc0661256fde0000ff71c6965c61ddf87ce69e.png
- 9821142aecd0f3da12282a8b29d635e3241b4667.png
- eec46bb50c5886fb055b7ddb5d83074d7f826714.png
- 44733f4c0cf5a5ec7a59e0f5fc398e9b19b05af0.png
- d2dd2360f26b546f836027577c1f6813d83ccd6e.png
- c73653098e539916c523133b27f99f278bf00728.png
- 6ad48409c6e0b09c0dfe38ae1683d16e75cddbda.png

**Factory/Manufacturing:**
- 5174796def95c9abbc54f819407a23e9f77662ec.png
- 13662aeac833743f659e5f084e9bf4515cf8159f.png
- 873d81c68dfb8cc6f4c6376fff3fe5797d4280dc.png
- 3d863aa7142c801184b8c5dac95fd34b0bf0b5d6.png
- b38d99f3cce51a1f7adac71237da673f3ea93032.png

## Step 3: Upload to GitHub

1. Create the folder `/public/assets/` in your GitHub repository (if it doesn't exist)
2. Upload all renamed images to this folder
3. Commit and push to GitHub

## Step 4: Automatic Deployment

Once you push the images to GitHub, Vercel will automatically:
1. Detect the changes
2. Rebuild your site
3. Deploy with the real images

## Alternative: Quick Solution

If downloading 100+ images is too time-consuming for now:

**Option A - Use Unsplash placeholders for John's review**
The current Unsplash images are professional and relevant. John can review functionality and content.

**Option B - Upload only critical images**
Start with just these key images:
- Logo (e2e217c234df09ee63fb7874604664b6915f74ac.png)
- Hero image (e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png)
- A few success story images
- Marc's team photo

The rest will continue using placeholders until you have time to export them all.

## Need Help?

If you're having trouble finding how to export images from Figma Make, let me know and I can help troubleshoot!
