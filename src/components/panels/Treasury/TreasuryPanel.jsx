import { useState } from 'react';
import PanelBase from '../PanelBase/PanelBase';
import { useAudio } from '../../../context/AudioContext';
import { projects } from '../../../data/projects';
import { LOCATIONS } from '../../../utils/constants';
import styles from './TreasuryPanel.module.css';

export default function TreasuryPanel() {
  const { playSound } = useAudio();
  const [chestOpen, setChestOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function openChest() {
    if (chestOpen) return;
    setChestOpen(true);
    playSound('chest-creak');
  }

  function selectArtifact(proj) {
    setSelected(proj);
  }

  return (
    <PanelBase locationId={LOCATIONS.TREASURY} title="💰 The Treasury — Projects">
      {/* Treasure chest */}
      <div
        className={`${styles.chest} ${chestOpen ? styles.open : ''}`}
        onClick={openChest}
        role="button"
        aria-label={chestOpen ? 'Treasure chest opened' : 'Click to open the treasure chest'}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openChest()}
      >
        {chestOpen ? '📦✨' : '📦'}
      </div>

      {chestOpen && (
        <div className={styles.grid}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={styles.artifact}
              onClick={() => selectArtifact(proj)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${proj.title}`}
              onKeyDown={(e) => e.key === 'Enter' && selectArtifact(proj)}
            >
              <div className={styles.artifactIcon}>{proj.artifact}</div>
              <div className={styles.artifactTitle}>{proj.title}</div>
              <div className={styles.artifactSub}>{proj.subtitle}</div>
              <div className={styles.tags}>
                {proj.tags.slice(0, 3).map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail overlay */}
      {selected && (
        <div className={styles.detailOverlay} onClick={() => setSelected(null)}>
          <div className={styles.detailCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.artifactIcon}>{selected.artifact}</div>
            <h3 className={styles.detailTitle}>{selected.title}</h3>
            <p className={styles.detailSub}>{selected.subtitle}</p>
            <p className={styles.detailDesc}>{selected.description}</p>
            <div className={styles.tags} style={{ marginBottom: '1rem' }}>
              {selected.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <div className={styles.detailActions}>
              {selected.link && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  {selected.linkLabel}
                </a>
              )}
              <button className={styles.closeDetail} onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </PanelBase>
  );
}
