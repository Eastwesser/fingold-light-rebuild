/**
 * Главный блок с CTA (fh-*) — см. docs/reference/Fingold_Light_Rebuild.html, строки 429-470.
 */
function Hero() {
  return (
    <div id="fgb-hero">
      <section className="fh-section">
        <div className="fh-shell">
          <div className="fh-copy">
            <div className="fh-kicker">Gold-backed financial infrastructure</div>
            <h1 className="fh-title">
              <span>ФИНГОЛД:</span>
              <span className="is-accent">золото</span>
              <span>как финансовая</span>
              <span>инфраструктура</span>
            </h1>
            <p className="fh-lead">
              Мы развиваем решения на базе золота: биржевую ликвидность, фондовые продукты,
              расчётные контуры и партнёрские каналы для инвесторов и бизнеса.
            </p>
            <div className="fh-actions">
              <a className="fh-btn" href="#fgb-cap" data-scroll>
                <span>Наши решения</span>
                <svg viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a className="fh-link" href="#fgb-about" data-scroll>
                Подробнее о Финголд
              </a>
            </div>
          </div>

          <div className="fh-panel" aria-label="Ключевые направления Fingold">
            <div className="fh-panel-title">
              <span>Gold</span>
              <span>Infrastructure</span>
            </div>
            <div className="fh-year">2030</div>
            <div className="fh-grid">
              <div className="fh-tile">
                <b>
                  Биржевая
                  <br />
                  ликвидность
                </b>
                <span>MOEX</span>
              </div>
              <div className="fh-tile">
                <b>
                  Фондовые
                  <br />
                  продукты
                </b>
                <span>OPIF</span>
              </div>
              <div className="fh-tile">
                <b>
                  Расчётные
                  <br />
                  цепочки
                </b>
                <span>Trade</span>
              </div>
              <div className="fh-tile">
                <b>
                  Loco London
                  <br />
                  Gold
                </b>
                <span>Global</span>
              </div>
            </div>
          </div>
        </div>

        <div className="fh-strip">
          <div className="fh-strip-inner">
            <div className="fh-point">
              <p>
                <b>Глубокая экспертиза</b>на рынке золота
              </p>
            </div>
            <div className="fh-point">
              <p>
                <b>Надёжная инфраструктура</b>и контроль рисков
              </p>
            </div>
            <div className="fh-point">
              <p>
                <b>Партнёрство</b>и долгосрочная ценность
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
