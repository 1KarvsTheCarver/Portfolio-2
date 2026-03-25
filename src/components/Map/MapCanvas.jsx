import { useNavigation } from '../../context/NavigationContext';
import { useAudio } from '../../context/AudioContext';
import { locations } from '../../data/locations';
import Hotspot from './Hotspot';
import CompassRose from './CompassRose';
import styles from './MapCanvas.module.css';

export default function MapCanvas({ children }) {
  const { setActiveLocation } = useNavigation();
  const { playSound } = useAudio();

  function handleHotspotClick(id) {
    const loc = locations.find((l) => l.id === id);
    if (loc?.sound) playSound(loc.sound);
    setActiveLocation(id);
  }

  return (
    <div className={styles.canvas} role="main" aria-label="Pirate map — click a location to explore">
      {/* SVG grain filter */}
      <svg className={styles.filterSvg} aria-hidden="true">
        <defs>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Parchment */}
      <div className={styles.parchment} aria-hidden="true" />

      {/* SVG Map Decorations */}
      <svg className={styles.decorLayer} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Ocean wave borders */}
        <path d="M0,870 Q180,855 360,870 Q540,885 720,870 Q900,855 1080,870 Q1260,885 1440,870" fill="none" stroke="#8b6914" strokeWidth="1.5" opacity="0.4" />
        <path d="M0,880 Q180,865 360,880 Q540,895 720,880 Q900,865 1080,880 Q1260,895 1440,880" fill="none" stroke="#8b6914" strokeWidth="1" opacity="0.25" />
        <path d="M0,30 Q180,15 360,30 Q540,45 720,30 Q900,15 1080,30 Q1260,45 1440,30" fill="none" stroke="#8b6914" strokeWidth="1.5" opacity="0.4" />

        {/* Dotted paths between locations */}
        <path d="M259,342 Q400,310 1037,252" fill="none" stroke="#5c3a1e" strokeWidth="1.2" strokeDasharray="6,5" opacity="0.4" />
        <path d="M259,342 Q300,450 403,612" fill="none" stroke="#5c3a1e" strokeWidth="1.2" strokeDasharray="6,5" opacity="0.4" />
        <path d="M403,612 Q520,640 864,630" fill="none" stroke="#5c3a1e" strokeWidth="1.2" strokeDasharray="6,5" opacity="0.4" />
        <path d="M605,495 Q720,540 864,630" fill="none" stroke="#5c3a1e" strokeWidth="1.2" strokeDasharray="6,5" opacity="0.4" />
        <path d="M1037,252 Q1120,400 1152,468" fill="none" stroke="#5c3a1e" strokeWidth="1.2" strokeDasharray="6,5" opacity="0.4" />

        {/* Sea serpent (distant, bottom-right) */}
        <path d="M1100,780 Q1140,760 1160,775 Q1180,790 1200,770 Q1220,750 1250,765 Q1270,778 1290,760"
          fill="none" stroke="#5c3a1e" strokeWidth="2.5" opacity="0.2" strokeLinecap="round" />
        <circle cx="1095" cy="782" r="5" fill="#5c3a1e" opacity="0.18" />

        {/* Sailing ship */}
        <g transform="translate(750,120) scale(0.8)" opacity="0.25">
          <line x1="20" y1="60" x2="20" y2="10" stroke="#3b2008" strokeWidth="1.5" />
          <path d="M5,60 Q20,55 35,60 L30,45 Q20,42 10,45 Z" fill="#3b2008" />
          <path d="M10,45 Q20,30 30,45" fill="#5c3a1e" />
          <line x1="0" y1="60" x2="40" y2="60" stroke="#3b2008" strokeWidth="1.5" />
        </g>

        {/* Corner decorative scrollwork */}
        <text x="30" y="55" fontFamily="serif" fontSize="11" fill="#5c3a1e" opacity="0.35" fontStyle="italic">
          Here Be Wonders
        </text>
        <text x="1200" y="55" fontFamily="serif" fontSize="10" fill="#5c3a1e" opacity="0.3" fontStyle="italic">
          Anno Domini MMXXVI
        </text>
      </svg>

      {/* Vignette */}
      <div className={styles.vignette} aria-hidden="true" />

      {/* Hotspots */}
      <div className={styles.hotspotLayer}>
        {locations.map((loc, i) => (
          <Hotspot key={loc.id} location={loc} onClick={handleHotspotClick} index={i} />
        ))}
      </div>

      {/* Compass rose nav */}
      <CompassRose />

      {/* Panels render as children (overlaid) */}
      {children}
    </div>
  );
}
