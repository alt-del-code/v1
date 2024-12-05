// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';


import keystatic from '@keystatic/astro'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    markdoc(),
    sitemap(),
    partytown(),
    keystatic()
  ],

  output: 'static',
  site: 'https://www.krrishco.com',

  adapter: node({
    mode: 'standalone',
  }),


  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'utils': ['lodash'],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // Increase the limit to 1 MB
    },
    plugins: [
      inspect(),
      visualizer(),
    ],
  },
});
