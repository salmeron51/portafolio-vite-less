import { defineConfig } from 'vite';
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./index.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ]
    },
    preprocessorOptions: {
      less: {}
    }
  },
  build: {
    minify: true
  }
});
