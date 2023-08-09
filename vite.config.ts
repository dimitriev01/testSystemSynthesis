import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({}), viteTsconfigPaths(), svgrPlugin(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['product_icon.png'],
      manifest: {
        name: 'Market App',
        short_name: 'Market',
        description: 'A web application has been developed for viewing products from an online store using React, Typescript, Effector',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/product_icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/product_icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
        ]
      }
    }),
  ],
  build: {
    outDir: 'build',
    assetsDir: 'static',

    rollupOptions: {
      output: {
        assetFileNames: (fileInfo) => {
          if (fileInfo.name.endsWith('.css')) {
            return 'static/css/[name].[hash][extname]';
          }
          else if (/\.(svg|png|jpe?g|gif|webp)$/i.test(fileInfo.name)) {
            return 'static/img/[name].[hash][extname]';
          }
          else if (/\.(js)(\?.*)?$/.test(fileInfo.name)) {
            return 'static/js/[name].[hash][extname]';
          }
          else {
            return 'static/[name].[hash][extname]';
          }
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});