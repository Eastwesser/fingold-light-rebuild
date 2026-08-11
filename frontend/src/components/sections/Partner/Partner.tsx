import { useLeadForm } from '../../../hooks/useLeadForm';

const INITIAL_FIELDS = {
  Имя: '',
  Должность: '',
  Компания: '',
  Email: '',
  Телефон: '',
  'Тип партнёрства': '',
  Сообщение: '',
};

/**
 * Заявка на партнёрство (fpa-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 3989-4170.
 */
function Partner() {
  const { fields, setField, handleSubmit, submitted, submitting, error } = useLeadForm(
    'partner',
    INITIAL_FIELDS,
  );

  return (
    <div id="fgb-partner">
      <section className="fpa-section">
        <div className="fpa-grid">
          {/* Left */}
          <div className="fpa-info">
            <div>
              <p className="fpa-kicker">Партнёрская программа</p>
              <h2 className="fpa-title">
                Станьте
                <br />
                <span>партнёром</span>
                <br />
                ФИНГОЛД
              </h2>
              <p className="fpa-lead">
                Мы выстраиваем долгосрочные отношения с банками, брокерами, управляющими
                компаниями и экспортёрами. Партнёры получают приоритетный доступ к ликвидности и
                совместные продуктовые возможности.
              </p>

              <div className="fpa-types">
                <div className="fpa-type">
                  <div className="fpa-type-bar"></div>
                  <div>
                    <h3>Банки-партнёры</h3>
                    <p>
                      Совместный маркет-мейкинг, лимиты на переговорные сделки и интеграция в
                      расчётный контур ФИНГОЛД.
                    </p>
                  </div>
                </div>
                <div className="fpa-type">
                  <div className="fpa-type-bar"></div>
                  <div>
                    <h3>Брокеры и УК</h3>
                    <p>
                      Доступ к институциональной ликвидности золота для клиентских портфелей и
                      фондовых продуктов.
                    </p>
                  </div>
                </div>
                <div className="fpa-type">
                  <div className="fpa-type-bar"></div>
                  <div>
                    <h3>Экспортёры</h3>
                    <p>
                      Совместный выход на международный контур обращения металла и трансграничные
                      расчёты через партнёрскую инфраструктуру.
                    </p>
                  </div>
                </div>
                <div className="fpa-type">
                  <div className="fpa-type-bar"></div>
                  <div>
                    <h3>Технологические партнёры</h3>
                    <p>
                      Интеграция с торговыми системами, API-доступ к данным и совместная
                      разработка продуктовых решений.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fpa-stats">
              <div>
                <span className="fpa-stat-num">
                  30<em>+</em>
                </span>
                <span className="fpa-stat-label">Публикаций за 2026</span>
              </div>
              <div>
                <span className="fpa-stat-num">
                  5<em>+</em>
                </span>
                <span className="fpa-stat-label">Продуктовых направлений</span>
              </div>
              <div>
                <span className="fpa-stat-num">
                  24<em>/7</em>
                </span>
                <span className="fpa-stat-label">Мониторинг позиций</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="fpa-form-panel">
            <p className="fpa-form-title">Заявка на партнёрство</p>
            <p className="fpa-form-sub">Заполните форму — мы свяжемся в течение одного рабочего дня.</p>

            <form
              id="fgb-partner-form"
              name="fgb-partner-form"
              className="fpa-form t-form js-form-proccess"
              role="form"
              noValidate
              onSubmit={handleSubmit}
            >
              {submitted && (
                <div className="js-successbox">
                  <p>Спасибо! Ваша заявка на партнёрство принята. Мы свяжемся с вами в течение рабочего дня.</p>
                </div>
              )}
              {error && (
                <div className="js-successbox">
                  <p>{error}</p>
                </div>
              )}

              <div className="fpa-row">
                <div className="vb-input-group fpa-field">
                  <label className="fpa-label" htmlFor="fpa-name">
                    Имя
                  </label>
                  <input
                    id="fpa-name"
                    className="fpa-input js-tilda-rule"
                    type="text"
                    name="Имя"
                    placeholder="Иван Петров"
                    required
                    value={fields['Имя']}
                    onChange={(e) => setField('Имя', e.target.value)}
                  />
                  <div className="t-input-error">Введите имя</div>
                </div>
                <div className="vb-input-group fpa-field">
                  <label className="fpa-label" htmlFor="fpa-position">
                    Должность
                  </label>
                  <input
                    id="fpa-position"
                    className="fpa-input js-tilda-rule"
                    type="text"
                    name="Должность"
                    placeholder="Директор"
                    required
                    value={fields['Должность']}
                    onChange={(e) => setField('Должность', e.target.value)}
                  />
                  <div className="t-input-error">Введите должность</div>
                </div>
              </div>

              <div className="vb-input-group fpa-field">
                <label className="fpa-label" htmlFor="fpa-company">
                  Компания
                </label>
                <input
                  id="fpa-company"
                  className="fpa-input js-tilda-rule"
                  type="text"
                  name="Компания"
                  placeholder="Название организации"
                  required
                  value={fields['Компания']}
                  onChange={(e) => setField('Компания', e.target.value)}
                />
                <div className="t-input-error">Введите название</div>
              </div>

              <div className="fpa-row">
                <div className="vb-input-group fpa-field">
                  <label className="fpa-label" htmlFor="fpa-email">
                    Email
                  </label>
                  <input
                    id="fpa-email"
                    className="fpa-input js-tilda-rule"
                    type="email"
                    name="Email"
                    placeholder="you@company.ru"
                    required
                    value={fields['Email']}
                    onChange={(e) => setField('Email', e.target.value)}
                  />
                  <div className="t-input-error">Введите email</div>
                </div>
                <div className="vb-input-group fpa-field">
                  <label className="fpa-label" htmlFor="fpa-phone">
                    Телефон
                  </label>
                  <input
                    id="fpa-phone"
                    className="fpa-input js-tilda-rule"
                    type="tel"
                    name="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={fields['Телефон']}
                    onChange={(e) => setField('Телефон', e.target.value)}
                  />
                  <div className="t-input-error">Введите телефон</div>
                </div>
              </div>

              <div className="vb-input-group fpa-field">
                <label className="fpa-label" htmlFor="fpa-type">
                  Тип партнёрства
                </label>
                <div className="fpa-select-wrap">
                  <select
                    id="fpa-type"
                    className="fpa-select js-tilda-rule"
                    name="Тип партнёрства"
                    required
                    value={fields['Тип партнёрства']}
                    onChange={(e) => setField('Тип партнёрства', e.target.value)}
                  >
                    <option value="">Выберите формат</option>
                    <option value="Банк-партнёр">Банк-партнёр</option>
                    <option value="Брокер / УК">Брокер / Управляющая компания</option>
                    <option value="Экспортёр золота">Экспортёр золота</option>
                    <option value="Технологический партнёр">Технологический партнёр</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                <div className="t-input-error">Выберите тип</div>
              </div>

              <div className="vb-input-group fpa-field">
                <label className="fpa-label" htmlFor="fpa-message">
                  Ваши задачи и интересы
                </label>
                <textarea
                  id="fpa-message"
                  className="fpa-textarea js-tilda-rule"
                  name="Сообщение"
                  placeholder="Опишите, что вы хотите решить через партнёрство…"
                  required
                  minLength={10}
                  value={fields['Сообщение']}
                  onChange={(e) => setField('Сообщение', e.target.value)}
                ></textarea>
                <div className="t-input-error">Введите сообщение</div>
              </div>

              <button
                type="submit"
                className="fpa-submit t-submit t-btnflex t-btnflex_lg"
                disabled={submitting}
              >
                <span className="t-btnflex__text">
                  {submitting ? 'Отправка…' : 'Отправить заявку'}
                </span>
              </button>

              <p className="fpa-privacy">
                Нажимая кнопку, вы соглашаетесь с
                <a href="#fgb-contacts">политикой конфиденциальности</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
