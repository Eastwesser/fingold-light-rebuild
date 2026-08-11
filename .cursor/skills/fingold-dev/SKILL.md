---
name: fingold-dev
description: Основной скилл для разработки ФИНГОЛД. Декомпозиция HTML → React, перенос секций, работа с CSS и интерактивом.
---

# ФИНГОЛД — Разработка

## Когда использовать

- При переносе секций из HTML в React
- При работе с CSS (legacy.css → модули)
- При добавлении интерактивности

## Структура репозитория

- `frontend/` — Vite + React + TypeScript приложение (весь код лендинга)
- `backend/` — минимальный Express (`POST /api/lead`)
- `deploy/` — конфиги деплоя (Vercel)
- `docs/` — документация проекта, `docs/reference/Fingold_Light_Rebuild.html` — эталон

Все команды `npm run dev/build/preview` выполняются внутри `frontend/`.

## Процесс разработки

### 1. Секции (по порядку)

Всегда начинай с текущей секции по списку:
1. Header
2. Hero
3. About
4. Cap
5. Products
6. Process
7. Global
8. Serve
9. Insights
10. Team
11. Careers
12. Partner
13. News
14. Contacts
15. Footer

### 2. Правила переноса

- Копируй HTML-разметку секции в React-компонент (`frontend/src/components/sections/[Name]/`)
- Классы НЕ МЕНЯЙ (fpd-card, fh-title, fct-form)
- Инлайн-события из HTML выноси в React-хуки (`frontend/src/hooks/`)
- Проверяй после каждого компонента

### 3. Интерактив (по порядку)

1. Mobile menu — `useState` toggle
2. Tabs — `useState` активный таб
3. Carousel — хук `useCarousel`
4. Search — оверлей с поиском
5. Smooth scroll — `scrollIntoView`
6. Reveal — Intersection Observer
7. Cookie — `localStorage`
8. Back-to-top — `useScroll`
9. Progress bar — `useScroll`

### 4. Проверка вёрстки

Всегда проверяй после переноса:
- Desktop (1920px)
- 1040px
- 960px
- 720px
- 640px

### 5. Формы

Убрать: `formservices[]`, `data-tilda-*`
Добавить: `onSubmit` → `axios.post('/api/lead')` (клиент уже настроен в `frontend/src/utils/api.ts`)

## Ошибки, которых избегать

- ❌ Менять CSS-классы
- ❌ Удалять light-theme или unified-override слои (`fgb-unified-minimal-override`, `fgb-light-theme-final`)
- ❌ Пропускать проверку breakpoints
- ❌ Менять контент без согласования

## Спрашивай человека, если

- Визуальное отличие от эталона
- Непонятное поведение вёрстки
- Нужно изменить структуру

## Ссылки

- Эталон: `docs/reference/Fingold_Light_Rebuild.html`
- TODO: `docs/TODO.md`
- Правила: `.agents/agent_rules/AGENTS.md`
