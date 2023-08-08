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
      manifest: {
        name: 'Market App',
        short_name: 'Market',
        display: 'standalone',
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