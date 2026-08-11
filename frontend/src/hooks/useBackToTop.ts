import { useEffect, useState } from 'react';

/**
 * Кнопка «Наверх» — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6656-6667.
 */
export function useBackToTop(threshold = 500) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > threshold);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { visible, scrollToTop };
}
