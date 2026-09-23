// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/pricing': '/cijene',
    '/customers': '/klijenti',
    '/security': '/sigurnost',
    '/enterprise': '/za-firme',
    '/features': '/mogucnosti',
    '/features/product-overview': '/mogucnosti',
    '/features/procedures': '/mogucnosti/procedure',
    '/features/widgets': '/mogucnosti/widgeti',
    '/features/helpdesk': '/mogucnosti/helpdesk',
    '/features/backstage': '/mogucnosti/analitika',
    '/mogucnosti/pregled': '/mogucnosti',
    '/industry': '/industrije/web-trgovine',
    '/industry/retail': '/industrije/web-trgovine',
    '/industry/tech': '/industrije/tehnologija',
    '/industry/travel': '/industrije/turizam',
    '/industry/financial-services': '/industrije/zdravstvo-i-usluge',
    '/industrije': '/industrije/web-trgovine'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
