import { useLeadForm } from '../../../hooks/useLeadForm';

const INITIAL_FIELDS = {
  Имя: '',
  Компания: '',
  Email: '',
  Телефон: '',
  Тема: '',
  Сообщение: '',
};

/**
 * Контакты (fct-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 4689-4876.
 */
function Contacts() {
  const { fields, setField, handleSubmit, submitted, submitting, error } = useLeadForm(
    'contacts',
    INITIAL_FIELDS,
  );

  return (
    <div id="fgb-contacts">
      <section className="fct-section">
        <div className="fct-grid">
          {/* Left: info */}
          <div className="fct-info">
            <div>
              <p className="fct-kicker">Контакты</p>
              <h2 className="fct-title">
                Свяжитесь
                <br />с <span>ФИНГОЛД</span>
              </h2>

              <div className="fct-details">
                <div className="fct-detail-item">
                  <div className="fct-detail-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 0180 2.38 2 2 0 014.11 4.5l-.08 1A17 17 0 005.95 9.1" />
                      <path d="M22 16.92a1.93 1.93 0 00-1.28-1.8l-3.46-1.15A2 2 0 0015 14.5l-.68.68a16 16 0 01-5.5-5.5l.68-.68a2 2 0 00.43-2.3L8.78 3.28A1.92 1.92 0 007 2H4a2 2 0 00-2 2C2.39 11.67 8.33 17.61 16 18a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="fct-detail-label">Телефон</span>
                    <div className="fct-detail-value">
                      <a href="tel:+79872675442">+7 (987) 267-54-42</a>
                    </div>
                  </div>
                </div>

                <div className="fct-detail-item">
                  <div className="fct-detail-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="fct-detail-label">Email</span>
                    <div className="fct-detail-value">
                      <a href="mailto:info@fingoldcompany.ru">info@fingoldcompany.ru</a>
                    </div>
                  </div>
                </div>

                <div className="fct-detail-item">
                  <div className="fct-detail-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="fct-detail-label">Адрес</span>
                    <div className="fct-detail-value">Москва, Россия</div>
                  </div>
                </div>
              </div>

              <p className="fct-tagline">
                Работаем с банками, фондами, инвесторами и золотодобытчиками. Ответим в рабочее
                время.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="fct-form-wrap">
            <p className="fct-form-title">Оставьте заявку — мы выйдем на связь</p>

            <form
              id="fgb-contact-form"
              name="fgb-contact-form"
              className="fct-form t-form js-form-proccess"
              role="form"
              noValidate
              onSubmit={handleSubmit}
            >
              {submitted && (
                <div className="js-successbox">
                  <p>Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              )}
              {error && (
                <div className="js-successbox">
                  <p>{error}</p>
                </div>
              )}

              <div className="fct-row">
                <div className="vb-input-group fct-field">
                  <label className="fct-label" htmlFor="fct-name">
                    Ваше имя
                  </label>
                  <input
                    id="fct-name"
                    className="fct-input js-tilda-rule"
                    type="text"
                    name="Имя"
                    placeholder="Иван Петров"
                    required
                    value={fields['Имя']}
                    onChange={(e) => setField('Имя', e.target.value)}
                  />
                  <div className="t-input-error">Введите имя</div>
                </div>

                <div className="vb-input-group fct-field">
                  <label className="fct-label" htmlFor="fct-company">
                    Компания
                  </label>
                  <input
                    id="fct-company"
                    className="fct-input js-tilda-rule"
                    type="text"
                    name="Компания"
                    placeholder="Название"
                    required
                    value={fields['Компания']}
                    onChange={(e) => setField('Компания', e.target.value)}
                  />
                  <div className="t-input-error">Введите название компании</div>
                </div>
              </div>

              <div className="fct-row">
                <div className="vb-input-group fct-field">
                  <label className="fct-label" htmlFor="fct-email">
                    Email
                  </label>
                  <input
                    id="fct-email"
                    className="fct-input js-tilda-rule"
                    type="email"
                    name="Email"
                    placeholder="you@company.ru"
                    required
                    value={fields['Email']}
                    onChange={(e) => setField('Email', e.target.value)}
                  />
                  <div className="t-input-error">Введите корректный email</div>
                </div>

                <div className="vb-input-group fct-field">
                  <label className="fct-label" htmlFor="fct-phone">
                    Телефон
                  </label>
                  <input
                    id="fct-phone"
                    className="fct-input js-tilda-rule"
                    type="tel"
                    name="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={fields['Телефон']}
                    onChange={(e) => setField('Телефон', e.target.value)}
                  />
                  <div className="t-input-error">Введите корректный телефон</div>
                </div>
              </div>

              <div className="vb-input-group fct-field">
                <label className="fct-label" htmlFor="fct-topic">
                  Тема запроса
                </label>
                <div className="fct-select-wrap">
                  <select
                    id="fct-topic"
                    className="fct-select js-tilda-rule"
                    name="Тема"
                    required
                    value={fields['Тема']}
                    onChange={(e) => setField('Тема', e.target.value)}
                  >
                    <option value="">Выберите тему</option>
                    <option value="Ликвидность золота">Ликвидность золота</option>
                    <option value="Переговорные сделки">Переговорные сделки</option>
                    <option value="Фондирование циклов">Фондирование циклов</option>
                    <option value="Фондовые продукты">Фондовые продукты</option>
                    <option value="Экспортный контур">Экспортный контур (Loco London)</option>
                    <option value="Партнёрство">Партнёрство</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                <div className="t-input-error">Выберите тему</div>
              </div>

              <div className="vb-input-group fct-field">
                <label className="fct-label" htmlFor="fct-message">
                  Сообщение
                </label>
                <textarea
                  id="fct-message"
                  className="fct-textarea js-tilda-rule"
                  name="Сообщение"
                  placeholder="Кратко опишите вашу задачу или вопрос..."
                  required
                  minLength={10}
                  value={fields['Сообщение']}
                  onChange={(e) => setField('Сообщение', e.target.value)}
                ></textarea>
                <div className="t-input-error">Введите сообщение (минимум 10 символов)</div>
              </div>

              <button
                type="submit"
                className="fct-submit t-submit t-btnflex t-btnflex_lg"
                disabled={submitting}
              >
                <span className="t-btnflex__text">
                  {submitting ? 'Отправка…' : 'Отправить заявку'}
                </span>
              </button>

              <p className="fct-privacy">
                Нажимая кнопку, вы соглашаетесь с
                <a href="#fgb-contacts" style={{ color: 'var(--fg-copper)' }}>
                  политикой конфиденциальности
                </a>
                . Данные не передаются третьим лицам.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
