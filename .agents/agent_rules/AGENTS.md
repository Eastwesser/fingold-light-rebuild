# ФИНГОЛД — Правила для AI-агентов

## Назначение

Этот файл — операционное руководство для AI-агентов, работающих над проектом ФИНГОЛД.

Агент должен:
- понимать архитектуру монорепозитория: `frontend/` (Vite + React + TypeScript), `backend/` (минимальный Express), `deploy/` (конфиги деплоя), `docs/` (документация и эталон);
- сохранять визуальное совпадение с эталонным HTML;
- не менять CSS-классы из исходника;
- знать, как разбивать монолитный HTML на компоненты;
- проверять вёрстку на всех breakpoints;
- следовать порядку секций и этапов.

---

## Краткая сводка по проекту

| Поле | Значение |
|------|----------|
| Название проекта | ФИНГОЛД |
| Тип проекта | Лендинг (Vite + React + TypeScript) |
| Однострочное описание | Компания по торговле золотом и финансовой инфраструктуре |
| Основные пользователи | Банки, фонды, инвесторы, золотодобытчики |
| Стадия жизненного цикла | Декомпозиция монолитного HTML → React |
| Владельцы | Ричард (заказчик) + Дэн (разработчик) |
| Основная ветка | main |
| Состояние репозитория | Активная разработка |

---

## Принципы работы агента

Агент должен:
- **НЕ менять CSS-классы** из исходного HTML (fpd-card, fh-title, fct-form и т.д.)
- **Сохранять визуальное совпадение** на всех breakpoints
- Сначала **desktop**, потом **1040/960**, потом **640/720**
- **Light theme** и **unified overrides** — НЕ ТРОГАТЬ (финальный слой, блоки `fgb-unified-minimal-override` и `fgb-light-theme-final` в эталоне)
- Проверять результат перед завершением

### Что оптимизируем

1. **Визуальное совпадение** — как в эталонном HTML
2. **Функциональность** — все интерактивные элементы работают
3. **Код** — чистота без фанатизма

### Что запрещено по умолчанию

- Менять CSS-классы (fpd-*, fh-*, fct-* и т.д.)
- Удалять light-theme или unified-override слои
- Менять контент без согласования
- Писать бэкенд без необходимости

---

## Технологический стек

| Компонент | Технология | Версия |
|-----------|------------|--------|
| Frontend | React + TypeScript | 18+ |
| Сборка | Vite | 5.0+ |
| Маршрутизация | React Router | 6.20+ |
| HTTP | Axios | 1.6+ |
| Бэкенд (минимальный) | Express | — |
| Деплой | Vercel | — |

---

## Структура репозитория

```text
fingold-demo/
├── frontend/                # Vite + React + TypeScript приложение
│   ├── public/               # Статика
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/       # Button, Card, Container, CookieBanner, BackToTop
│   │   │   ├── layout/       # Header, Footer, Layout
│   │   │   └── sections/     # Hero, About, Cap, Products, Process, Global, Serve, Insights, Team, Careers, Partner, News, Contacts, Login
│   │   ├── hooks/             # useCarousel, useTabs, useSearch, useReveal, useScroll, useCookieConsent
│   │   ├── styles/
│   │   │   ├── legacy.css     # Полная копия стилей эталона (все 20 блоков)
│   │   │   ├── tokens.css     # CSS-переменные (Этап 5)
│   │   │   └── global.css     # Глобальные стили (reset)
│   │   ├── utils/              # api.ts
│   │   ├── types/              # index.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig*.json
├── backend/                  # Минимальный бэкенд (Express)
│   ├── index.js
│   └── package.json
├── deploy/                   # Конфиги деплоя (Vercel и т.д.)
├── docs/                      # Документация проекта
│   ├── TODO.md                # План работ
│   └── reference/
│       └── Fingold_Light_Rebuild.html   # Эталон
├── .agents/
│   └── agent_rules/
│       └── AGENTS.md
├── .cursor/
│   └── skills/
│       └── fingold-dev/
│           └── SKILL.md
├── .gitignore
└── fingold.md                # README проекта
```

### Правила размещения кода

| Путь | Ответственность |
|------|------------------|
| `frontend/src/components/sections/[Name]/[Name].tsx` | Компонент секции |
| `frontend/src/components/sections/[Name]/[Name].module.css` | Стили (после переноса, Этап 5) |
| `frontend/src/hooks/use[Name].ts` | Кастомные хуки |
| `frontend/src/styles/legacy.css` | Все стили из HTML (без изменений) |
| `frontend/src/utils/api.ts` | API-запросы к бэкенду |
| `backend/index.js` | Минимальный Express-сервер |

## Последовательность работы

### Этап 1: Подготовка
- ☑ Создать структуру репозитория (frontend/backend/deploy/docs)
- ☑ Создать Vite React TypeScript проект во `frontend/`
- ☑ Скопировать ВСЕ стили в `legacy.css`

### Этап 2: Перенос JSX (по порядку)

1. Header
2. Hero
3. About
4. Cap (Решения)
5. Products
6. Process
7. Global
8. Serve (Аудитория)
9. Insights
10. Team
11. Careers
12. Partner
13. News
14. Contacts
15. Footer

### Этап 3: Проверка вёрстки

Desktop → 1040px → 960px → 720px → 640px

### Этап 4: Интерактив (по порядку)

1. Mobile menu
2. Tabs
3. Carousel
4. Search
5. Smooth scroll
6. Reveal animations
7. Cookie banner
8. Back-to-top
9. Progress bar

### Этап 5: Формы

1. Убрать Tilda attributes (formservices[])
2. Добавить React submit + `/api/lead`

### Этап 6: Чистка CSS

1. `legacy.css` → `*.module.css`
2. Вынести переменные в `tokens.css`
3. Убрать `!important`

### Этап 7: Бэкенд + Деплой

1. Реализовать `backend/index.js`
2. `npm run build` во `frontend/`
3. Деплой на Vercel
4. Домен: `fingoldcompany.ru`

---

## Технические ограничения

### НЕ МЕНЯТЬ

- CSS-классы: `fpd-*`, `fh-*`, `fct-*`, `fc-*`, `fp-*`, `fg-*`, `fs-*`, `fi-*`, `ft-*`, `fr-*`, `fn-*`, `fpa-*`, `ff-*`
- Light theme и unified overrides слои
- Контент текстов без согласования

### МОЖНО МЕНЯТЬ

- Добавлять React-рендеринг
- Использовать `useState`/`useEffect` вместо inline JS
- Использовать CSS Modules для новых стилей

---

## Деплой

- Платформа: Vercel
- Команда: `npm run build` (во `frontend/`) → `frontend/dist`
- Домен: `fingoldcompany.ru` (подключается при деплое)

---

## Команды для разработки

| Задача | Команда |
|--------|---------|
| Установка (frontend) | `npm install` (в `frontend/`) |
| Разработка | `npm run dev` (в `frontend/`) |
| Билд | `npm run build` (в `frontend/`) |
| Превью билда | `npm run preview` (в `frontend/`) |
| Запуск бэкенда | `node index.js` (в `backend/`) |

## Когда агент должен спросить человека

- Видимое несовпадение с эталонным HTML
- Необходимость изменить архитектуру
- Добавление новых зависимостей
- Непонятная ошибка
