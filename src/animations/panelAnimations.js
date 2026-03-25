import gsap from 'gsap';

export function slideUpPanel(ref, onComplete) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.fromTo(ref,
    { y: '100vh', opacity: 0 },
    { y: 0, opacity: 1, duration: prefersReduced ? 0 : 0.65, ease: 'back.out(1.2)', onComplete }
  );
}

export function slideDownPanel(ref, onComplete) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.to(ref, {
    y: '100vh', opacity: 0,
    duration: prefersReduced ? 0 : 0.45,
    ease: 'power2.in',
    onComplete,
  });
}
