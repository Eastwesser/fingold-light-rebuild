import { useState } from 'react';
import type { MouseEvent } from 'react';
import fingoldLogo from '../../../assets/brand/fingold-logo.png';

interface HeaderProps {
  onOpenSearch: () => void;
}

/**
 * Навигация + мобильное меню (классы fn-*) — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 391-427.
 * Открытие/закрытие drawer'а перенесено из инлайн-скрипта (строки 505-533) в React state.
 */
function Header({ onOpenSearch }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = (e: MouseEvent) => {
    e.preventDefault();
    closeMenu();
    onOpenSearch();
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <div id="fgb-nav" className={isOpen ? 'is-open' : undefined}>
      <div className="fn-wrap">
        <a className="fn-logo" href="#fgb-hero" data-scroll onClick={closeMenu}>
          <img src={fingoldLogo} alt="ФИНГОЛД — Financial services in gold" />
        </a>

        <nav className="fn-menu" aria-label="Основная навигация">
          <a href="#fgb-cap" data-scroll onClick={closeMenu}>Решения</a>
          <a href="#fgb-products" data-scroll onClick={closeMenu}>Продукты</a>
          <a href="#fgb-process" data-scroll onClick={closeMenu}>Процесс</a>
          <a href="#fgb-global" data-scroll onClick={closeMenu}>Глобально</a>
          <a href="#fgb-insights" data-scroll onClick={closeMenu}>Аналитика</a>
          <a href="#fgb-about" data-scroll onClick={closeMenu}>О компании</a>
          <a href="#fgb-contacts" data-scroll onClick={closeMenu}>Контакты</a>
        </nav>

        <div className="fn-actions">
          <a
            className="fn-search"
            href="#search"
            data-fgb-search
            aria-label="Поиск"
            onClick={openSearch}
          >
            ⌕
          </a>
          <a className="fn-login" href="#fgb-login" data-scroll onClick={closeMenu}>
            Войти
          </a>
          <button
            className="fn-burger"
            type="button"
            aria-label="Меню"
            aria-expanded={isOpen}
            aria-controls="fn-drawer"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="fn-drawer" id="fn-drawer" aria-hidden={!isOpen}>
        <div className="fn-drawer-inner">
          <a href="#fgb-cap" data-scroll onClick={closeMenu}>Решения</a>
          <a href="#fgb-products" data-scroll onClick={closeMenu}>Продукты</a>
          <a href="#fgb-process" data-scroll onClick={closeMenu}>Процесс</a>
          <a href="#fgb-global" data-scroll onClick={closeMenu}>Глобально</a>
          <a href="#fgb-insights" data-scroll onClick={closeMenu}>Аналитика</a>
          <a href="#fgb-partner" data-scroll onClick={closeMenu}>Партнёрство</a>
          <a href="#fgb-contacts" data-scroll onClick={closeMenu}>Контакты</a>
          <a href="#search" data-fgb-search onClick={openSearch}>Поиск</a>
          <a href="#fgb-login" data-scroll onClick={closeMenu}>Войти</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
