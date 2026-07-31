import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://premier-demo.headbangermarketing.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
