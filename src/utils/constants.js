// Formspree form ID — set VITE_FORMSPREE_ID in .env or Netlify env vars
export const FORMSPREE_URL = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID'}`;

export const LOCATIONS = {
  FORTRESS:   'fortress',
  TREASURY:   'treasury',
  TAVERN:     'tavern',
  HARBOR:     'harbor',
  RUINS:      'ruins',
  LIGHTHOUSE: 'lighthouse',
};
