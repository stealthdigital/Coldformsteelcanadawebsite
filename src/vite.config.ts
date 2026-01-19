import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  plugins: [
    react(),
    {
      name: 'figma-asset-resolver',
      enforce: 'pre',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          const assetPath = id.replace('figma:asset/', '');
          return '\0virtual:figma-asset:' + assetPath;
        }
      },
      load(id) {
        if (id.startsWith('\0virtual:figma-asset:')) {
          const assetHash = id.replace('\0virtual:figma-asset:', '').replace('.png', '');
          
          // Map specific assets to your uploaded images in /public/assets/
          const assetMap: Record<string, string> = {
            // Company logo
            'e2e217c234df09ee63fb7874604664b6915f74ac': '/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png',
            
            // FrameCAD logo
            '1a5df16654a4eb18c1d923f59d0175c816f96be8': '/assets/1a5df16654a4eb18c1d923f59d0175c816f96be8.png',
            
            // Steelbuilt logo
            '341e33826ef795d0cf2867c3001b627df15e31ff': '/assets/341e33826ef795d0cf2867c3001b627df15e31ff.png',
            
            // CFSC logo
            '308e1fbaa5498e6932bee902e6edee7720954263': '/assets/308e1fbaa5498e6932bee902e6edee7720954263.png',
            
            // Maple leaf icon
            '58f51d3f6fcfbb103c76adbc254fe9642bf10499': '/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png',
            
            // Piccolo model image
            'be69edff5a1a525e997504d24005a866111a3d19': '/assets/be69edff5a1a525e997504d24005a866111a3d19.png',
            
            // Medio model image
            '1534d6aaa1eca69e99668609af3c96393e80e966': '/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png',
            
            // Hero background image
            'e00ce6e3cc73c04afc4989646fb9f9054d73cd88': '/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png',
            
            // John Montgomery photo
            'f7589f12c4db2294f1600532a47c3b3c990ffc90': '/images/john-montgomery.jpg',
          };
          
          // If we have a specific mapping, use it
          if (assetMap[assetHash]) {
            return `export default "${assetMap[assetHash]}";`;
          }
          
          // For any other images, look for them in /assets/ folder
          return `export default "/assets/${assetHash}.png";`;
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
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    minify: 'terser', // Use terser for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    cssCodeSplit: true, // Split CSS into smaller chunks
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('react-helmet-async')) {
              return 'helmet';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Other node_modules go to vendor chunk
            return 'vendor';
          }
          
          // Split page components
          if (id.includes('/components/pages/')) {
            const match = id.match(/\/components\/pages\/([^/]+)\./);
            if (match) {
              return `page-${match[1].toLowerCase()}`;
            }
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 500, // Warn if chunks exceed 500KB
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
  },
});