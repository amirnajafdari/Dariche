// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://daricheh.co.uk',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  // Lets parents style child components via the class prop
  scopedStyleStrategy: 'class',
});
