import gsap from 'gsap';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Seamless horizontal wave scroll — pass array of 3 wave path/group elements */
export function startWaveAnimations(waves) {
  if (reduced()) return;
  const speeds = [18, 12, 8];
  waves.forEach((el, i) => {
    if (!el) return;
    gsap.to(el, {
      x: -1440,
      duration: speeds[i],
      ease: 'none',
      repeat: -1,
    });
  });
}

/** Ship bobs and gently rolls */
export function startShipAnimation(ship) {
  if (!ship || reduced()) return;
  gsap.to(ship, {
    y: 7,
    rotation: 2.5,
    transformOrigin: '50% 80%',
    duration: 2.8,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });
}

/** Lighthouse: slow sweeping beam + pulsing glow */
export function startLighthouseAnimation(beam, glow) {
  if (reduced()) return;
  if (beam) {
    gsap.to(beam, {
      rotation: 360,
      transformOrigin: '0px 0px',
      duration: 5,
      repeat: -1,
      ease: 'none',
    });
  }
  if (glow) {
    gsap.to(glow, {
      opacity: 0.12,
      scale: 1.5,
      transformOrigin: '50% 50%',
      duration: 1.6,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }
}

/** Wind streaks drift diagonally and fade */
export function startWindAnimations(streaks) {
  if (reduced()) return;
  streaks.forEach((el, i) => {
    if (!el) return;
    const delay = i * 0.9;
    gsap.fromTo(
      el,
      { x: -60, opacity: 0 },
      {
        x: 60,
        opacity: 0,
        duration: 3.5 + i * 0.6,
        delay,
        repeat: -1,
        ease: 'sine.inOut',
        keyframes: [
          { x: -60, opacity: 0 },
          { x: 0,   opacity: 0.18 },
          { x: 60,  opacity: 0 },
        ],
      }
    );
  });
}

/** Mouse parallax — pass the map wrapper element */
export function attachParallax(el) {
  if (!el || reduced()) return;
  const handler = (e) => {
    const dx = (e.clientX / window.innerWidth  - 0.5) * 18;
    const dy = (e.clientY / window.innerHeight - 0.5) * 10;
    gsap.to(el, { x: dx, y: dy, duration: 1.8, ease: 'power1.out', overwrite: 'auto' });
  };
  window.addEventListener('mousemove', handler);
  return () => window.removeEventListener('mousemove', handler);
}
