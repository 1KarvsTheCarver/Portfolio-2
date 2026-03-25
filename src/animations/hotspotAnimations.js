import gsap from 'gsap';

export function startHotspotPulse(ref, delay = 0) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.to(ref, {
    scale: 1.35,
    opacity: 0.6,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay,
  });
}
