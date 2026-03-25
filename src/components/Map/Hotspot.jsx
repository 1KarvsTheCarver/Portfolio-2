import { useRef, useEffect } from 'react';
import { startHotspotPulse } from '../../animations/hotspotAnimations';
import styles from './Hotspot.module.css';

export default function Hotspot({ location, onClick, index }) {
  const dotRef = useRef(null);

  useEffect(() => {
    startHotspotPulse(dotRef.current, index * 0.22);
  }, [index]);

  return (
    <div
      className={styles.wrap}
      style={{ left: location.x, top: location.y }}
      onClick={() => onClick(location.id)}
      role="button"
      aria-label={`Navigate to ${location.label} — ${location.sub}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(location.id)}
    >
      <span className={styles.label}>
        {location.label}
        <span className={styles.sub}> ({location.sub})</span>
      </span>
    </div>
  );
}
