import { useLoginForm } from '../../../hooks/useLoginForm';

/**
 * Личный кабинет — вход (fl-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 5232-5362.
 * Демо-форма: реальной авторизации нет, при валидных полях скроллит к Контактам
 * (повторяет поведение оригинала — заглушка вместо бэкенда).
 */
function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    emailError,
    passwordError,
    handleSubmit,
  } = useLoginForm();

  return (
    <div id="fgb-login">
      <section className="fl-section">
        {/* Left: brand */}
        <div className="fl-brand">
          <a className="fl-logo" href="#fgb-hero">
            ФИНГОЛД
          </a>

          <div className="fl-brand-center">
            <p className="fl-brand-kicker">Личный кабинет</p>
            <h2 className="fl-brand-title">
              Управляйте
              <br />
              позициями
              <br />в <span>реальном</span> времени
            </h2>

            <div className="fl-features">
              <div className="fl-feature">
                <span className="fl-feat-dot"></span>
                <p>
                  <strong>Биржевые данные и аналитика</strong>Котировки GLDRUB_TOM, история сделок
                  и позиции в едином окне.
                </p>
              </div>
              <div className="fl-feature">
                <span className="fl-feat-dot"></span>
                <p>
                  <strong>Управление заявками</strong>Отслеживайте статус переговорных сделок и
                  расчётных цепочек.
                </p>
              </div>
              <div className="fl-feature">
                <span className="fl-feat-dot"></span>
                <p>
                  <strong>Документы и отчёты</strong>Доступ к договорам, отчётам и истории
                  операций 24/7.
                </p>
              </div>
            </div>
          </div>

          <div className="fl-brand-footer">© 2026 ФИНГОЛД. Доступ строго для авторизованных пользователей.</div>
        </div>

        {/* Right: login form */}
        <div className="fl-form-panel">
          <div className="fl-form-box">
            <h2 className="fl-form-title">Вход</h2>
            <p className="fl-form-sub">
              Нет доступа? <a href="#fgb-contacts">Оставьте заявку</a> — мы свяжемся с вами.
            </p>

            <div className="fl-form">
              <div className={`fl-field${emailError ? ' has-error' : ''}`} id="fl-email-field">
                <label className="fl-field-label" htmlFor="fl-email-input">
                  Email
                </label>
                <input
                  className="fl-input"
                  id="fl-email-input"
                  type="email"
                  name="email"
                  placeholder="you@company.ru"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="fl-error-msg">Введите корректный email</div>
              </div>

              <div className={`fl-field${passwordError ? ' has-error' : ''}`} id="fl-pass-field">
                <div className="fl-meta">
                  <label className="fl-field-label" htmlFor="fl-pass-input">
                    Пароль
                  </label>
                  <a className="fl-forgot" href="#fgb-contacts">
                    Забыли пароль?
                  </a>
                </div>
                <div className="fl-pass-wrap">
                  <input
                    className="fl-input"
                    id="fl-pass-input"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="fl-pass-toggle"
                    type="button"
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={togglePasswordVisibility}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                <div className="fl-error-msg">Введите пароль</div>
              </div>

              <button className="fl-submit" type="button" id="fl-submit-btn" onClick={handleSubmit}>
                Войти
              </button>

              <div className="fl-divider">или</div>

              <a className="fl-register" href="#fgb-contacts">
                Запросить доступ
              </a>

              <a className="fl-back" href="#fgb-hero">
                На главную
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
