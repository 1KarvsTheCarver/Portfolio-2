import { useState } from 'react';
import PanelBase from '../PanelBase/PanelBase';
import { useAudio } from '../../../context/AudioContext';
import { useFormSubmit } from '../../../hooks/useFormSubmit';
import { LOCATIONS } from '../../../utils/constants';
import styles from './HarborPanel.module.css';

export default function HarborPanel() {
  const { playSound } = useAudio();
  const { status, submit } = useFormSubmit();
  const [corkPopped, setCorkPopped] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  function popCork() {
    if (corkPopped) return;
    playSound('cork-pop');
    setCorkPopped(true);
  }

  function handleChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await submit(fields);
    if (status !== 'error') playSound('ship-horn');
  }

  return (
    <PanelBase locationId={LOCATIONS.HARBOR} title="⚓ The Harbor — Contact">
      {!corkPopped ? (
        <>
          <div
            className={styles.bottle}
            onClick={popCork}
            role="button"
            tabIndex={0}
            aria-label="Click to uncork the bottle"
            onKeyDown={(e) => e.key === 'Enter' && popCork()}
          >
            🍾
          </div>
          <p className={styles.hint}>A bottle drifts ashore... click to uncork it and leave a message.</p>
        </>
      ) : status === 'success' ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>⛵</div>
          <p className={styles.successText}>Your message sets sail!</p>
          <p className={styles.successSub}>Fair winds and following seas — I&apos;ll reply as soon as the ship returns to port.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div>
            <label className={styles.label} htmlFor="harbor-name">Your Name</label>
            <input id="harbor-name" className={styles.input} name="name" type="text"
              value={fields.name} onChange={handleChange} required autoComplete="name"
              placeholder="Captain..." />
          </div>
          <div>
            <label className={styles.label} htmlFor="harbor-email">Your Email</label>
            <input id="harbor-email" className={styles.input} name="email" type="email"
              value={fields.email} onChange={handleChange} required autoComplete="email"
              placeholder="you@somewhere.sea" />
          </div>
          <div>
            <label className={styles.label} htmlFor="harbor-message">Your Message</label>
            <textarea id="harbor-message" className={styles.textarea} name="message"
              value={fields.message} onChange={handleChange} required minLength={10}
              placeholder="Scrawl your message here..." />
          </div>
          {status === 'error' && (
            <p className={styles.error}>⚠ The message failed to launch — please try again.</p>
          )}
          <button className={styles.submitBtn} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : '⛵ Send Message'}
          </button>
        </form>
      )}
    </PanelBase>
  );
}
