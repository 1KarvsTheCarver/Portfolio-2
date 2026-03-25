import { useEffect } from 'react';
import PanelBase from '../PanelBase/PanelBase';
import { useAudio } from '../../../context/AudioContext';
import { useNavigation } from '../../../context/NavigationContext';
import { LOCATIONS } from '../../../utils/constants';
import styles from './LighthousePanel.module.css';

export default function LighthousePanel() {
  const { activeLocation } = useNavigation();
  const { playSound } = useAudio();

  useEffect(() => {
    if (activeLocation === LOCATIONS.LIGHTHOUSE) playSound('bell');
  }, [activeLocation, playSound]);

  return (
    <PanelBase locationId={LOCATIONS.LIGHTHOUSE} title="🔦 The Lighthouse — Current Focus">
      <div className={styles.scene}>
        {/* Animated beacon */}
        <div className={styles.beacon} aria-hidden="true">
          <div className={styles.fog} />
          <div className={styles.sweep} />
          <div className={styles.beaconTower}>🗼</div>
        </div>

        <div className={styles.content}>
          <div className={styles.focusCard}>
            <h4 className={styles.cardTitle}>⚡ Currently Charting</h4>
            <p className={styles.cardBody}>
              Actively pursuing my B.S. in Software Engineering at Western Governors University while continuing
              freelance web development work. Currently building out interactive portfolio experiences and sharpening
              full-stack skills.
            </p>
          </div>

          <div className={styles.focusCard}>
            <h4 className={styles.cardTitle}>🧭 Open to Opportunities</h4>
            <p className={styles.cardBody}>
              Seeking IT Support (Tier 1–2), Help Desk, or junior web development roles. Available evenings,
              weekends, and holidays — including on-call Saturdays &amp; Sundays (EST). Open to remote and hybrid positions.
            </p>
          </div>

          <div className={styles.focusCard}>
            <h4 className={styles.cardTitle}>🏴‍☠️ Current Crew Projects</h4>
            <p className={styles.cardBody}>
              Managing <strong>shujaacollective.store</strong> (Shopify), collaborating with Helm Bots on Telegram
              bot infrastructure, and building creative portfolio sites like the one you&apos;re exploring now.
            </p>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/1KarvsTheCarver" target="_blank" rel="noopener noreferrer"
              className={styles.link} aria-label="GitHub profile (opens in new tab)">
              ⚓ GitHub
            </a>
            <a href="https://linkedin.com/in/taqee-moore" target="_blank" rel="noopener noreferrer"
              className={styles.link} aria-label="LinkedIn profile (opens in new tab)">
              🗺 LinkedIn
            </a>
            <a href="mailto:1karvsthecarver@gmail.com" className={styles.link}
              aria-label="Send email to Taqee Moore">
              ✉ Email Me
            </a>
          </div>
        </div>
      </div>
    </PanelBase>
  );
}
