import gsap from 'gsap';

/**
 * Full storybook opening sequence.
 * coverRef   — the front cover element (rotates open)
 * page1Ref   — first page flip element
 * page2Ref   — second page flip element
 * mapRef     — the map container (reveals after pages)
 * onComplete — called when sequence finishes
 */
export function playBookOpenSequence({ coverRef, page1Ref, page2Ref, sceneRef, onComplete, onQuill, onOcean }) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { onComplete?.(); return; }

  const tl = gsap.timeline();

  tl
    .to(coverRef, { rotateY: -160, duration: 2.2, ease: 'power2.inOut' })
    .call(() => onQuill?.())
    .to(page1Ref, { rotateY: -170, duration: 3.0, ease: 'power1.inOut' }, '+=0.4')
    .call(() => onQuill?.())
    .to(page2Ref, { rotateY: -170, duration: 3.0, ease: 'power1.inOut' }, '+=0.5')
    .call(() => onOcean?.())
    .to(sceneRef, { opacity: 0, duration: 1.2, ease: 'power2.inOut', onComplete }, '+=0.3');
}
