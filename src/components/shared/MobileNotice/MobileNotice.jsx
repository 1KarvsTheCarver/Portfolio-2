import styles from './MobileNotice.module.css';

export default function MobileNotice({ onDismiss }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.scroll}>
        <p className={styles.skull}>☠</p>
        <h2 className={styles.title}>Heed This Warning, Sailor</h2>
        <p className={styles.body}>
          This map was charted for a proper navigator&apos;s desk — a wider screen is required to see
          all its secrets. On a small vessel you may glimpse parts of the chart, but some treasures
          will remain hidden.
        </p>
        <button className={styles.btn} onClick={onDismiss}>
          Sail On Regardless
        </button>
      </div>
    </div>
  );
}
