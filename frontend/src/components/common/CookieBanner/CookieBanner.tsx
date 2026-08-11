import type { useCookieConsent } from '../../../hooks/useCookieConsent';

type CookieBannerProps = ReturnType<typeof useCookieConsent>;

/**
 * Cookie-баннер (#fgb-cookie) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 6345-6407.
 */
function CookieBanner({
  visible,
  expanded,
  analytics,
  marketing,
  setAnalytics,
  setMarketing,
  acceptAll,
  declineOptional,
  closeOnly,
  toggleExpanded,
}: CookieBannerProps) {
  return (
    <div id="fgb-cookie" className={visible ? 'is-visible' : undefined}>
      <div
        className={`fck-banner${expanded ? ' is-expanded' : ''}`}
        role="dialog"
        aria-label="Уведомление об использовании cookie"
      >
        <div className="fck-inner">
          <div className="fck-text">
            <span className="fck-icon" aria-hidden="true">
              i
            </span>
            <div className="fck-copy">
              <strong>Мы используем файлы cookie</strong>
              Они помогают нам улучшать сайт, анализировать трафик и персонализировать контент.
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a href="#fgb-contacts">политикой конфиденциальности</a>.
            </div>
          </div>
          <div className="fck-actions">
            <button className="fck-manage" type="button" onClick={toggleExpanded}>
              {expanded ? 'Скрыть' : 'Настроить'}
            </button>
            <button className="fck-decline" type="button" onClick={declineOptional}>
              Только необходимые
            </button>
            <button className="fck-accept" type="button" onClick={acceptAll}>
              Принять все
            </button>
            <button className="fck-close" type="button" aria-label="Закрыть" onClick={closeOnly}>
              ✕
            </button>
          </div>
        </div>

        {/* Expanded settings */}
        <div className="fck-settings" aria-hidden={!expanded}>
          <div className="fck-settings-inner">
            <div className="fck-toggle-item">
              <div className="fck-toggle-label">
                <strong>Необходимые</strong>
                Работа сайта, сессии, безопасность. Нельзя отключить.
              </div>
              <label className="fck-switch">
                <input type="checkbox" checked disabled />
                <span className="fck-slider"></span>
              </label>
            </div>

            <div className="fck-toggle-item">
              <div className="fck-toggle-label">
                <strong>Аналитика</strong>
                Яндекс.Метрика, Google Analytics — помогают улучшать сайт.
              </div>
              <label className="fck-switch">
                <input
                  type="checkbox"
                  id="fck-analytics"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span className="fck-slider"></span>
              </label>
            </div>

            <div className="fck-toggle-item">
              <div className="fck-toggle-label">
                <strong>Маркетинг</strong>
                Ретаргетинг и персонализированная реклама на внешних площадках.
              </div>
              <label className="fck-switch">
                <input
                  type="checkbox"
                  id="fck-marketing"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span className="fck-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
