import { useAudio } from '../../../context/AudioContext';
import styles from './MuteToggle.module.css';

export default function MuteToggle() {
  const { isMuted, toggleMute } = useAudio();
  return (
    <button
      className={styles.btn}
      onClick={toggleMute}
      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      title={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? '🔇' : '🔔'}
    </button>
  );
}
