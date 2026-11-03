// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { MAINTENANCE } from './src/config.ts';

// Serves the homepage. While MAINTENANCE is on, a build (what deploys) gets the short notice instead,
// and only that file is built; `npm run dev` keeps the full page so work can go on locally.
/** @type {import('astro').AstroIntegration} */
const homepage = {
  name: 'celnu-homepage',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      const page = MAINTENANCE && command === 'build' ? '_maintenance' : '_home';
      injectRoute({ pattern: '/', entrypoint: `./src/pages/${page}.astro` });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://celnu.com',
  integrations: [homepage, sitemap()],
  devToolbar: { enabled: false },
});
