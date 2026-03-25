import { LOCATIONS } from '../utils/constants';

// x/y calibrated to landmark centers in map-bg.jpg (1440x900 viewport)
// Adjust x/y here if a hotspot feels off after viewing in browser

export const locations = [
  { id: LOCATIONS.FORTRESS,   label: 'The Fortress',   sub: 'About Me',       x: '18%',  y: '28%', sound: 'bell' },
  { id: LOCATIONS.TREASURY,   label: 'The Treasury',   sub: 'Projects',       x: '70%',  y: '35%', sound: 'chest-creak' },
  { id: LOCATIONS.TAVERN,     label: 'The Tavern',     sub: 'Skills',         x: '44%',  y: '41%', sound: 'mugs-rattle' },
  { id: LOCATIONS.HARBOR,     label: 'The Harbor',     sub: 'Contact',        x: '47%',  y: '70%', sound: 'cork-pop' },
  { id: LOCATIONS.RUINS,      label: 'Ancient Ruins',  sub: 'Experience',     x: '20%',  y: '57%', sound: 'stone-scrape' },
  { id: LOCATIONS.LIGHTHOUSE, label: 'The Lighthouse', sub: 'Current Work',   x: '82%',  y: '65%', sound: 'bell' },
];
