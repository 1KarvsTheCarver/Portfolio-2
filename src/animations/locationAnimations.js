import gsap from 'gsap';

export function animateDrawbridge(ref) {
  if (!ref || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.fromTo(ref, { scaleY: 0, transformOrigin: 'top center' }, { scaleY: 1, duration: 1.0, ease: 'power2.out' });
}

export function animateChestLid(ref) {
  if (!ref || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.to(ref, { rotateX: -110, duration: 0.8, ease: 'back.out(1.5)', transformOrigin: 'top center' });
}

export function animateRuinsStagger(refs) {
  if (!refs?.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.fromTo(refs,
    { opacity: 0, scaleY: 0.3, y: 50 },
    { opacity: 1, scaleY: 1, y: 0, duration: 0.7, stagger: 0.18, ease: 'power2.out' }
  );
}
