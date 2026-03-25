import { createContext, useContext, useRef, useState, useCallback } from 'react';

const AudioCtx = createContext(null);

const SOUND_SRCS = {
  'ocean-ambient': ['/audio/ocean-ambient.mp3'],
  'page-turn':     ['/audio/page-turn.mp3'],
  'quill':         ['/audio/quill-writing.mp3'],
  'chest-creak':   ['/audio/chest-creak.mp3'],
  'cork-pop':      ['/audio/cork-pop.mp3'],
  'ship-horn':     ['/audio/ship-horn.mp3'],
  'stone-scrape':  ['/audio/stone-scrape.mp3'],
  'bell':          ['/audio/lighthouse-bell.mp3'],
  'mugs-rattle':   ['/audio/mugs-rattle.mp3'],
};

export function AudioProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const soundsRef = useRef({});
  const ambientRef = useRef(null);

  // Deferred init — must be called inside a user gesture
  const initAudio = useCallback(async () => {
    if (initialized) return;
    try {
      const { Howl } = await import('howler');
      const map = {};
      for (const [key, src] of Object.entries(SOUND_SRCS)) {
        const isAmbient = key === 'ocean-ambient' || key === 'mugs-rattle';
        map[key] = new Howl({
          src,
          loop: isAmbient,
          volume: isAmbient ? 0 : 0.75,
          html5: key === 'ocean-ambient',
          preload: true,
        });
      }
      soundsRef.current = map;
      ambientRef.current = map['ocean-ambient'];
      setInitialized(true);
    } catch (e) {
      console.warn('Audio init failed:', e);
    }
  }, [initialized]);

  const playSound = useCallback((id) => {
    const s = soundsRef.current[id];
    if (!s || isMuted) return;
    if (id === 'mugs-rattle') { s.volume(0.3); s.play(); return; }
    s.stop();
    s.play();
  }, [isMuted]);

  const stopSound = useCallback((id) => {
    soundsRef.current[id]?.stop();
  }, []);

  const fadeInOcean = useCallback(() => {
    const a = ambientRef.current;
    if (!a) return;
    a.play();
    a.fade(0, 0.35, 2000);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      Object.values(soundsRef.current).forEach((s) => s.mute(next));
      return next;
    });
  }, []);

  return (
    <AudioCtx.Provider value={{ isMuted, toggleMute, initAudio, playSound, stopSound, fadeInOcean, initialized }}>
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
}
