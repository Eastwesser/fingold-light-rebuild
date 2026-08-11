import { smoothScrollToId } from '../../../utils/scroll';
import fingoldLogo from '../../../assets/brand/fingold-logo.png';

interface FooterProps {
  onManageCookies: () => void;
}

/**
 * Подвал (ff-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 5602-5720.
 * Атрибуты data-scroll подготовлены для этапа 3.5 (плавный скролл).
 */
function Footer({ onManageCookies }: FooterProps) {
  return (
    <div id="fgb-footer">
      <footer className="ff-footer" id="fgb-footer-anchor">
        <div className="ff-inner">
          {/* Top */}
          <div className="ff-top">
            <div className="ff-brand">
              <a className="ff-logo" href="#fgb-hero" data-scroll="">
                <img src={fingoldLogo} alt="ФИНГОЛД — Financial services in gold" />
              </a>
              <p className="ff-tagline">
                Золото как финансовая инфраструктура. Биржевая ликвидность, фондовые продукты,
                расчётные контуры и партнёрские каналы для институциональных клиентов.
              </p>
            </div>
            <div className="ff-top-cta">
              <span className="ff-cta-label">Готовы начать работу?</span>
              <a className="ff-cta-btn" href="#fgb-contacts" data-scroll="">
                Связаться с нами
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="ff-sitemap">
            <div>
              <p className="ff-col-title">Решения</p>
              <ul className="ff-col-links">
                <li>
                  <a href="#fgb-cap" data-scroll="">
                    Ликвидность золота
                  </a>
                </li>
                <li>
                  <a href="#fgb-cap" data-scroll="">
                    Переговорные сделки
                  </a>
                </li>
                <li>
                  <a href="#fgb-process" data-scroll="">
                    Как мы работаем
                  </a>
                </li>
                <li>
                  <a href="#fgb-products" data-scroll="">
                    Все продукты
                  </a>
                </li>
                <li>
                  <a href="#fgb-partner" data-scroll="">
                    Партнёрство
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="ff-col-title">Продукты</p>
              <ul className="ff-col-links">
                <li>
                  <a href="#fgb-products" data-scroll="">
                    Биржевые инструменты
                  </a>
                </li>
                <li>
                  <a href="#fgb-products" data-scroll="">
                    Фондовые продукты
                  </a>
                </li>
                <li>
                  <a href="#fgb-products" data-scroll="">
                    Расчётные контуры
                  </a>
                </li>
                <li>
                  <a href="#fgb-global" data-scroll="">
                    Loco London Gold
                  </a>
                </li>
                <li>
                  <a href="#fgb-global" data-scroll="">
                    Экспортный контур
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="ff-col-title">Кому мы полезны</p>
              <ul className="ff-col-links">
                <li>
                  <a href="#fgb-serve" data-scroll="">
                    Банкам
                  </a>
                </li>
                <li>
                  <a href="#fgb-serve" data-scroll="">
                    Фондам
                  </a>
                </li>
                <li>
                  <a href="#fgb-serve" data-scroll="">
                    Инвесторам
                  </a>
                </li>
                <li>
                  <a href="#fgb-serve" data-scroll="">
                    Золотодобытчикам
                  </a>
                </li>
                <li>
                  <a href="#fgb-global" data-scroll="">
                    Глобально
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="ff-col-title">Аналитика</p>
              <ul className="ff-col-links">
                <li>
                  <a href="#fgb-insights" data-scroll="">
                    Публикации
                  </a>
                </li>
                <li>
                  <a href="#fgb-news" data-scroll="">
                    Все новости
                  </a>
                </li>
                <li>
                  <a href="#fgb-team" data-scroll="">
                    Антон Никитин
                  </a>
                </li>
                <li>
                  <a href="#fgb-news" data-scroll="">
                    Forbes
                  </a>
                </li>
                <li>
                  <a href="#fgb-news" data-scroll="">
                    Коммерсантъ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="ff-col-title">О компании</p>
              <ul className="ff-col-links">
                <li>
                  <a href="#fgb-about" data-scroll="">
                    О ФИНГОЛД
                  </a>
                </li>
                <li>
                  <a href="#fgb-team" data-scroll="">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#fgb-careers" data-scroll="">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#fgb-contacts" data-scroll="">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#fgb-login" data-scroll="">
                    Личный кабинет
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contacts row */}
          <div className="ff-contacts">
            <div className="ff-contact-items">
              <div className="ff-contact-item">
                <span className="ff-contact-label">Email</span>
                <span className="ff-contact-value">
                  <a href="mailto:info@fingoldcompany.ru">info@fingoldcompany.ru</a>
                </span>
              </div>
              <div className="ff-contact-item">
                <span className="ff-contact-label">Телефон</span>
                <span className="ff-contact-value">
                  <a href="tel:+79872675442">+7 (987) 267-54-42</a>
                </span>
              </div>
              <div className="ff-contact-item">
                <span className="ff-contact-label">HR / Карьера</span>
                <span className="ff-contact-value">
                  <a href="mailto:hr@fingoldcompany.ru">hr@fingoldcompany.ru</a>
                </span>
              </div>
              <div className="ff-contact-item">
                <span className="ff-contact-label">Адрес</span>
                <span className="ff-contact-value">Москва, Россия</span>
              </div>
            </div>

            <div className="ff-social">
              <a className="ff-social-link" href="#fgb-contacts" data-scroll="" aria-label="Telegram">
                TG
              </a>
              <a className="ff-social-link" href="#fgb-news" data-scroll="" aria-label="ВКонтакте">
                ВК
              </a>
              <a className="ff-social-link" href="#fgb-news" data-scroll="" aria-label="РБК">
                РБК
              </a>
              <a
                className="ff-social-link"
                href="https://www.kommersant.ru"
                target="_blank"
                rel="noopener"
                aria-label="Коммерсантъ"
              >
                Ъ
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="ff-bottom">
            <span className="ff-copy">© 2026 ООО «ФИНГОЛД». Все права защищены.</span>
            <div className="ff-legal">
              <a href="#fgb-footer-anchor" data-scroll="">
                Политика конфиденциальности
              </a>
              <a href="#fgb-footer-anchor" data-scroll="">
                Пользовательское соглашение
              </a>
              <a href="#fgb-footer-anchor" data-scroll="">
                Раскрытие информации
              </a>
              <a
                href="#fgb-cookie"
                id="ff-manage-cookies"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  onManageCookies();
                  smoothScrollToId('fgb-footer-anchor');
                }}
              >
                Управление cookie
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
