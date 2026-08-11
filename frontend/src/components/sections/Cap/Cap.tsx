import { useCarousel } from '../../../hooks/useCarousel';

const SLIDE_COUNT = 5;

/**
 * Решения с каруселью (fc-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 729-843.
 */
function Cap() {
  const { trackRef, index, setSlide } = useCarousel(SLIDE_COUNT);

  return (
    <div id="fgb-cap">
      <section className="fc-section">
        <div className="fc-inner">
          <div className="fc-layout">
            <div className="fc-image" role="img" aria-label="Здание и небо"></div>

            <div className="fc-content">
              <h2 className="fc-title">
                Какую задачу мы можем <span>решить вместе?</span>
              </h2>

              <div className="fc-viewport">
                <div className="fc-track" ref={trackRef}>
                  <article className="fc-card">
                    <div className="fc-icon">
                      <svg viewBox="0 0 64 64">
                        <path d="M8 25h48L32 11 8 25Z" />
                        <path d="M14 29v24M26 29v24M38 29v24M50 29v24M10 53h44" />
                      </svg>
                    </div>
                    <h3>Ликвидность золота</h3>
                    <p>
                      Организуем крупные сделки по GLDRUB_TOM и соединяем участников рынка, когда
                      стандартной глубины стакана недостаточно.
                    </p>
                    <a className="fc-link" href="#fgb-contacts">
                      Обсудить задачу <span>›</span>
                    </a>
                  </article>

                  <article className="fc-card">
                    <div className="fc-icon">
                      <svg viewBox="0 0 64 64">
                        <path d="M11 22h42M16 22v30M28 22v30M40 22v30M52 22v30" />
                        <path d="M11 52h46M13 18c2-6 8-8 14-4 7 5 14 5 24 0" />
                      </svg>
                    </div>
                    <h3>Переговорные сделки</h3>
                    <p>
                      Проводим переговорные сделки с заранее согласованной ценой, объёмом и
                      контрагентом.
                    </p>
                    <a className="fc-link" href="#fgb-contacts">
                      Обсудить задачу <span>›</span>
                    </a>
                  </article>

                  <article className="fc-card">
                    <div className="fc-icon">
                      <svg viewBox="0 0 64 64">
                        <path d="M18 51V19h28v32M12 51h40M22 25h8M22 33h8M22 41h8M36 25h6M36 33h6M36 41h6" />
                        <path d="M28 19v-8h16v8" />
                      </svg>
                    </div>
                    <h3>Фондирование циклов</h3>
                    <p>
                      Привлекаем оборотное фондирование под торговые циклы, где важны скорость
                      расчётов и стоимость капитала.
                    </p>
                    <a className="fc-link" href="#fgb-contacts">
                      Обсудить задачу <span>›</span>
                    </a>
                  </article>

                  <article className="fc-card">
                    <div className="fc-icon">
                      <svg viewBox="0 0 64 64">
                        <path d="M18 18h28v30H18z" />
                        <path d="M23 24h18M23 31h18M23 38h11" />
                        <path d="M14 14h36v38H14z" />
                      </svg>
                    </div>
                    <h3>Фондовые продукты</h3>
                    <p>
                      Развиваем ОПИФ, банковские, страховые и структурные продукты на базе золота
                      и рыночной инфраструктуры.
                    </p>
                    <a className="fc-link" href="#fgb-contacts">
                      Обсудить задачу <span>›</span>
                    </a>
                  </article>

                  <article className="fc-card">
                    <div className="fc-icon">
                      <svg viewBox="0 0 64 64">
                        <path d="M12 32h40M32 12v40" />
                        <path d="M18 21c8 6 20 6 28 0M18 43c8-6 20-6 28 0" />
                        <circle cx="32" cy="32" r="22" />
                      </svg>
                    </div>
                    <h3>Экспортный контур</h3>
                    <p>
                      Строим маршрут от российского рынка золота к международному спросу,
                      валютным расчётам и Loco London Gold.
                    </p>
                    <a className="fc-link" href="#fgb-contacts">
                      Обсудить задачу <span>›</span>
                    </a>
                  </article>
                </div>
              </div>

              <div className="fc-controls">
                <button
                  className="fc-arrow"
                  type="button"
                  aria-label="Назад"
                  onClick={() => setSlide(index - 1)}
                >
                  ‹
                </button>
                {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                  <button
                    key={i}
                    className={`fc-dot${i === index ? ' is-active' : ''}`}
                    type="button"
                    aria-label={`Слайд ${i + 1}`}
                    onClick={() => setSlide(i)}
                  />
                ))}
                <button
                  className="fc-arrow"
                  type="button"
                  aria-label="Вперёд"
                  onClick={() => setSlide(index + 1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cap;
