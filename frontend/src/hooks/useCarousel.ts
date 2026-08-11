import { useCallback, useEffect, useRef, useState } from 'react';

// Значения взяты из инлайн-скрипта Cap в эталоне (docs/reference/Fingold_Light_Rebuild.html, строки 806-842).
const CARD_WIDTH = 382; // 344px карточка + 38px gap
const MOBILE_BREAKPOINT = 720;

export function useCarousel(slideCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const setSlide = useCallback(
    (next: number) => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) return;
      const clamped = Math.max(0, Math.min(slideCount - 1, next));
      setIndex(clamped);
      const track = trackRef.current;
      if (track) {
        track.style.transform = `translateX(${-clamped * CARD_WIDTH}px)`;
      }
    },
    [slideCount],
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= MOBILE_BREAKPOINT && trackRef.current) {
        trackRef.current.style.transform = '';
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { trackRef, index, setSlide };
}
