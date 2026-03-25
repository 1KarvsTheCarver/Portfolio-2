import { useRef, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useAudio } from '../../context/AudioContext';
import { locations } from '../../data/locations';
import { attachParallax } from '../../animations/mapAmbientAnimations';
import Hotspot from './Hotspot';
import CompassRose from './CompassRose';
import MapSVG from './MapSVG';
import MapAnimations from './MapAnimations';
import styles from './MapCanvas.module.css';

export default function MapCanvas({ children }) {
  const { setActiveLocation } = useNavigation();
  const { playSound } = useAudio();
  const mapLayerRef = useRef(null);

  useEffect(() => {
    return attachParallax(mapLayerRef.current);
  }, []);

  function handleHotspotClick(id) {
    const loc = locations.find((l) => l.id === id);
    if (loc?.sound) playSound(loc.sound);
    setActiveLocation(id);
  }

  return (
    <div className={styles.canvas} role="main" aria-label="Pirate map — click a location to explore">
      {/* Map layers: image + ambient animations share parallax wrapper */}
      <div ref={mapLayerRef} style={{ position: 'absolute', inset: 0 }}>
        <MapSVG />
        <MapAnimations />
      </div>

      {/* Interactive hotspots (absolutely positioned over SVG) */}
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
