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
          // Extract the asset hash from figma:asset/hash.png
          const assetPath = id.replace('figma:asset/', '');
          // Return a resolved path - you'll need to provide actual image URLs or files
          return '\0virtual:figma-asset:' + assetPath;
        }
      },
      load(id) {
        if (id.startsWith('\0virtual:figma-asset:')) {
          // Use Unsplash placeholder images for demo purposes
          // In production, replace with actual hosted images or local files
          const assetHash = id.replace('\0virtual:figma-asset:', '').replace('.png', '');
          
          // Map specific assets to appropriate placeholder images
          const imageMap: Record<string, string> = {
            // Logo images
            'e2e217c234df09ee63fb7874604664b6915f74ac': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '1a5df16654a4eb18c1d923f59d0175c816f96be8': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '341e33826ef795d0cf2867c3001b627df15e31ff': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            '308e1fbaa5498e6932bee902e6edee7720954263': 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop',
            
            // Building/structure images
            'be69edff5a1a525e997504d24005a866111a3d19': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
            '1534d6aaa1eca69e99668609af3c96393e80e966': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
            'e00ce6e3cc73c04afc4989646fb9f9054d73cd88': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
            
            // Person photos
            'f7589f12c4db2294f1600532a47c3b3c990ffc90': '/images/john-montgomery.jpg',
            'cbd49745b46180bb74688c754b1d8afe7e13ec57': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
            
            // Steel frame/construction images
            '72fa0d47ef13aed1d663ccbb6c6149c415652f77': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
            'dc9de3fb0501c6ceb5e552b7b552685d85966ce4': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
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