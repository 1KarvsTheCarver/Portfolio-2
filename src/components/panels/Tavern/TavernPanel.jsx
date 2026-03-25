import { useEffect } from 'react';
import PanelBase from '../PanelBase/PanelBase';
import { useAudio } from '../../../context/AudioContext';
import { skills } from '../../../data/skills';
import { LOCATIONS } from '../../../utils/constants';
import styles from './TavernPanel.module.css';

export default function TavernPanel() {
  const { playSound, stopSound } = useAudio();

  useEffect(() => {
    playSound('mugs-rattle');
    return () => stopSound('mugs-rattle');
  }, [playSound, stopSound]);

  return (
    <PanelBase locationId={LOCATIONS.TAVERN} title="🍺 The Tavern — Skills">
      <div className={styles.board}>
        {skills.map((cat) => (
          <div key={cat.category} className={styles.section}>
            <p className={styles.categoryName}>{cat.category}</p>
            <ul className={styles.list}>
              {cat.items.map((item) => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PanelBase>
  );
}
