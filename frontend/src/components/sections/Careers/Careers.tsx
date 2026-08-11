import exchangeCurrencyIcon from '../../../assets/icons/exchange_currency.svg';
import worldIcon from '../../../assets/icons/world_earth_planet_internet.svg';
import growthDiagramIcon from '../../../assets/icons/growth_diagram.svg';

/**
 * Карьера (fr-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 3293-3390.
 * Иконки перенесены локально (см. Serve.tsx — та же причина).
 */
function Careers() {
  return (
    <div id="fgb-careers">
      <section className="fr-section">
        <div className="fr-inner">
          <div className="fr-top">
            {/* Left: heading + CTA */}
            <div>
              <p className="fr-kicker">Карьера в ФИНГОЛД</p>
              <h2 className="fr-title">
                Строим будущее
                <br />
                золота <span>вместе</span>
              </h2>
              <p className="fr-lead">
                Мы ищем тех, кто понимает рынок, ценит точность и хочет строить инфраструктуру,
                которая работает на уровне банков, фондов и международных контрагентов.
              </p>
              <a className="fr-btn" href="mailto:hr@fingoldcompany.ru">
                Отправить резюме
              </a>
            </div>

            {/* Right: values */}
            <div className="fr-values">
              <div className="fr-value">
                <div className="fr-value-icon">
                  <img
                    src={exchangeCurrencyIcon}
                    alt="Рынок"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3>Рыночное мышление</h3>
                  <p>
                    Мы принимаем решения на основе данных, биржевой логики и реального понимания
                    позиции контрагента.
                  </p>
                </div>
              </div>
              <div className="fr-value">
                <div className="fr-value-icon">
                  <img
                    src={worldIcon}
                    alt="Глобальный масштаб"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3>Глобальный масштаб</h3>
                  <p>
                    Работаем на пересечении российского и международного рынков золота, от MOEX
                    до Loco London.
                  </p>
                </div>
              </div>
              <div className="fr-value">
                <div className="fr-value-icon">
                  <img
                    src={growthDiagramIcon}
                    alt="Рост"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3>Рост вместе с компанией</h3>
                  <p>
                    ФИНГОЛД — молодая команда в быстрорастущем сегменте. Здесь ценят инициативу и
                    дают зоны реальной ответственности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <div className="fr-vacancies-wrap">
        <div className="fr-vacancies-inner">
          <div className="fr-vac-header">
            <h2 className="fr-vac-title">
              Открытые вакансии
              <span className="fr-vac-count">4</span>
            </h2>
          </div>

          <div className="fr-vac-list">
            <div className="fr-vac-item">
              <span className="fr-vac-title-text">Трейдер по золоту (GLDRUB_TOM)</span>
              <span className="fr-vac-dept">Трейдинг</span>
              <a className="fr-vac-arrow" href="mailto:hr@fingoldcompany.ru" aria-label="Откликнуться">
                ›
              </a>
            </div>

            <div className="fr-vac-item">
              <span className="fr-vac-title-text">Аналитик финансового рынка</span>
              <span className="fr-vac-dept">Аналитика</span>
              <a className="fr-vac-arrow" href="mailto:hr@fingoldcompany.ru" aria-label="Откликнуться">
                ›
              </a>
            </div>

            <div className="fr-vac-item">
              <span className="fr-vac-title-text">Менеджер по работе с партнёрами (B2B)</span>
              <span className="fr-vac-dept">Продажи</span>
              <a className="fr-vac-arrow" href="mailto:hr@fingoldcompany.ru" aria-label="Откликнуться">
                ›
              </a>
            </div>

            <div className="fr-vac-item">
              <span className="fr-vac-title-text">Специалист по структурным продуктам</span>
              <span className="fr-vac-dept">Продукт</span>
              <a className="fr-vac-arrow" href="mailto:hr@fingoldcompany.ru" aria-label="Откликнуться">
                ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
