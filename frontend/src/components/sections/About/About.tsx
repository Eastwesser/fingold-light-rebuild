/**
 * О компании (fa-*) — см. docs/reference/Fingold_Light_Rebuild.html, строки 472-503.
 */
function About() {
  return (
    <div id="fgb-about">
      <section className="fa-section">
        <div className="fa-inner">
          <div className="fa-grid">
            <div>
              <p className="fa-kicker">О компании</p>
              <h2 className="fa-title">
                Финансовая инфраструктура
                <br />
                <span>в золоте</span>
              </h2>
            </div>
            <div className="fa-text">
              <p>
                ФИНГОЛД работает на пересечении рынка драгоценных металлов, ликвидности и
                расчётных решений.
              </p>
              <p>
                Мы сопровождаем операции, в которых важны не только цена металла, но и структура
                сделки, доступ к контрагентам, сроки расчётов, документы и контроль исполнения.
              </p>
              <a className="fa-btn" href="#fgb-news" data-scroll>
                Новости компании
              </a>
            </div>
          </div>

          <div className="fa-cards">
            <article className="fa-card">
              <h3>Ликвидность</h3>
              <p>
                Работа с крупными объёмами и поиск встречной стороны там, где стандартной глубины
                рынка недостаточно.
              </p>
            </article>
            <article className="fa-card">
              <h3>Контур</h3>
              <p>Структура сделки, расчёты, документы, сроки и порядок подтверждения результата.</p>
            </article>
            <article className="fa-card">
              <h3>Исполнение</h3>
              <p>
                Биржевые, внебиржевые и партнёрские маршруты для профессиональных участников
                рынка.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
