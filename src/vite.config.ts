import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          const assetPath = id.replace('figma:asset/', '');
          return '\0virtual:figma-asset:' + assetPath;
        }
      },
      load(id) {
        if (id.startsWith('\0virtual:figma-asset:')) {
          const assetHash = id.replace('\0virtual:figma-asset:', '').replace('.png', '');
          
          // For production: Try to use local images first, then fall back to Unsplash
          // Images should be placed in /public/assets/ folder with their hash as filename
          // Example: /public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png
          
          // Comprehensive image mapping for all figma:asset imports
          const imageMap: Record<string, string> = {
            // Logo images - Using /src/images/ (uploaded to GitHub)
            'e2e217c234df09ee63fb7874604664b6915f74ac': '/src/images/e2e217c234df09ee63fb7874604664b6915f74ac.png',
            '1a5df16654a4eb18c1d923f59d0175c816f96be8': '/src/images/1a5df16654a4eb18c1d923f59d0175c816f96be8.png',
            '341e33826ef795d0cf2867c3001b627df15e31ff': '/src/images/341e33826ef795d0cf2867c3001b627df15e31ff.png',
            '308e1fbaa5498e6932bee902e6edee7720954263': '/src/images/308e1fbaa5498e6932bee902e6edee7720954263.png',
            '58f51d3f6fcfbb103c76adbc254fe9642bf10499': '/src/images/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png',
            
            // Fallback logos (not uploaded yet - will use Unsplash)
            '087975892a70159d9d57ef0b4d49661c5c139f2a': '/assets/087975892a70159d9d57ef0b4d49661c5c139f2a.png',
            '9c8f7e6d5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d': '/assets/9c8f7e6d5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d.png',
            '1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b': '/assets/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.png',
            
            // Team photos
            'f7589f12c4db2294f1600532a47c3b3c990ffc90': '/images/john-montgomery.jpg',
            'cbd49745b46180bb74688c754b1d8afe7e13ec57': '/assets/cbd49745b46180bb74688c754b1d8afe7e13ec57.png',
            
            // Hero/main barndominium images - Using /src/images/ (uploaded)
            'be69edff5a1a525e997504d24005a866111a3d19': '/src/images/be69edff5a1a525e997504d24005a866111a3d19.png',
            '1534d6aaa1eca69e99668609af3c96393e80e966': '/src/images/1534d6aaa1eca69e99668609af3c96393e80e966.png',
            'e00ce6e3cc73c04afc4989646fb9f9054d73cd88': '/src/images/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png',
            '4086adfd0cdc60a711a4cce16e182090600d2d51': '/assets/4086adfd0cdc60a711a4cce16e182090600d2d51.png',
            
            // Steel frame/construction images
            '72fa0d47ef13aed1d663ccbb6c6149c415652f77': '/assets/72fa0d47ef13aed1d663ccbb6c6149c415652f77.png',
            'dc9de3fb0501c6ceb5e552b7b552685d85966ce4': '/assets/dc9de3fb0501c6ceb5e552b7b552685d85966ce4.png',
            'd6b984cca7b042e606ad1f86f1c8540696af3c17': '/assets/d6b984cca7b042e606ad1f86f1c8540696af3c17.png',
            '7505e6b6a6239d497cabc2d4340489bd1ac0faf8': '/assets/7505e6b6a6239d497cabc2d4340489bd1ac0faf8.png',
            
            // Barndominium interior images
            'f2a4a5c29696696e91145cfa2d444ba6c5edf5a5': '/assets/f2a4a5c29696696e91145cfa2d444ba6c5edf5a5.png',
            '9f0acc5c7e890427c625c5653ab85b4b601fb409': '/assets/9f0acc5c7e890427c625c5653ab85b4b601fb409.png',
            
            // Success stories - barndominiums
            'aacff60a0dee960bce3e9f2dfa6ecd9d84629639': '/assets/aacff60a0dee960bce3e9f2dfa6ecd9d84629639.png',
            '8e7daa72db13e0e8f2f42704c35c5d61d7891ac8': '/assets/8e7daa72db13e0e8f2f42704c35c5d61d7891ac8.png',
            'e7001ba6cd69df3fe6ec439ec2820d18206c204a': '/assets/e7001ba6cd69df3fe6ec439ec2820d18206c204a.png',
            'c18247d0a2e78b3b94f97acddd951cddc94bf345': '/assets/c18247d0a2e78b3b94f97acddd951cddc94bf345.png',
            '214ac2399f6f4485303d5bccf4e3d20e6d8cc609': '/assets/214ac2399f6f4485303d5bccf4e3d20e6d8cc609.png',
            '5a96fa1796f97f0d7aa97214ba3b92842ae9db13': '/assets/5a96fa1796f97f0d7aa97214ba3b92842ae9db13.png',
            '959b57415ed7df36f148bc05eff8834daf23a217': '/assets/959b57415ed7df36f148bc05eff8834daf23a217.png',
            'aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d': '/assets/aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d.png',
            
            // Construction progress images
            '632143e42a9e7ee5198a9013d8c9e5b93d9ff52a': '/assets/632143e42a9e7ee5198a9013d8c9e5b93d9ff52a.png',
            'f90143aaf5445284b979da88f06ec3d968d66199': '/assets/f90143aaf5445284b979da88f06ec3d968d66199.png',
            'fc471085396f043972b02d4aa6be46a2078cd48e': '/assets/fc471085396f043972b02d4aa6be46a2078cd48e.png',
            '576c7655791950676eddd0da9c3c0125d6cd74c0': '/assets/576c7655791950676eddd0da9c3c0125d6cd74c0.png',
            '64846704260d0eb1cfebdc620b2d0dec547636a3': '/assets/64846704260d0eb1cfebdc620b2d0dec547636a3.png',
            '04fba96d554dc129a131c7352ff1ed21aed17007': '/assets/04fba96d554dc129a131c7352ff1ed21aed17007.png',
            '604ba87884f66932ee70916198c12ebf4c44d532': '/assets/604ba87884f66932ee70916198c12ebf4c44d532.png',
            'd4ffcbac615b35e584bf19cb477b2a3a6edae199': '/assets/d4ffcbac615b35e584bf19cb477b2a3a6edae199.png',
            '65a978eccbb1dd8fbcd7782b8b3f15bb82f535cd': '/assets/65a978eccbb1dd8fbcd7782b8b3f15bb82f535cd.png',
            'b9457d5a92868ea5d93851b39c051f373f0bc005': '/assets/b9457d5a92868ea5d93851b39c051f373f0bc005.png',
            'a621d3474314d0f8f139ec7dd9169b7d441e810e': '/assets/a621d3474314d0f8f139ec7dd9169b7d441e810e.png',
            'd94781aca3185365c60ea20abb6d69825b2963cc': '/assets/d94781aca3185365c60ea20abb6d69825b2963cc.png',
            '4ae865b967d9b1b07dfc53f5760debb82de0cf51': '/assets/4ae865b967d9b1b07dfc53f5760debb82de0cf51.png',
            
            // Completed structure images
            '8af7b9cdc50d1a286a7ba349768a82907ac344ef': '/assets/8af7b9cdc50d1a286a7ba349768a82907ac344ef.png',
            '3480b0cf0b6f4d8044196434b9dd06038116a16d': '/assets/3480b0cf0b6f4d8044196434b9dd06038116a16d.png',
            '891200f3ff291e09071137dac4750ea2f5e370ec': '/assets/891200f3ff291e09071137dac4750ea2f5e370ec.png',
            'c8e5d28af9b150f96722af78c2c8f55dfe1d6af5': '/assets/c8e5d28af9b150f96722af78c2c8f55dfe1d6af5.png',
            
            // Interior completed images
            'd3f905f3df42420f63c382b18247cfd02b81262d': '/assets/d3f905f3df42420f63c382b18247cfd02b81262d.png',
            '66b337a09c565b9b10af72dba42ed38d91e07414': '/assets/66b337a09c565b9b10af72dba42ed38d91e07414.png',
            '12897dbc20c79a3247d7fe5c26dd7cc9b3306fbe': '/assets/12897dbc20c79a3247d7fe5c26dd7cc9b3306fbe.png',
            '3fe80284fb6c9a14c9dfa89c26d8799be9797946': '/assets/3fe80284fb6c9a14c9dfa89c26d8799be9797946.png',
            '4ca0b78ed17571d01a141ea14baa346e7372f60e': '/assets/4ca0b78ed17571d01a141ea14baa346e7372f60e.png',
            'ffe1a9dd6e8a415b55c5fa9f58f7b148c9457055': '/assets/ffe1a9dd6e8a415b55c5fa9f58f7b148c9457055.png',
            
            // Piccolo model images
            '844d2d716a993ccf645a794b3281b70d5d79a1d2': '/assets/844d2d716a993ccf645a794b3281b70d5d79a1d2.png',
            '95e93dc5316acea9878c72436d4e188d60727938': '/assets/95e93dc5316acea9878c72436d4e188d60727938.png',
            '1a896eefd584d3d91dd49b92f1e75c37939fa06b': '/assets/1a896eefd584d3d91dd49b92f1e75c37939fa06b.png',
            'a77b20ea4e6056975c9ebb783a9c1bf722bbf8f6': '/assets/a77b20ea4e6056975c9ebb783a9c1bf722bbf8f6.png',
            '07bced32403e8bd0a9bea3c4961cf6387656bb84': '/assets/07bced32403e8bd0a9bea3c4961cf6387656bb84.png',
            '06178c66638be76ab58cc8c7e0f753f013f2e45a': '/assets/06178c66638be76ab58cc8c7e0f753f013f2e45a.png',
            '2164fcfaf5eb44ba0b67cb1678e8b224458e7416': '/assets/2164fcfaf5eb44ba0b67cb1678e8b224458e7416.png',
            '927a325977fabee021225568913c084a19f62b14': '/assets/927a325977fabee021225568913c084a19f62b14.png',
            'e1f5f36156d2eeb13a420863c28bc34e9cf37a63': '/assets/e1f5f36156d2eeb13a420863c28bc34e9cf37a63.png',
            '42bed543e046536bdec86787caa96134ef8df4c8': '/assets/42bed543e046536bdec86787caa96134ef8df4c8.png',
            'a58144f7cb23347bc6e39ab12b721c135b437a4f': '/assets/a58144f7cb23347bc6e39ab12b721c135b437a4f.png',
            '1dc68e97bf2c4eabf1bd60f58dc64fa056d344e9': '/assets/1dc68e97bf2c4eabf1bd60f58dc64fa056d344e9.png',
            '56d14867b99a2a96a43d18d6f5b95d820f536ff4': '/assets/56d14867b99a2a96a43d18d6f5b95d820f536ff4.png',
            
            // Medio model images
            'af0dd6c5b4708ec825b2cd1513303e049029d3e4': '/assets/af0dd6c5b4708ec825b2cd1513303e049029d3e4.png',
            'b2d43f00cef7cd1cd7786c99a21ddfa8daecebb6': '/assets/b2d43f00cef7cd1cd7786c99a21ddfa8daecebb6.png',
            'eecc0661256fde0000ff71c6965c61ddf87ce69e': '/assets/eecc0661256fde0000ff71c6965c61ddf87ce69e.png',
            '9821142aecd0f3da12282a8b29d635e3241b4667': '/assets/9821142aecd0f3da12282a8b29d635e3241b4667.png',
            'eec46bb50c5886fb055b7ddb5d83074d7f826714': '/assets/eec46bb50c5886fb055b7ddb5d83074d7f826714.png',
            '44733f4c0cf5a5ec7a59e0f5fc398e9b19b05af0': '/assets/44733f4c0cf5a5ec7a59e0f5fc398e9b19b05af0.png',
            'd2dd2360f26b546f836027577c1f6813d83ccd6e': '/assets/d2dd2360f26b546f836027577c1f6813d83ccd6e.png',
            'c73653098e539916c523133b27f99f278bf00728': '/assets/c73653098e539916c523133b27f99f278bf00728.png',
            '6ad48409c6e0b09c0dfe38ae1683d16e75cddbda': '/assets/6ad48409c6e0b09c0dfe38ae1683d16e75cddbda.png',
            
            // Factory/manufacturing images
            '5174796def95c9abbc54f819407a23e9f77662ec': '/assets/5174796def95c9abbc54f819407a23e9f77662ec.png',
            '13662aeac833743f659e5f084e9bf4515cf8159f': '/assets/13662aeac833743f659e5f084e9bf4515cf8159f.png',
            '873d81c68dfb8cc6f4c6376fff3fe5797d4280dc': '/assets/873d81c68dfb8cc6f4c6376fff3fe5797d4280dc.png',
            '3d863aa7142c801184b8c5dac95fd34b0bf0b5d6': '/assets/3d863aa7142c801184b8c5dac95fd34b0bf0b5d6.png',
            'b38d99f3cce51a1f7adac71237da673f3ea93032': '/assets/b38d99f3cce51a1f7adac71237da673f3ea93032.png',
          };
          
          // Use mapped path or default to /assets/{hash}.png
          const imageUrl = imageMap[assetHash] || `/assets/${assetHash}.png`;
          
          return `export default "${imageUrl}";`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            './components/ui/button.tsx',
            './components/ui/card.tsx',
            './components/ui/dialog.tsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});