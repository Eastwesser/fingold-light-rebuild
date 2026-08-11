/**
 * Глобальный охват (fg-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 2151-2250.
 */
function Global() {
  return (
    <div id="fgb-global">
      <section className="fg-section">
        <div className="fg-inner">
          {/* Header */}
          <div className="fg-header">
            <div>
              <p className="fg-kicker">Глобальный охват</p>
              <h2 className="fg-title">
                ФИНГОЛД
                <br />
                на <span>мировом</span>
                <br />
                рынке золота
              </h2>
            </div>
            <p className="fg-lead">
              Мы строим маршруты от российского биржевого рынка к международным площадкам: через
              Loco London Gold, валютные расчёты и партнёрские контуры в ключевых юрисдикциях.
            </p>
          </div>
        </div>

        {/* Routes */}
        <div style={{ width: 'min(1360px, calc(100% - 160px))', margin: '0 auto 2px' }}>
          <div className="fg-routes">
            <div className="fg-route">
              <div className="fg-route-flag">RU</div>
              <div className="fg-route-from">Базовый рынок</div>
              <h3>Россия — MOEX</h3>
              <p>
                Биржевая ликвидность по GLDRUB_TOM, переговорные сделки, расчёты через НКЦ.
                Работаем с банками, фондами и добытчиками на условиях российского
                законодательства.
              </p>
              <ul className="fg-route-tags">
                <li>GLDRUB_TOM</li>
                <li>НКЦ</li>
                <li>ОПИФ</li>
              </ul>
              <a className="fg-route-link" href="#fgb-cap">
                Решения для рынка
              </a>
            </div>

            <div className="fg-route">
              <div className="fg-route-flag">LLG</div>
              <div className="fg-route-from">Международный стандарт</div>
              <h3>Loco London Gold</h3>
              <p>
                Обеспечиваем выход на международный расчётный стандарт Loco London. Валютные
                расчёты, кросс-рыночный арбитраж и хеджирование для экспортёров и глобальных
                инвесторов.
              </p>
              <ul className="fg-route-tags">
                <li>XAU</li>
                <li>OTC</li>
                <li>FX-хеджирование</li>
              </ul>
              <a className="fg-route-link" href="#fgb-contacts">
                Запросить доступ
              </a>
            </div>

            <div className="fg-route">
              <div className="fg-route-flag">GLOBAL</div>
              <div className="fg-route-from">Партнёрская сеть</div>
              <h3>Глобальные контрагенты</h3>
              <p>
                Партнёрские каналы в ключевых юрисдикциях для ВЭД-компаний, трансграничных
                расчётов и выхода на новые рынки. Работаем там, где нужен надёжный контрагент.
              </p>
              <ul className="fg-route-tags">
                <li>Трансграничные расчёты</li>
                <li>B2B</li>
                <li>ВЭД</li>
              </ul>
              <a className="fg-route-link" href="#fgb-contacts">
                Обсудить маршрут
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="fg-stats-strip">
          <div className="fg-stat">
            <span className="fg-stat-num">
              <em>$</em>6070
            </span>
            <span className="fg-stat-desc">Прогноз цены золота за унцию в 2026 году</span>
          </div>
          <div className="fg-stat">
            <span className="fg-stat-num">
              3<em>+</em>
            </span>
            <span className="fg-stat-desc">Глобальных расчётных контура</span>
          </div>
          <div className="fg-stat">
            <span className="fg-stat-num">
              50<em>%</em>
            </span>
            <span className="fg-stat-desc">Рынка трансграничных расчётов занято агентами</span>
          </div>
          <div className="fg-stat">
            <span className="fg-stat-num">
              24<em>/7</em>
            </span>
            <span className="fg-stat-desc">Мониторинг позиций и цен на золото</span>
          </div>
        </div>

        {/* Loco London feature */}
        <div className="fg-loco">
          <div className="fg-loco-inner">
            <div className="fg-loco-copy">
              <h3>
                Loco London Gold —
                <br />
                международный <span>стандарт</span>
              </h3>
              <p>
                Loco London — глобальный эталон расчётов по золоту. ФИНГОЛД строит маршрут от
                российского добытчика или банка к этому рынку: валютные расчёты, экспортный контур
                и работа с международными контрагентами напрямую.
              </p>
              <a className="fg-loco-btn" href="#fgb-contacts">
                Обсудить с нами
              </a>
            </div>
            <div className="fg-loco-visual" aria-hidden="true">
              <div className="fg-loco-badge">
                <span className="fg-loco-badge-label">Международный стандарт</span>
                <span className="fg-loco-badge-text">
                  Loco London Gold
                  <br />
                  XAU / USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Global;
