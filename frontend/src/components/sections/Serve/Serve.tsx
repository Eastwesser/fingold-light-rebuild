import bankIcon from '../../../assets/icons/bank.svg';
import growthDiagramIcon from '../../../assets/icons/growth_diagram.svg';
import peopleMoneyIcon from '../../../assets/icons/people_money_crowdfunding.svg';
import miningMoneyIcon from '../../../assets/icons/mining_money.svg';

/**
 * Аудитория: банки, фонды, инвесторы, золотодобытчики (fs-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 2252-2341.
 * Иконки перенесены локально (frontend/src/assets/icons/) — оригинал ссылался
 * на static.tildacdn.com/lib/icons/tilda/*, недоступный извне Tilda (см. issues/errors_states.md).
 */
function Serve() {
  return (
    <div id="fgb-serve">
      <section className="fs-section">
        <div className="fs-inner">
          <div className="fs-header">
            <div>
              <p className="fs-kicker">Аудитория</p>
              <h2 className="fs-title">
                Кому мы <span>полезны</span>
              </h2>
            </div>
            <p className="fs-lead">
              ФИНГОЛД работает на пересечении биржевой, банковской и брокерской инфраструктуры.
              Наши решения созданы для тех, кто работает с крупным объёмом, ценит скорость и
              требует точности исполнения.
            </p>
          </div>

          <div className="fs-grid">
            {/* Банки */}
            <div className="fs-card">
              <span className="fs-card-number">01</span>
              <div>
                <div className="fs-icon">
                  <img
                    src={bankIcon}
                    alt="Банки"
                    loading="lazy"
                  />
                </div>
                <h3>Банкам</h3>
                <p>
                  Помогаем банкам получить доступ к глубокой ликвидности по GLDRUB_TOM,
                  организовать переговорные сделки и встроить золото в собственные продуктовые
                  линейки.
                </p>
                <ul className="fs-tag-list">
                  <li>Биржевая ликвидность</li>
                  <li>OTC-сделки</li>
                  <li>GLDRUB_TOM</li>
                </ul>
              </div>
              <a className="fs-cta" href="#fgb-cap">
                Узнать о решениях
              </a>
            </div>

            {/* Фонды */}
            <div className="fs-card">
              <span className="fs-card-number">02</span>
              <div>
                <div className="fs-icon">
                  <img
                    src={growthDiagramIcon}
                    alt="Фонды"
                    loading="lazy"
                  />
                </div>
                <h3>Фондам</h3>
                <p>
                  Разрабатываем инфраструктуру для ОПИФ и структурных продуктов на базе золота.
                  Обеспечиваем надёжность расчётной цепочки и прозрачность ценообразования.
                </p>
                <ul className="fs-tag-list">
                  <li>ОПИФ</li>
                  <li>Структурные продукты</li>
                  <li>Страховые продукты</li>
                </ul>
              </div>
              <a className="fs-cta" href="#fgb-cap">
                Узнать о решениях
              </a>
            </div>

            {/* Инвесторы */}
            <div className="fs-card">
              <span className="fs-card-number">03</span>
              <div>
                <div className="fs-icon">
                  <img
                    src={peopleMoneyIcon}
                    alt="Инвесторы"
                    loading="lazy"
                  />
                </div>
                <h3>Инвесторам</h3>
                <p>
                  Предоставляем доступ к золоту как к финансовому активу: биржевые инструменты,
                  хеджирование валютного риска и партнёрские каналы для крупных частных
                  вкладчиков.
                </p>
                <ul className="fs-tag-list">
                  <li>Хеджирование</li>
                  <li>Биржевые инструменты</li>
                  <li>Капиталозащита</li>
                </ul>
              </div>
              <a className="fs-cta" href="#fgb-cap">
                Узнать о решениях
              </a>
            </div>

            {/* Золотодобытчики */}
            <div className="fs-card">
              <span className="fs-card-number">04</span>
              <div>
                <div className="fs-icon">
                  <img
                    src={miningMoneyIcon}
                    alt="Золотодобытчики"
                    loading="lazy"
                  />
                </div>
                <h3>Золотодобытчикам</h3>
                <p>
                  Строим маршрут от добычи к реализации: биржевые продажи, фондирование торговых
                  циклов и выход на международный контур через Loco London Gold.
                </p>
                <ul className="fs-tag-list">
                  <li>Loco London</li>
                  <li>Экспортный контур</li>
                  <li>Торговое фондирование</li>
                </ul>
              </div>
              <a className="fs-cta" href="#fgb-cap">
                Узнать о решениях
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Serve;
