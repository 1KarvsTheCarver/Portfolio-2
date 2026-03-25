import { useState } from 'react';
import styles from './WaxSeal.module.css';

export default function WaxSeal({ crackable = false, onCracked, label = 'T' }) {
  const [cracked, setCracked] = useState(false);

  function handleClick() {
    if (!crackable || cracked) return;
    setCracked(true);
    onCracked?.();
  }

  return (
    <div
      className={`${styles.seal} ${cracked ? styles.cracked : ''} ${crackable ? styles.clickable : ''}`}
      onClick={handleClick}
      aria-label={crackable ? 'Click to crack the wax seal' : undefined}
      role={crackable ? 'button' : undefined}
      tabIndex={crackable ? 0 : undefined}
      onKeyDown={crackable ? (e) => e.key === 'Enter' && handleClick() : undefined}
    >
      <span className={styles.letter}>{label}</span>
      {cracked && <span className={styles.crack} aria-hidden="true" />}
    </div>
  );
}
