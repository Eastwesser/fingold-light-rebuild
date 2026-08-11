/**
 * Методология работы (fp-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 2033-2149.
 */
function Process() {
  return (
    <div id="fgb-process">
      <section className="fp-section" id="process">
        <div className="fp-inner">
          <div className="fp-header">
            <div>
              <p className="fp-kicker">Методология работы</p>
              <h2 className="fp-title">
                Как мы <span>решаем</span> вашу задачу
              </h2>
            </div>
            <p className="fp-lead">
              От первого контакта до закрытой сделки — прозрачный процесс без лишних звеньев.
              Каждый шаг согласован с вами заранее.
            </p>
          </div>

          <div className="fp-steps">
            <div className="fp-step">
              <div className="fp-step-left">
                <div className="fp-num">01</div>
                <div className="fp-step-label">
                  <span className="fp-step-kicker">Входная точка</span>
                  <h3>Понимаем задачу</h3>
                </div>
              </div>
              <div className="fp-step-right">
                <p>
                  Первый звонок или встреча — без формализма. Мы разбираемся в вашей позиции:
                  объём, срочность, контрагентные ограничения, валютный контур. Это занимает
                  30–60 минут и полностью бесплатно.
                </p>
                <ul className="fp-detail-tags">
                  <li>Звонок или встреча</li>
                  <li>Анализ позиции</li>
                  <li>NDA при необходимости</li>
                </ul>
              </div>
            </div>

            <div className="fp-step">
              <div className="fp-step-left">
                <div className="fp-num">02</div>
                <div className="fp-step-label">
                  <span className="fp-step-kicker">Структура сделки</span>
                  <h3>Предлагаем решение</h3>
                </div>
              </div>
              <div className="fp-step-right">
                <p>
                  Формируем конкретное предложение: инструмент, цена, объём, расчётная цепочка и
                  сроки. Для переговорных сделок — ищем контрагента в нашей сети, для биржевых —
                  готовим параметры заявки.
                </p>
                <ul className="fp-detail-tags">
                  <li>GLDRUB_TOM или OTC</li>
                  <li>Параметры расчётов</li>
                  <li>Индикативная цена</li>
                </ul>
              </div>
            </div>

            <div className="fp-step">
              <div className="fp-step-left">
                <div className="fp-num">03</div>
                <div className="fp-step-label">
                  <span className="fp-step-kicker">Согласование</span>
                  <h3>Фиксируем условия</h3>
                </div>
              </div>
              <div className="fp-step-right">
                <p>
                  Согласовываем цену, объём и дату расчётов. Для переговорных сделок оформляем
                  подтверждение с точными параметрами до исполнения. Никаких сюрпризов в последний
                  момент.
                </p>
                <ul className="fp-detail-tags">
                  <li>Trade confirmation</li>
                  <li>Фиксированная цена</li>
                  <li>Дата валютирования</li>
                </ul>
              </div>
            </div>

            <div className="fp-step">
              <div className="fp-step-left">
                <div className="fp-num">04</div>
                <div className="fp-step-label">
                  <span className="fp-step-kicker">Исполнение</span>
                  <h3>Проводим сделку</h3>
                </div>
              </div>
              <div className="fp-step-right">
                <p>
                  Исполняем через биржевую инфраструктуру MOEX/НКЦ или напрямую между
                  контрагентами. Контролируем расчёты на каждом этапе — от поставки металла до
                  денежного клиринга.
                </p>
                <ul className="fp-detail-tags">
                  <li>MOEX / НКЦ</li>
                  <li>Поставка металла</li>
                  <li>Денежный клиринг</li>
                </ul>
              </div>
            </div>

            <div className="fp-step">
              <div className="fp-step-left">
                <div className="fp-num">05</div>
                <div className="fp-step-label">
                  <span className="fp-step-kicker">После сделки</span>
                  <h3>Поддерживаем отношения</h3>
                </div>
              </div>
              <div className="fp-step-right">
                <p>
                  Предоставляем отчётность, документы и аналитику по итогам. Для постоянных
                  клиентов — выстраиваем долгосрочный контур: лимиты, предодобренные параметры и
                  приоритетный доступ к ликвидности.
                </p>
                <ul className="fp-detail-tags">
                  <li>Полная отчётность</li>
                  <li>Приоритетный доступ</li>
                  <li>Партнёрские условия</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fp-cta">
            <div className="fp-cta-text">
              <strong>Готовы начать?</strong>
              Первая консультация бесплатна — расскажите о вашей задаче, и мы предложим
              оптимальный маршрут.
            </div>
            <a className="fp-cta-btn" href="#fgb-contacts">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
