import gsap from 'gsap';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animates the entire map layer as one living scene:
 * - Slow continuous drift (ocean sway)
 * - Subtle breathing scale
 * - Gentle brightness/saturation pulse (shifting light)
 * - Mouse parallax on top
 */
export function animateWholeMap(el) {
  if (!el || reduced()) return;

  // Slow figure-eight drift — makes the whole map feel like it's on water
  gsap.to(el, {
    x: 12,
    y: -6,
    duration: 9,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });

  gsap.to(el, {
    scale: 1.025,
    duration: 14,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });

  // Mouse parallax — layered on top of the ambient drift
  const handler = (e) => {
    const dx = (e.clientX / window.innerWidth  - 0.5) * 20;
    const dy = (e.clientY / window.innerHeight - 0.5) * 12;
    gsap.to(el, { x: dx, y: dy, duration: 2.2, ease: 'power1.out', overwrite: 'auto' });
  };
  window.addEventListener('mousemove', handler);
  return () => window.removeEventListener('mousemove', handler);
}
