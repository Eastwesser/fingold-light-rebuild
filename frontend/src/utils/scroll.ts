/**
 * Плавный скролл с учётом высоты sticky-навигации — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6590-6615.
 */
export function getNavHeight(): number {
  const nav = document.getElementById('fgb-nav');
  const wrap = nav?.querySelector('.fn-wrap');
  return wrap instanceof HTMLElement ? wrap.offsetHeight : 76;
}

export function smoothScrollToId(targetId: string): void {
  const el = document.getElementById(targetId);
  if (!el) return;
  const offset = getNavHeight() + 12;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

  if (targetId === 'fgb-contacts') {
    setTimeout(() => {
      const field = document.querySelector<HTMLElement>(
        '#fgb-contacts input, #fgb-contacts textarea, #fgb-contacts select',
      );
      field?.focus({ preventScroll: true });
    }, 650);
  }
}
