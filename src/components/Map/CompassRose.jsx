import { useNavigation } from '../../context/NavigationContext';
import { locations } from '../../data/locations';
import { LOCATIONS } from '../../utils/constants';
import styles from './CompassRose.module.css';

// Positions for 6 location buttons arranged around the rose
const POSITIONS = [
  { id: LOCATIONS.FORTRESS,   style: { top: '-18px', left: '50%', transform: 'translateX(-50%)' } },
  { id: LOCATIONS.TREASURY,   style: { top: '20%', right: '-52px' } },
  { id: LOCATIONS.TAVERN,     style: { bottom: '20%', right: '-46px' } },
  { id: LOCATIONS.HARBOR,     style: { bottom: '-18px', left: '50%', transform: 'translateX(-50%)' } },
  { id: LOCATIONS.RUINS,      style: { bottom: '20%', left: '-48px' } },
  { id: LOCATIONS.LIGHTHOUSE, style: { top: '20%', left: '-56px' } },
];

export default function CompassRose() {
  const { setActiveLocation } = useNavigation();

  return (
    <div className={styles.wrap} aria-label="Compass navigation">
      {/* SVG compass rose */}
      <svg className={styles.rose} viewBox="0 0 100 100" aria-hidden="true">
        {/* Outer ring */}
        <circle cx="50" cy="50" r="47" fill="none" stroke="#8b6914" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="50" r="40" fill="rgba(201,162,39,0.08)" stroke="#c9a227" strokeWidth="0.8" opacity="0.5" />
        {/* Cardinal points */}
        <polygon points="50,5 46,48 50,44 54,48" fill="#c9a227" opacity="0.9" />
        <polygon points="50,95 46,52 50,56 54,52" fill="#8b6914" opacity="0.7" />
        <polygon points="5,50 48,46 44,50 48,54" fill="#8b6914" opacity="0.7" />
        <polygon points="95,50 52,46 56,50 52,54" fill="#c9a227" opacity="0.9" />
        {/* Ordinal points */}
        {[45, 135, 225, 315].map((deg) => (
          <line key={deg}
            x1="50" y1="50"
            x2={50 + 34 * Math.cos((deg * Math.PI) / 180)}
            y2={50 + 34 * Math.sin((deg * Math.PI) / 180)}
            stroke="#c9a227" strokeWidth="0.8" opacity="0.5"
          />
        ))}
        {/* Center */}
        <circle cx="50" cy="50" r="5" fill="#c9a227" opacity="0.9" />
        <circle cx="50" cy="50" r="2.5" fill="#1e0f00" opacity="0.8" />
        {/* N label */}
        <text x="50" y="18" textAnchor="middle" fontSize="8" fontFamily="Cinzel, serif" fill="#c9a227" opacity="0.9">N</text>
      </svg>

      {/* Nav buttons (counter-rotate to stay readable) */}
      <div className={styles.menu}>
        {POSITIONS.map(({ id, style }) => {
          const loc = locations.find((l) => l.id === id);
          return (
            <button
              key={id}
              className={styles.navBtn}
              style={{ position: 'absolute', ...style }}
              onClick={() => setActiveLocation(id)}
              aria-label={`Go to ${loc?.label}`}
            >
              {loc?.label?.split(' ').slice(-1)[0]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
