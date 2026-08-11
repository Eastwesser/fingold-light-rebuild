import type { useSearchOverlay } from '../../../hooks/useSearchOverlay';

const SUGGESTED_QUERIES = [
  { query: 'Loco London Gold', label: 'Loco London Gold' },
  { query: 'GLDRUB_TOM', label: 'GLDRUB_TOM' },
  { query: 'продукты на базе золота', label: 'Продукты на базе золота' },
  { query: 'партнёрство', label: 'Партнёрство' },
  { query: 'ликвидность золота', label: 'Ликвидность золота' },
  { query: 'ОПИФ', label: 'ОПИФ' },
  { query: 'Антон Никитин', label: 'Антон Никитин' },
  { query: 'трансграничные расчёты', label: 'Трансграничные расчёты' },
  { query: 'хеджирование', label: 'Хеджирование' },
];

function isExternal(url: string) {
  return url.startsWith('http');
}

type SearchOverlayProps = ReturnType<typeof useSearchOverlay>;

/**
 * Поисковый оверлей (#fgb-search-overlay) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 5942-5985.
 */
function SearchOverlay({ isOpen, query, setQuery, results, noResults, close, inputRef }: SearchOverlayProps) {
  function selectSuggestion(q: string) {
    setQuery(q);
    inputRef.current?.focus();
  }

  return (
    <div
      id="fgb-search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Поиск по сайту"
      className={isOpen ? 'is-open' : undefined}
    >
      <div
        className="fso-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="fso-panel">
          <span className="fso-label">Поиск по сайту и публикациям</span>

          <div className="fso-input-row">
            <input
              className="fso-input"
              id="fso-input"
              type="search"
              placeholder="Введите запрос — например, «Loco London» или «GLDRUB»…"
              autoComplete="off"
              aria-label="Поле поиска"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="fso-search-btn" type="button" aria-label="Найти">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <div className="fso-suggestions">
            <span className="fso-sugg-label">Популярные запросы</span>
            <ul className="fso-tags">
              {SUGGESTED_QUERIES.map(({ query: q, label }) => (
                <li key={q}>
                  <button className="fso-tag" type="button" onClick={() => selectSuggestion(q)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="fso-results" id="fso-results" aria-live="polite">
            {results.map((item) => (
              <a
                className="fso-result-item"
                href={item.url}
                key={item.url + item.title}
                onClick={close}
                {...(isExternal(item.url) ? { target: '_blank', rel: 'noopener' } : {})}
              >
                <span className="fso-result-tag">{item.tag}</span>
                <span className="fso-result-title">{item.title}</span>
              </a>
            ))}
          </div>
          {noResults && (
            <div className="fso-no-results" id="fso-no-results" style={{ display: 'block' }}>
              По запросу ничего не найдено. Попробуйте другой запрос.
            </div>
          )}
        </div>

        <button className="fso-close" type="button" aria-label="Закрыть поиск" onClick={close}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default SearchOverlay;
