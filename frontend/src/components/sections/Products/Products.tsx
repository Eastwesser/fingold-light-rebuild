import { useTabs } from '../../../hooks/useTabs';

/**
 * Продукты с табами (fpd-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 1627-1785.
 */
function Products() {
  const { setActive, isActive } = useTabs('exchange');

  return (
    <div id="fgb-products">
      <section className="fpd-section" id="products">
        <div className="fpd-inner">
          <div className="fpd-header">
            <p className="fpd-kicker">Продуктовая линейка</p>
            <h2 className="fpd-title">
              Финансовые продукты
              <br />
              на базе <span>золота</span>
            </h2>
            <p className="fpd-lead">
              Три направления: биржевые инструменты, фондовые продукты и расчётные контуры для
              профессиональных участников рынка и владельцев капитала.
            </p>
          </div>

          {/* Tabs */}
          <div className="fpd-tabs">
            <button
              className={`fpd-tab${isActive('exchange') ? ' is-active' : ''}`}
              type="button"
              data-tab="exchange"
              onClick={() => setActive('exchange')}
            >
              Биржевые инструменты
            </button>
            <button
              className={`fpd-tab${isActive('fund') ? ' is-active' : ''}`}
              type="button"
              data-tab="fund"
              onClick={() => setActive('fund')}
            >
              Фондовые продукты
            </button>
            <button
              className={`fpd-tab${isActive('settlement') ? ' is-active' : ''}`}
              type="button"
              data-tab="settlement"
              onClick={() => setActive('settlement')}
            >
              Расчётные контуры
            </button>
          </div>

          {/* Panel: Exchange */}
          <div
            className={`fpd-panel${isActive('exchange') ? ' is-active' : ''}`}
            data-panel="exchange"
          >
            <div className="fpd-grid">
              <div className="fpd-card fpd-card--wide">
                <div>
                  <div className="fpd-card-icon">
                    <svg viewBox="0 0 64 64">
                      <path d="M8 25h48L32 11 8 25Z" />
                      <path d="M14 29v24M26 29v24M38 29v24M50 29v24M10 53h44" />
                    </svg>
                  </div>
                  <h3>GLDRUB_TOM — спот-торговля золотом на MOEX</h3>
                  <p>
                    Основной биржевой инструмент для торговли золотом в рублях с расчётами
                    «сегодня» (TOD) и «завтра» (TOM). ФИНГОЛД обеспечивает глубину рынка для
                    крупных институциональных объёмов, где стандартная ликвидность стакана
                    недостаточна.
                  </p>
                  <ul className="fpd-card-meta">
                    <li>Спот-расчёты TOM</li>
                    <li>Рублёвый контур</li>
                    <li>НКЦ</li>
                    <li>Институциональные объёмы</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.45)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      marginBottom: '28px',
                    }}
                  >
                    Инструмент доступен для банков, брокеров, фондов и владельцев капитала и
                    профессиональных участников рынка. Работаем как маркет-мейкер и брокер в одной
                    сделке.
                  </p>
                  <a className="fpd-card-link" href="#fgb-contacts">
                    Получить доступ к ликвидности
                  </a>
                </div>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M12 32h40M32 12v40" />
                    <path d="M18 21c8 6 20 6 28 0M18 43c8-6 20-6 28 0" />
                    <circle cx="32" cy="32" r="22" />
                  </svg>
                </div>
                <h3>Переговорные сделки (OTC)</h3>
                <p>
                  Крупные блочные сделки с заранее согласованной ценой, объёмом и контрагентом вне
                  биржевого стакана. Идеально для нестандартных объёмов и срочных позиций.
                </p>
                <ul className="fpd-card-meta">
                  <li>OTC</li>
                  <li>Блочные сделки</li>
                  <li>Prefixed price</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-process">
                  Как это работает
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M11 22h42M16 22v30M28 22v30M40 22v30M52 22v30" />
                    <path d="M11 52h46M13 18c2-6 8-8 14-4 7 5 14 5 24 0" />
                  </svg>
                </div>
                <h3>Хеджирование позиций</h3>
                <p>
                  Закрытие валютных и ценовых рисков через деривативы и встречные позиции на
                  золото. Для экспортёров, импортёров и инвесторов с длинными позициями.
                </p>
                <ul className="fpd-card-meta">
                  <li>FX-хедж</li>
                  <li>Ценовые деривативы</li>
                  <li>Встречные позиции</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Обсудить стратегию
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="20" />
                    <path d="M32 20v12l8 4" />
                  </svg>
                </div>
                <h3>Торговое фондирование</h3>
                <p>
                  Оборотный капитал под торговые циклы с золотом — от добычи до реализации.
                  Быстрые расчёты, низкая стоимость и гибкие сроки фондирования.
                </p>
                <ul className="fpd-card-meta">
                  <li>Trade finance</li>
                  <li>Оборотный капитал</li>
                  <li>Быстрые расчёты</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Рассчитать условия
                </a>
              </div>
            </div>
          </div>

          {/* Panel: Fund */}
          <div className={`fpd-panel${isActive('fund') ? ' is-active' : ''}`} data-panel="fund">
            <div className="fpd-grid">
              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M18 18h28v30H18z" />
                    <path d="M23 24h18M23 31h18M23 38h11" />
                    <path d="M14 14h36v38H14z" />
                  </svg>
                </div>
                <h3>ОПИФ на базе золота</h3>
                <p>
                  Открытые паевые инвестиционные фонды с привязкой к биржевой цене золота.
                  ФИНГОЛД формирует инфраструктуру: расчётный контур, хранение и маркет-мейкинг.
                </p>
                <ul className="fpd-card-meta">
                  <li>ОПИФ</li>
                  <li>Биржевая привязка</li>
                  <li>Ликвидный выход</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Узнать об условиях
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M18 51V19h28v32M12 51h40M22 25h8M22 33h8M22 41h8M36 25h6M36 33h6M36 41h6" />
                    <path d="M28 19v-8h16v8" />
                  </svg>
                </div>
                <h3>Банковские продукты</h3>
                <p>
                  Золото как базовый актив для структурированных банковских продуктов: депозиты с
                  привязкой к цене металла, обеспечение кредитных линий и ОМС нового поколения.
                </p>
                <ul className="fpd-card-meta">
                  <li>Структурированные депозиты</li>
                  <li>ОМС</li>
                  <li>Кредитное обеспечение</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Обсудить структуру
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M12 32h40M32 12v40" />
                    <circle cx="32" cy="32" r="20" />
                    <path d="M22 22l20 20M42 22L22 42" />
                  </svg>
                </div>
                <h3>Страховые и пенсионные продукты</h3>
                <p>
                  Интеграция золота в страховые резервы и пенсионные портфели. Обеспечиваем
                  соответствие регуляторным требованиям и прозрачную цепочку хранения.
                </p>
                <ul className="fpd-card-meta">
                  <li>Страховые резервы</li>
                  <li>НПФ</li>
                  <li>Регуляторный комплаенс</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>

          {/* Panel: Settlement */}
          <div
            className={`fpd-panel${isActive('settlement') ? ' is-active' : ''}`}
            data-panel="settlement"
          >
            <div className="fpd-grid">
              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M12 32h40M32 12v40" />
                    <path d="M18 21c8 6 20 6 28 0M18 43c8-6 20-6 28 0" />
                    <circle cx="32" cy="32" r="22" />
                  </svg>
                </div>
                <h3>Loco London Gold</h3>
                <p>
                  Выход на международный расчётный стандарт с доступом к глобальному спросу,
                  кросс-рыночному арбитражу и валютным расчётам в мировых резервных валютах.
                </p>
                <ul className="fpd-card-meta">
                  <li>XAU</li>
                  <li>Loco London</li>
                  <li>Global settlement</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-global">
                  Подробнее о контуре
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <path d="M8 44l8-16 10 8 12-20 10 12 8-8" />
                  </svg>
                </div>
                <h3>Трансграничные расчёты</h3>
                <p>
                  Расчётные маршруты через агентские сети и партнёрские банки в ключевых
                  юрисдикциях для ВЭД-компаний и экспортёров золота.
                </p>
                <ul className="fpd-card-meta">
                  <li>ВЭД</li>
                  <li>Агентские расчёты</li>
                  <li>Мультивалютно</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Обсудить маршрут
                </a>
              </div>

              <div className="fpd-card">
                <div className="fpd-card-icon">
                  <svg viewBox="0 0 64 64">
                    <rect x="10" y="20" width="44" height="30" rx="2" />
                    <path d="M10 28h44M18 36h8M18 42h14" />
                  </svg>
                </div>
                <h3>Экспортный контур</h3>
                <p>
                  Полный маршрут от поставщика металла до международного покупателя:
                  документооборот, валютный контроль, таможенное оформление и конечный расчёт.
                </p>
                <ul className="fpd-card-meta">
                  <li>Экспорт AU</li>
                  <li>Валютный контроль</li>
                  <li>Логистика</li>
                </ul>
                <a className="fpd-card-link" href="#fgb-contacts">
                  Запросить маршрут
                </a>
              </div>
            </div>
          </div>

          {/* Bottom stripe */}
          <div className="fpd-stripe">
            <div className="fpd-stripe-text">
              <strong>Не нашли подходящий продукт?</strong>
              Мы разрабатываем индивидуальные решения под конкретную задачу — объём, юрисдикцию и
              расчётный контур.
            </div>
            <a className="fpd-stripe-btn" href="#fgb-contacts">
              Обсудить структуру
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
