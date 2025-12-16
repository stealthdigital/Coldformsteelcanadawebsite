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
          
          // Comprehensive image mapping for all figma:asset imports
          const imageMap: Record<string, string> = {
            // Logo images
            'e2e217c234df09ee63fb7874604664b6915f74ac': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '087975892a70159d9d57ef0b4d49661c5c139f2a': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '9c8f7e6d5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '1a5df16654a4eb18c1d923f59d0175c816f96be8': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '341e33826ef795d0cf2867c3001b627df15e31ff': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '308e1fbaa5498e6932bee902e6edee7720954263': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '58f51d3f6fcfbb103c76adbc254fe9642bf10499': 'https://images.unsplash.com/photo-1616627547584-bf28cfeeda1c?w=100&h=100&fit=crop',
            
            // Team photos
            'f7589f12c4db2294f1600532a47c3b3c990ffc90': '/images/john-montgomery.jpg',
            'cbd49745b46180bb74688c754b1d8afe7e13ec57': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
            
            // Hero/main barndominium images
            'be69edff5a1a525e997504d24005a866111a3d19': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '1534d6aaa1eca69e99668609af3c96393e80e966': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
            'e00ce6e3cc73c04afc4989646fb9f9054d73cd88': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
            '4086adfd0cdc60a711a4cce16e182090600d2d51': 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&h=800&fit=crop',
            
            // Steel frame/construction images
            '72fa0d47ef13aed1d663ccbb6c6149c415652f77': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            'dc9de3fb0501c6ceb5e552b7b552685d85966ce4': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
            'd6b984cca7b042e606ad1f86f1c8540696af3c17': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
            '7505e6b6a6239d497cabc2d4340489bd1ac0faf8': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            
            // Barndominium interior images
            'f2a4a5c29696696e91145cfa2d444ba6c5edf5a5': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            '9f0acc5c7e890427c625c5653ab85b4b601fb409': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            
            // Success stories - barndominiums
            'aacff60a0dee960bce3e9f2dfa6ecd9d84629639': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '8e7daa72db13e0e8f2f42704c35c5d61d7891ac8': 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop',
            'e7001ba6cd69df3fe6ec439ec2820d18206c204a': 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
            'c18247d0a2e78b3b94f97acddd951cddc94bf345': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
            '214ac2399f6f4485303d5bccf4e3d20e6d8cc609': 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop',
            '5a96fa1796f97f0d7aa97214ba3b92842ae9db13': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
            '959b57415ed7df36f148bc05eff8834daf23a217': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
            'aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
            
            // Construction progress images
            '632143e42a9e7ee5198a9013d8c9e5b93d9ff52a': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
            'f90143aaf5445284b979da88f06ec3d968d66199': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            'fc471085396f043972b02d4aa6be46a2078cd48e': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            '576c7655791950676eddd0da9c3c0125d6cd74c0': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
            '64846704260d0eb1cfebdc620b2d0dec547636a3': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            '04fba96d554dc129a131c7352ff1ed21aed17007': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            '604ba87884f66932ee70916198c12ebf4c44d532': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
            'd4ffcbac615b35e584bf19cb477b2a3a6edae199': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            '65a978eccbb1dd8fbcd7782b8b3f15bb82f535cd': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            'b9457d5a92868ea5d93851b39c051f373f0bc005': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
            'a621d3474314d0f8f139ec7dd9169b7d441e810e': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            'd94781aca3185365c60ea20abb6d69825b2963cc': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            '4ae865b967d9b1b07dfc53f5760debb82de0cf51': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
            
            // Completed structure images
            '8af7b9cdc50d1a286a7ba349768a82907ac344ef': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '3480b0cf0b6f4d8044196434b9dd06038116a16d': 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop',
            '891200f3ff291e09071137dac4750ea2f5e370ec': 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
            'c8e5d28af9b150f96722af78c2c8f55dfe1d6af5': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
            
            // Interior completed images
            'd3f905f3df42420f63c382b18247cfd02b81262d': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            '66b337a09c565b9b10af72dba42ed38d91e07414': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            '12897dbc20c79a3247d7fe5c26dd7cc9b3306fbe': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            '3fe80284fb6c9a14c9dfa89c26d8799be9797946': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            '4ca0b78ed17571d01a141ea14baa346e7372f60e': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            'ffe1a9dd6e8a415b55c5fa9f58f7b148c9457055': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            
            // Piccolo model images
            '844d2d716a993ccf645a794b3281b70d5d79a1d2': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '95e93dc5316acea9878c72436d4e188d60727938': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            '1a896eefd584d3d91dd49b92f1e75c37939fa06b': 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
            'a77b20ea4e6056975c9ebb783a9c1bf722bbf8f6': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
            '07bced32403e8bd0a9bea3c4961cf6387656bb84': 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop',
            '06178c66638be76ab58cc8c7e0f753f013f2e45a': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
            '2164fcfaf5eb44ba0b67cb1678e8b224458e7416': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
            '927a325977fabee021225568913c084a19f62b14': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            'e1f5f36156d2eeb13a420863c28bc34e9cf37a63': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            '42bed543e046536bdec86787caa96134ef8df4c8': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'a58144f7cb23347bc6e39ab12b721c135b437a4f': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
            '1dc68e97bf2c4eabf1bd60f58dc64fa056d344e9': 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
            '56d14867b99a2a96a43d18d6f5b95d820f536ff4': 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
            
            // Medio model images
            'af0dd6c5b4708ec825b2cd1513303e049029d3e4': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
            'b2d43f00cef7cd1cd7786c99a21ddfa8daecebb6': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
            'eecc0661256fde0000ff71c6965c61ddf87ce69e': 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
            '9821142aecd0f3da12282a8b29d635e3241b4667': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            'eec46bb50c5886fb055b7ddb5d83074d7f826714': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
            '44733f4c0cf5a5ec7a59e0f5fc398e9b19b05af0': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            'd2dd2360f26b546f836027577c1f6813d83ccd6e': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
            'c73653098e539916c523133b27f99f278bf00728': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '6ad48409c6e0b09c0dfe38ae1683d16e75cddbda': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
            
            // Factory/manufacturing images
            '5174796def95c9abbc54f819407a23e9f77662ec': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
            '13662aeac833743f659e5f084e9bf4515cf8159f': 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop',
            '873d81c68dfb8cc6f4c6376fff3fe5797d4280dc': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop',
            '3d863aa7142c801184b8c5dac95fd34b0bf0b5d6': 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop',
            'b38d99f3cce51a1f7adac71237da673f3ea93032': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
          };
          
          const imageUrl = imageMap[assetHash] || `https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop&sig=${assetHash.slice(0, 8)}`;
          
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
