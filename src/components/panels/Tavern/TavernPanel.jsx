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
      <div className={styles.chalkboard}>
        <p className={styles.boardTitle}>— Today&apos;s Specials —</p>
        <div className={styles.grid}>
          {skills.map((cat) => (
            <div key={cat.category} className={styles.category}>
              <p className={styles.categoryName}>{cat.category}</p>
              {cat.items.map((item) => (
                <p key={item} className={styles.item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
        <p className={styles.note}>⚓ All skills battle-tested in the field ⚓</p>
      </div>
    </PanelBase>
  );
}
