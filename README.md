# ФИНГОЛД — Light Rebuild

**Золото как финансовая инфраструктура.**

Декомпозиция монолитного HTML-лендинга компании «ФИНГОЛД» в современный React + TypeScript проект с Vite.

## 📖 О проекте

ФИНГОЛД — компания, развивающая решения на базе золота: биржевую ликвидность, фондовые продукты, расчётные контуры и партнёрские каналы для инвесторов и бизнеса.

Этот репозиторий содержит **передовую сборку лендинга**, построенную на основе:
- **React 18+** + **TypeScript**
- **Vite** — быстрая сборка
- **React Router** — плавная навигация
- **Axios** — работа с API
- **CSS Modules** — компонентные стили (в процессе переноса)

## 🎯 Назначение

Проект является результатом декомпозиции монолитного HTML-файла в модульную фронтенд-архитектуру. Это позволяет:

- Упростить поддержку и масштабирование
- Улучшить производительность и SEO
- Внедрить интерактивность без jQuery
- Подготовить базу для интеграции с бэкендом

## 📂 Структура репозитория

```text
fingold-demo/
├── frontend/                 # Vite + React + TypeScript приложение
│   ├── public/                 # Статика
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # UI-кирпичики
│   │   │   ├── layout/         # Шапка, подвал
│   │   │   └── sections/       # Секции лендинга
│   │   ├── hooks/               # Кастомные хуки
│   │   ├── styles/
│   │   │   ├── legacy.css       # Эталонные стили (полная копия)
│   │   │   ├── tokens.css       # CSS-переменные
│   │   │   └── global.css       # Глобальные стили
│   │   ├── types/                # TypeScript-типы
│   │   └── utils/                 # Утилиты (api.ts)
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── backend/                   # Минимальный бэкенд (Express)
│   ├── index.js
│   └── package.json
├── deploy/                    # Конфиги деплоя (Vercel)
├── docs/                       # Документация проекта
│   ├── TODO.md                  # План работ
│   └── reference/
│       └── Fingold_Light_Rebuild.html   # Эталон
├── .agents/
│   └── agent_rules/
│       └── AGENTS.md            # Правила для AI-агентов
├── .cursor/
│   └── skills/
│       └── fingold-dev/
│           └── SKILL.md         # Скилл для разработки
├── .gitignore
└── fingold.md                  # Этот файл
```

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/Eastwesser/fingold-light-rebuild.git
cd fingold-demo

# Frontend
cd frontend
npm install
npm run dev        # разработка
npm run build      # продакшен-сборка
npm run preview    # превью билда

# Backend (минимальный Express)
cd ../backend
npm install
npm start
```

## 🧠 Правила для ИИ-агентов

Проект использует Agent Skills для автоматизации разработки.

- `.agents/agent_rules/AGENTS.md` — содержит операционное руководство для AI-агентов.
- `.cursor/skills/fingold-dev/SKILL.md` — скилл для декомпозиции HTML в React.

Агент следует строгому порядку секций и проверяет вёрстку на всех брейкпоинтах: desktop → 1040px → 960px → 720px → 640px.

## 🔧 Технические ограничения

- Не менять CSS-классы из эталонного HTML (`fpd-*`, `fh-*`, `fct-*`, `fc-*`, `fp-*`, `fg-*`, `fs-*`, `fi-*`, `ft-*`, `fr-*`, `fn-*`, `fpa-*`, `ff-*`)
- Не трогать слои light-theme и unified-overrides (финальный слой стилей эталона)
- Сохранять визуальное совпадение на всех разрешениях экрана

## 📦 Деплой

Проект настроен для деплоя на Vercel (конфиги — в `deploy/`).

```bash
npm i -g vercel
cd frontend
vercel --prod
```

Домен: `fingoldcompany.ru` (подключается при деплое).

## 📝 TODO

Подробный план работ описан в файле [`docs/TODO.md`](docs/TODO.md).

Основные этапы:

1. Подготовка проекта
2. Перенос секций (Header → Hero → About → ... → Footer)
3. Интерактив (menu → tabs → carousel → search → scroll → reveal → cookie → back-to-top → progress)
4. Формы (убрать Tilda, добавить React submit)
5. Чистка CSS (legacy.css → modules)
6. Бэкенд + Деплой

## 🤝 Внесение изменений

Все изменения обсуждаются с владельцем проекта. Основной бранч — `main`.

## 📄 Лицензия

Все права защищены. ООО «ФИНГОЛД».
