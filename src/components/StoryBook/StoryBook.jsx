import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useAudio } from '../../context/AudioContext';
import { playBookOpenSequence } from '../../animations/bookAnimations';
import styles from './StoryBook.module.css';

gsap.registerPlugin();

export default function StoryBook({ onComplete }) {
  const { initAudio, playSound, fadeInOcean } = useAudio();
  const [opened, setOpened] = useState(false);

  const coverRef  = useRef(null);
  const page1Ref  = useRef(null);
  const page2Ref  = useRef(null);
  const sceneRef  = useRef(null);

  async function handleClick() {
    if (opened) return;
    setOpened(true);
    await initAudio();

    playBookOpenSequence({
      coverRef:  coverRef.current,
      page1Ref:  page1Ref.current,
      page2Ref:  page2Ref.current,
      sceneRef:  sceneRef.current,
      onQuill:   () => playSound('quill'),
      onOcean:   () => fadeInOcean(),
      onComplete: () => onComplete(),
    });
  }

  return (
    <div ref={sceneRef} className={styles.scene} onClick={!opened ? handleClick : undefined}>

      <div className={styles.bookWrap} aria-label="Click to open the storybook" role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && !opened && handleClick()}>
        {/* Base / spine */}
        <div className={styles.bookBase} />
        <div className={styles.pageStack} />

        {/* Page 2 (under page 1) */}
        <div ref={page2Ref} className={styles.page} style={{ zIndex: 2 }}>
          <p className={styles.pageText}>
            &ldquo;And so the cartographer laid down his quill,<br />
            having charted every shore, every ruin,<br />
            every tavern worth its salt...&rdquo;
          </p>
          {[...Array(8)].map((_, i) => <div key={i} className={styles.pageLines} />)}
        </div>

        {/* Page 1 (top page, flips first) */}
        <div ref={page1Ref} className={styles.page} style={{ zIndex: 3 }}>
          <p className={styles.pageText}>
            &ldquo;Here lies the chart of Taqee Moore —<br />
            IT navigator, digital craftsman,<br />
            and builder of curious things.&rdquo;
          </p>
          {[...Array(8)].map((_, i) => <div key={i} className={styles.pageLines} />)}
        </div>

        {/* Cover (flips open last) */}
        <div ref={coverRef} className={styles.cover} style={{ zIndex: 4 }}>
          <div className={styles.coverDivider} />
          <h1 className={styles.coverTitle}>The Chart of{'\n'}Taqee Moore</h1>
          <div className={styles.coverDivider} />
          <p className={styles.coverSub}>IT Professional · Web Developer · Digital Craftsman</p>
        </div>
      </div>

      {!opened && <p className={styles.hint}>Click the book to begin your voyage</p>}
    </div>
  );
}
