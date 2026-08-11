/**
 * Команда ФИНГОЛД (ft-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 3220-3291.
 */
function Team() {
  return (
    <div id="fgb-team">
      <section className="ft-section">
        <div className="ft-inner">
          <div className="ft-header">
            <p className="ft-kicker">Люди и принципы</p>
            <h2 className="ft-title">
              Команда <span>ФИНГОЛД</span>
            </h2>
          </div>

          {/* Founder */}
          <div className="ft-founder">
            <div className="ft-founder-photo">
              <div className="ft-founder-photo-label">Основатель</div>
              <div className="ft-founder-name">
                Антон
                <br />
                Никитин
              </div>
            </div>
            <div className="ft-founder-copy">
              <span className="ft-founder-role">Основатель и Генеральный директор</span>
              <h3>Антон Никитин</h3>
              <p>
                Предприниматель и финансовый эксперт, специализирующийся на рынке золота и
                международных расчётах. Основал ФИНГОЛД как платёжную и инфраструктурную компанию
                на базе золота.
              </p>
              <p>
                Регулярный спикер РБК, Forbes, Коммерсантъ, Известий, gold.1prime.ru. Автор
                аналитических колонок о роли золота в финансовой архитектуре России и мировых
                расчётных системах.
              </p>
              <p>
                Ведёт публичную экспертизу по темам: биржевая торговля золотом, трансграничные
                расчёты, Loco London Gold, валютное регулирование и инвестиционные продукты на
                базе металла.
              </p>

              <div className="ft-media-label">Цитируется в изданиях</div>
              <ul className="ft-media-list">
                <li>
                  <a href="https://www.forbes.ru" target="_blank" rel="noopener">
                    Forbes
                  </a>
                </li>
                <li>
                  <a href="https://www.kommersant.ru" target="_blank" rel="noopener">
                    Коммерсантъ
                  </a>
                </li>
                <li>
                  <a href="https://nsk.plus.rbc.ru" target="_blank" rel="noopener">
                    РБК
                  </a>
                </li>
                <li>
                  <a href="https://iz.ru" target="_blank" rel="noopener">
                    Известия
                  </a>
                </li>
                <li>
                  <a href="https://gold.1prime.ru" target="_blank" rel="noopener">
                    gold.1prime.ru
                  </a>
                </li>
                <li>
                  <a href="https://monocle.ru" target="_blank" rel="noopener">
                    Monocle
                  </a>
                </li>
                <li>
                  <a href="https://rg.ru" target="_blank" rel="noopener">
                    Российская газета
                  </a>
                </li>
                <li>
                  <a href="https://www.banki.ru" target="_blank" rel="noopener">
                    Banki.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Principles */}
          <div className="ft-principles">
            <div className="ft-principle">
              <span className="ft-principle-num">I</span>
              <h3>Прозрачность расчётов</h3>
              <p>
                Каждая сделка фиксируется с точными параметрами до исполнения. Никаких скрытых
                комиссий и постфактум сюрпризов.
              </p>
            </div>
            <div className="ft-principle">
              <span className="ft-principle-num">II</span>
              <h3>Глубина рынка</h3>
              <p>
                Мы работаем там, где стандартного стакана недостаточно. Крупный объём — наша
                специализация, а не исключение.
              </p>
            </div>
            <div className="ft-principle">
              <span className="ft-principle-num">III</span>
              <h3>Скорость исполнения</h3>
              <p>
                Биржевые и внебиржевые сделки закрываем в срок. Расчётные цепочки выстраиваем
                заранее, а не в момент сделки.
              </p>
            </div>
            <div className="ft-principle">
              <span className="ft-principle-num">IV</span>
              <h3>Экспертиза как продукт</h3>
              <p>
                Публичная аналитика и комментарии — часть нашей работы. Рынок должен понимать, что
                происходит с золотом.
              </p>
            </div>
          </div>

          {/* Join CTA */}
          <div className="ft-join">
            <div className="ft-join-text">
              <strong>Хотите стать частью команды?</strong>
              Мы ищем трейдеров, аналитиков и специалистов по продуктам с пониманием рынка золота.
            </div>
            <a className="ft-join-btn" href="#fgb-careers">
              Открытые вакансии
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
