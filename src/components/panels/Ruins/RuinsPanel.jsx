import { useRef, useEffect } from 'react';
import PanelBase from '../PanelBase/PanelBase';
import { useAudio } from '../../../context/AudioContext';
import { useNavigation } from '../../../context/NavigationContext';
import { animateRuinsStagger } from '../../../animations/locationAnimations';
import { experience } from '../../../data/experience';
import { LOCATIONS } from '../../../utils/constants';
import styles from './RuinsPanel.module.css';

export default function RuinsPanel() {
  const { activeLocation } = useNavigation();
  const { playSound } = useAudio();
  const tabletRefs = useRef([]);

  useEffect(() => {
    if (activeLocation === LOCATIONS.RUINS) {
      playSound('stone-scrape');
      // Small delay to let the panel slide in first
      const t = setTimeout(() => {
        animateRuinsStagger(tabletRefs.current.filter(Boolean));
      }, 400);
      return () => clearTimeout(t);
    }
  }, [activeLocation, playSound]);

  return (
    <PanelBase locationId={LOCATIONS.RUINS} title="🗿 Ancient Ruins — Experience">
      <div className={styles.timeline}>
        {experience.map((job, i) => (
          <div
            key={job.id}
            ref={(el) => (tabletRefs.current[i] = el)}
            className={styles.tablet}
            style={{ opacity: 0 }}
          >
            <div className={styles.divider} />
            <div className={styles.tabletTop}>
              <span className={styles.role}>{job.role}</span>
              <span className={styles.period}>{job.period}</span>
            </div>
            <div className={styles.company}>{job.company} · {job.type}</div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PanelBase>
  );
}
