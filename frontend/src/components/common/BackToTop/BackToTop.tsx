import { useBackToTop } from '../../../hooks/useBackToTop';

/**
 * Кнопка «Наверх» (#fgb-back-top) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6568-6572.
 */
function BackToTop() {
  const { visible, scrollToTop } = useBackToTop();

  return (
    <button
      id="fgb-back-top"
      type="button"
      aria-label="Вернуться наверх"
      className={visible ? 'is-visible' : undefined}
      onClick={scrollToTop}
    >
      <span className="fbt-label">Наверх</span>
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

export default BackToTop;
