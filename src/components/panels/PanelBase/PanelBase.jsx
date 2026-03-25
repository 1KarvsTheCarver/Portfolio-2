import { useRef, useEffect } from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import { slideUpPanel, slideDownPanel } from '../../../animations/panelAnimations';
import styles from './PanelBase.module.css';

export default function PanelBase({ locationId, title, children }) {
  const { activeLocation, setActiveLocation } = useNavigation();
  const panelRef = useRef(null);
  const isOpen = activeLocation === locationId;

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) slideUpPanel(panelRef.current);
  }, [isOpen]);

  function handleClose() {
    slideDownPanel(panelRef.current, () => setActiveLocation(null));
  }

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={handleClose} aria-hidden="true" />
      <div ref={panelRef} className={styles.panel} role="dialog" aria-modal="true" aria-label={title}
        style={{ transform: 'translateY(100vh)' }}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close panel">
            ✕ Close
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
}
