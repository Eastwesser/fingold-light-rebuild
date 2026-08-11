# TODO: ФИНГОЛД — декомпозиция HTML → React

## 📋 СТАТУС ПРОЕКТА

| Что | Статус |
|-----|--------|
| Структура репозитория (frontend/backend/deploy/docs) | ✅ Готово |
| AGENTS.md | ✅ Готово |
| SKILL.md | ✅ Готово |
| TODO.md | ✅ Готово |
| legacy.css | ✅ Готово (перенесено, затем разбито на 19 файлов, см. Этап 5.2) |
| Перенос секций | ✅ Готово (15/15 + Login) |
| Интерактив | ✅ Готово (8/9, Progress bar пропущен — см. заметку) |
| Формы | ✅ Готово (3/3) |
| CSS | ✅ Готово (частично — 5.2/5.4 сделаны, 5.1/5.3 осознанно пропущены, см. заметки) |
| Бэкенд | ✅ Готово (Express, `POST /api/lead`, `GET /api/health`) |
| Деплой | 🔄 Конфиги готовы (2 Vercel-проекта zero-config **+** `docker-compose.yml` как self-hosted альтернатива), сам деплой на Vercel — ждёт аккаунта/домена |
| Локальные console-ошибки (см. `issues/errors_states.md`) | ✅ Готово — все внешние `static.tildacdn.com`-ассеты (6 иконок, 3 фото, лого-текстура, ~30 превью новостей) заменены на локальные, добавлен favicon |

---

## 📦 ЭТАП 1: ПОДГОТОВКА

- [x] Создать структуру репозитория: `frontend/`, `backend/`, `deploy/`, `docs/`
- [x] Создать AGENTS.md
- [x] Создать SKILL.md
- [x] Создать TODO.md
- [x] Скопировать CSS в `frontend/src/styles/legacy.css` (все 20 `<style>`-блоков эталона, включая nav/hero/about и защищённые слои unified-override + light-theme-final)
- [x] Создать `frontend/package.json` (Vite + React + TS)
- [x] Установить зависимости (react, react-dom, vite, typescript, axios, react-router-dom)
- [x] Убрать шаблонный Vite-boilerplate (App.tsx/App.css/index.css/assets/favicon)
- [x] Создать скелет `frontend/src/components/{common,layout,sections}` и `frontend/src/hooks`
- [x] Починить `.gitignore` (был битым — содержал буквальные `\n`, из-за чего `node_modules` закоммитился)

---

## 📄 ЭТАП 2: ПЕРЕНОС СЕКЦИЙ

- [x] **2.1 Header** — навигация + мобильное меню (`frontend/src/components/layout/Header/`)
- [x] **2.2 Hero** — главный блок с CTA (`frontend/src/components/sections/Hero/`)
- [x] **2.3 About** — о компании (`frontend/src/components/sections/About/`)
- [x] **2.4 Cap** — решения с каруселью (`frontend/src/components/sections/Cap/`, хук `useCarousel`)
- [x] **2.5 Products** — с табами (`frontend/src/components/sections/Products/`, хук `useTabs`)
- [x] **2.6 Process** — методология работы (`frontend/src/components/sections/Process/`)
- [x] **2.7 Global** — глобальный охват (`frontend/src/components/sections/Global/`)
- [x] **2.8 Serve** — аудитория (банки, фонды, инвесторы) (`frontend/src/components/sections/Serve/`)
- [x] **2.9 Insights** — аналитика и цифры (`frontend/src/components/sections/Insights/`)
- [x] **2.10 Team** — команда (`frontend/src/components/sections/Team/`)
- [x] **2.11 Careers** — карьера (`frontend/src/components/sections/Careers/`)
- [x] **2.12 Partner** — партнёрство с формой (`frontend/src/components/sections/Partner/`, хук `useLeadForm`)
- [x] **2.13 News** — новости с динамической загрузкой (`frontend/src/components/sections/News/`, данные в `frontend/src/data/newsData.ts`, хук `useNewsToggle`)
- [x] **2.14 Contacts** — контакты с формой (`frontend/src/components/sections/Contacts/`, хук `useLeadForm`)
- [x] **2.15 Footer** — подвал (`frontend/src/components/layout/Footer/`)
- [x] **2.16 Login** — личный кабинет / вход (`frontend/src/components/sections/Login/`, хук `useLoginForm`) — изначально не входил в список 15 секций, но добавлен, т.к. на него ведут рабочие кнопки "Войти" в Header и "Личный кабинет" в Footer (см. решение человека в заметках)

---

## 🔧 ЭТАП 3: ИНТЕРАКТИВ

- [x] **3.1 Mobile menu** — открытие/закрытие (реализовано вместе с Header, 2.1)
- [x] **3.2 Tabs** — переключение вкладок (Products) (реализовано вместе с Products, 2.5, хук `useTabs`)
- [x] **3.3 Carousel** — карусель (Cap) (реализовано вместе с Cap, 2.4, хук `useCarousel`)
- [x] **3.4 Search** — поиск по сайту (`components/common/SearchOverlay/`, хук `useSearchOverlay`, данные `data/searchIndex.ts`; открывается из кнопок "⌕"/"Поиск" в Header)
- [x] **3.5 Smooth scroll** — якорные ссылки (`hooks/useSmoothScroll.ts` + `utils/scroll.ts`, глобальный перехват кликов по всем `a[href^="#"]` с учётом высоты nav)
- [x] **3.6 Reveal animations** — появление при скролле (`hooks/useRevealOnScroll.ts`, IntersectionObserver над теми же селекторами, что в эталоне)
- [x] **3.7 Cookie banner** — согласие на cookie (`components/common/CookieBanner/`, хук `useCookieConsent`, `localStorage`; переоткрывается кнопкой "Управление cookie" в Footer)
- [x] **3.8 Back-to-top** — кнопка наверх (`components/common/BackToTop/`, хук `useBackToTop`)
- [x] **3.9 Progress bar** — **пропущено**: в эталонном HTML скрипт обращается к `#fn-progress-bar`, но такого элемента нигде нет в статичной разметке (мёртвая ссылка / недоделка оригинала). По правилу "нет кнопки/элемента — не реализуем" эту фичу не стали изобретать заново. Можно добавить по отдельному запросу, если нужно.

---

## 📝 ЭТАП 4: ФОРМЫ

- [x] **4.1 Partner form** — убрать Tilda, добавить React (готово вместе с 2.12: `data-tilda-*`/`formservices[]` удалены, `onSubmit` → `submitLead()`)
- [x] **4.2 Contacts form** — убрать Tilda, добавить React (готово вместе с 2.14: аналогично Partner)
- [x] **4.3 Login form** — убрать inline JS, добавить React (готово вместе с 2.16: переключатель видимости пароля и клиентская валидация — на React state, кнопка "Войти" — демо без реального бэкенда, при валидных полях скроллит к Контактам)

---

## 🎨 ЭТАП 5: CSS

- [x] **5.1** Вынести переменные в `tokens.css` — **не делаем** (осознанное решение, см. заметку ниже): `--fg-*` — это не единые дизайн-токены, а локально скоуп­ленные CSS custom properties, намеренно переобъявленные с разными значениями в каждой секции и в защищённых слоях override
- [x] **5.2** Разбить `legacy.css` на `*.module.css` — сделан **облегчённый вариант**: `legacy.css` → 19 файлов в `frontend/src/styles/legacy/*.css` (по одному на секцию + отдельно два защищённых слоя), подключаются через `@import` в исходном порядке. Это **не** CSS Modules — классы не переименованы и не скоупятся (см. заметку ниже, почему)
- [x] **5.3** Убрать `!important` — **не делаем** (см. заметку ниже): 274 из 275 деклараций `!important` живут в двух защищённых слоях и обеспечивают их работу
- [x] **5.4** Проверить все breakpoints — **аудит проведён** (см. таблицу в заметках), значения **не менялись** — нет инструментов визуальной регрессии, чтобы безопасно проверить последствия правки после факта

---

## 🚀 ЭТАП 6: БЭКЕНД + ДЕПЛОЙ

- [x] **6.1** Реализовать `backend/index.js` (Express, POST `/api/lead`) — плюс `GET /api/health`, приём валидируется (`source`/`fields`), заявки логируются в консоль + пишутся в `os.tmpdir()/fingold-leads.log.jsonl` (эфемерно на serverless, см. `deploy/README.md`)
- [x] **6.2** `npm run build` во `frontend/` — проверено, билд проходит без ошибок
- [x] **6.3** `npm run preview` — проверено локально (200 OK, бандл содержит все секции); также проверен сквозной сценарий `npm run dev` → Vite-прокси `/api` → Express-бэкенд → лид записан
- [x] **6.4** Конфиги деплоя — решили деплоить **без `vercel.json`**: два независимых Vercel-проекта в zero-config режиме (Root Directory = `frontend` и `backend` соответственно, каждый деплоится Vercel'ом автоматически), связаны переменной `VITE_API_URL`. Первый вариант (`/vercel.json` в корне на `builds`+`routes`) отклонён — это deprecated-подход у Vercel с известными проблемами в похожих монорепо. Пошаговая инструкция в `deploy/README.md`
- [x] **6.4b** Docker Compose (self-hosted альтернатива Vercel) — `docker-compose.yml` в корне, `backend/Dockerfile` (Node 20 Alpine) + `frontend/Dockerfile` (двухстадийная сборка → nginx) + `frontend/nginx.conf` (SPA fallback + проксирование `/api/*` на контейнер `backend` по внутреннему DNS, `VITE_API_URL` не нужен). Синтаксис проверен (`docker compose config`), сам `docker compose up --build` не проверялся — в песочнице агента нет доступа к Docker Hub (см. `deploy/README.md`)
- [ ] **6.5** Деплой на Vercel — требует аккаунта/доступа человека, не может быть сделано агентом автономно
- [ ] **6.6** Домен — **`fingoldcompany.ru` занят/заблокирован** (решение человека), временно используем дефолтный домен Vercel через имя проекта `fingold-light-rebuild` (→ `fingold-light-rebuild.vercel.app`); свой домен можно подключить позже в Vercel → Settings → Domains

---

## 📝 ЗАМЕТКИ

- **Эталон:** `docs/reference/Fingold_Light_Rebuild.html`
- **Не менять CSS-классы:** `fpd-*`, `fh-*`, `fct-*`, `fc-*`, `fp-*`, `fg-*`, `fs-*`, `fi-*`, `ft-*`, `fr-*`, `fn-*`, `fpa-*`, `ff-*`
- **Light theme + unified overrides — НЕ ТРОГАТЬ**
- **Домен:** `fingoldcompany.ru` занят/заблокирован — используем имя проекта Vercel `fingold-light-rebuild` (домен по умолчанию `fingold-light-rebuild.vercel.app`), свой домен можно подключить позже
- **Бэкенд:** минимальный Express (POST `/api/lead`)
- **Структура репозитория:** `frontend/` (React+Vite+TS), `backend/` (Express), `deploy/` (конфиги деплоя), `docs/` (документация и эталон)
- **Фавикон добавлен:** `frontend/public/favicon.png` (сгенерированный, подключён в `frontend/index.html`) — закрывает прежний пробел (404 на `/favicon.ico`)
- **Внешние ассеты эталона (Tilda CDN) заменены на локальные** (см. `issues/errors_states.md` — все были `net::ERR_NAME_NOT_RESOLVED`, `static.tildacdn.com` недоступен вне Tilda): 6 SVG-иконок (`frontend/src/assets/icons/`, hand-authored, совместимы с существующим CSS `filter`-тонированием), 3 фото карьеры/аналитики (`frontend/src/assets/photos/careers-{1,2,3}.jpg`, сгенерированы), лого-текстура фото основателя (`fingold_logo.png`) — просто убрана, под ней уже был градиент-фолбэк; ~30 превью новостей в `frontend/src/data/newsData.ts` — заменены на общий локальный плейсхолдер `news-placeholder.jpg`. Точечное исключение из правила "не трогать защищённые слои": в `190-light-theme-final.css` убран один недоступный `url(...)`-слой в `.ft-founder-photo` — на визуал не влияет, только устраняет console-ошибку
- **Решено:** секция `fgb-login` добавлена как обычная секция в общем потоке страницы (между Contacts и Footer, как в эталоне), а не отдельным роутом — потому что кнопки "Войти"/"Личный кабинет" в эталоне используют `data-scroll`-переход, а не переход на отдельный URL. Реальной авторизации нет (её не было и в эталоне) — это демо-форма с клиентской валидацией
- **Формы (Partner/Contacts):** payload теперь `{ source: 'partner' | 'contacts', fields: Record<string, string> }` — ключи `fields` совпадают с оригинальными `name`-атрибутами полей (кириллица), см. `frontend/src/utils/api.ts`. Бэкенд для `POST /api/lead` пока не реализован (Этап 6)
- **Глобальные хуки интерактива** (используются в `App.tsx`, не привязаны к одной секции): `useSmoothScroll`, `useRevealOnScroll`, `useSearchOverlay`, `useCookieConsent`, `useBackToTop`
- **Почему 5.1 и 5.3 пропущены:** перед разбиением проверили все декларации `--fg-*` и `!important` в `legacy.css` (тогда ещё едином файле). Оказалось:
  - Одноимённые `--fg-*` (например, `--fg-copper`, `--fg-text`, `--fg-bg`) объявлены с **разными значениями** в разных секциях и особенно в двух защищённых слоях (`unified-override`, `light-theme-final`) — это не дублирование, а намеренный механизм переопределения через каскад/скоуп. Слияние в единый `:root` в `tokens.css` перезаписало бы разные секции одним значением и сломало бы часть оформления
  - Из 275 деклараций `!important` в файле — **274 живут в двух защищённых слоях** (`unified-override`: 162, `light-theme-final`: 112), и только 1 — в обычных секционных стилях. `!important` там — не костыль, а единственный способ слоя переопределить более ранние секционные правила, не редактируя их. Убрать `!important` = сломать сами слои
  - Итог: оба пункта помечены выполненными как "осознанно не делаем", а не тихо пропущены — если требования изменятся (например, решим всё-таки унифицировать палитру), это отдельная содержательная задача, а не техническая уборка
- **Разбиение legacy.css (5.2):** проверено побайтово — конкатенация всех 19 файлов из `frontend/src/styles/legacy/` идентична исходному `legacy.css` до разбиения, а собранный `dist/assets/*.css` до и после разбиения — с одинаковым хэшем в имени файла (т.е. содержимое бандла не изменилось ни на байt). `legacy.css` теперь просто barrel-файл с `@import` в исходном порядке — порядок критичен, т.к. два защищённых слоя должны подключаться последними
- **Аудит breakpoints (5.4):** в проекте используется 10 разных значений `max-width` (640, 720, 900, 960, 1040, 1060, 1180, 1280, 1300, 1500px), не унифицированных в единую сетку — похоже на то, что каждая секция подбиралась по месту под свой контент, а не по общей системе. 640px используется везде последовательно (мобильный), остальные — по-разному в разных секциях. Значения **не менялись**: без инструментов визуальной регрессии унификация "на глаз" рискует незаметно сломать раскладку какой-то секции на конкретной ширине экрана
