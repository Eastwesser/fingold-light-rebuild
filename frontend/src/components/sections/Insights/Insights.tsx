import goldBarsPhoto from '../../../assets/photos/gold-bars.png';
import goldInfrastructurePhoto from '../../../assets/photos/careers-gold-infrastructure.jpg';

/**
 * Аналитика и цифры (fi-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 2624-2688.
 */
function Insights() {
  return (
    <div id="fgb-insights">
      <section className="fi-section">
        <div className="fi-inner">
          <div className="fi-header">
            <div>
              <p className="fi-kicker">Аналитика и экспертиза</p>
              <h2 className="fi-title">
                ФИНГОЛД в <span>цифрах</span>
                <br />
                и публикациях
              </h2>
            </div>
            <a className="fi-all" href="#fgb-news">
              Все публикации
            </a>
          </div>

          {/* Featured + side */}
          <div className="fi-layout">
            <div className="fi-featured">
              <div className="fi-feat-tag">Колонка основателя</div>
              <h3>Золото нового цикла: рынок меняет не цену металла, а его роль</h3>
              <p>
                Почему золото перестаёт быть просто защитным активом и становится
                инфраструктурой — биржевой, расчётной, фондовой. Колонка Антона Никитина для
                gold.1prime.ru.
              </p>
              <a
                className="fi-feat-link"
                href="https://gold.1prime.ru/20260623/nikitin-1554261.html"
                target="_blank"
                rel="noopener"
              >
                Читать статью
              </a>
            </div>

            <div className="fi-side-card">
              <div className="fi-side-icon">
                <img src={goldBarsPhoto} alt="GLDRUB_TOM и биржевая ликвидность" loading="lazy" />
              </div>
              <h3>GLDRUB_TOM как инструмент биржевой ликвидности</h3>
              <p>
                Как переговорные сделки и брокерская инфраструктура помогают работать с крупным
                объёмом.
              </p>
              <a className="fi-side-link" href="#fgb-news">
                Читать далее ›
              </a>
            </div>

            <div className="fi-side-card">
              <div className="fi-side-icon">
                <img
                  src={goldInfrastructurePhoto}
                  alt="Золото как финансовая инфраструктура"
                  loading="lazy"
                />
              </div>
              <h3>Финансовый SpaceX: как золото перезапустит мировые расчёты</h3>
              <p>
                Антон Никитин — о том, может ли золото стать базовым активом новой международной
                расчётной системы.
              </p>
              <a
                className="fi-side-link"
                href="https://biz-anatomy.ru/biznes-idei/finansovyy-spacex-kak-zoloto-perezapustit-mirovye-raschety"
                target="_blank"
                rel="noopener"
              >
                Читать далее ›
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="fi-stats">
            <div className="fi-stat">
              <span className="fi-stat-num">
                30<em>+</em>
              </span>
              <span className="fi-stat-label">Публикаций за 2026 год</span>
            </div>
            <div className="fi-stat">
              <span className="fi-stat-num">
                <em>$</em>6070
              </span>
              <span className="fi-stat-label">Прогноз цены золота за унцию</span>
            </div>
            <div className="fi-stat">
              <span className="fi-stat-num">
                78<em>₽</em>
              </span>
              <span className="fi-stat-label">Прогноз курса доллара летом</span>
            </div>
            <div className="fi-stat">
              <span className="fi-stat-num">
                50<em>%</em>
              </span>
              <span className="fi-stat-label">Доля агентских расчётов на рынке</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insights;
