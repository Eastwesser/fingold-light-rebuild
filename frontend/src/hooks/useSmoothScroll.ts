import { useEffect } from 'react';
import { smoothScrollToId } from '../utils/scroll';

/**
 * Перехватывает клики по всем ссылкам вида href="#id" на странице и
 * плавно скроллит к цели с учётом высоты nav — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6596-6636.
 * Ссылка "#fgb-cookie" исключена — её обрабатывает Footer (кнопка "Управление cookie").
 */
export function useSmoothScroll() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute('href') ?? '';
      if (href === '#' || href === '#fgb-cookie') return;

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      smoothScrollToId(id);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
