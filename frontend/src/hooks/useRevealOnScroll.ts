import { useEffect } from 'react';

const REVEAL_SELECTORS = [
  '.fp-step',
  '.fs-card',
  '.fg-route',
  '.fi-stat',
  '.ft-principle',
  '.fpd-card',
  '.fpa-type',
  '.ff-col',
  '.fn-arc-card',
].join(',');

/**
 * Появление блоков при скролле через IntersectionObserver — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6669-6697.
 * Запускается один раз после монтирования всего дерева секций.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS));
    elements.forEach((el, i) => {
      el.classList.add('fgb-reveal');
      el.style.transitionDelay = `${Math.min((i % 5) * 0.07, 0.28)}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
