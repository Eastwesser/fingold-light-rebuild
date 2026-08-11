# Deploy

Конфигурация деплоя ФИНГОЛД на Vercel (Этап 6, см. `docs/TODO.md`).

## Домен

`fingoldcompany.ru` занят/заблокирован (решение человека, 2026-08-11). Пока
используем дефолтный домен Vercel через **имя проекта `fingold-light-rebuild`**
→ сайт будет на `https://fingold-light-rebuild.vercel.app`. Свой домен можно
подключить в любой момент позже (Vercel → Settings → Domains), код это не
затрагивает.

## Схема: два независимых Vercel-проекта

Изначально был вариант с одним `vercel.json` в корне (`builds`+`routes` на весь
монорепозиторий), но от него отказались — это официально deprecated-подход
у Vercel, и он известен тем, что иногда молча "теряет" статическую сборку
фронтенда в похожих монорепо-раскладках (frontend/ + backend/ в разных
папках). Вместо этого — два **отдельных** Vercel-проекта, каждый деплоится
Vercel'ом в zero-config режиме (без `vercel.json`), это самый надёжный и
официально рекомендуемый путь:

1. **Frontend** — проект с Root Directory = `frontend/`. Vercel сам
   определяет Vite, билдит `npm run build` → `dist/`, раздаёт как статику.
2. **Backend** — проект с Root Directory = `backend/`. Vercel сам
   определяет Express-приложение по `backend/index.js` (там
   `module.exports = app`, см. файл) и деплоит его как serverless-функцию —
   никакого `api/`-каталога и `vercel.json` не требуется.
3. Оба проекта связаны одной переменной окружения: во фронтенд-проекте
   задаём `VITE_API_URL` = URL бэкенд-проекта + `/api` (например,
   `https://fingold-light-rebuild-api.vercel.app/api`). `frontend/src/utils/api.ts`
   уже читает `import.meta.env.VITE_API_URL` и использует её как `baseURL` —
   больше ничего менять не нужно.
4. CORS в бэкенде (`cors()` в `backend/index.js`) включён именно для этого
   случая — фронтенд и бэкенд теперь на разных доменах `*.vercel.app`.

## Как задеплоить (через дашборд Vercel)

### 1. Бэкенд

1. New Project → импортировать этот репозиторий.
2. **Root Directory** → `backend`.
3. **Project Name** → например `fingold-light-rebuild-api`.
4. Framework Preset — Vercel должен сам предложить "Other"/Node — ничего
   менять не нужно, build command и output directory не задаются (Express
   деплоится как есть).
5. Deploy. После деплоя проверить `https://<backend-url>/api/health` →
   должен вернуть `{"status":"ok"}`.

### 2. Фронтенд

1. New Project → импортировать тот же репозиторий ещё раз (второй проект).
2. **Root Directory** → `frontend`.
3. **Project Name** → `fingold-light-rebuild` (это и станет доменом:
   `fingold-light-rebuild.vercel.app`).
4. Framework Preset — Vercel сам определит Vite, build command
   `npm run build`, output `dist` — оставить как есть.
5. **Environment Variables** → добавить `VITE_API_URL` со значением из
   шага 1 (URL бэкенда + `/api`, например
   `https://fingold-light-rebuild-api.vercel.app/api`).
6. Deploy.
7. Проверить: открыть `https://fingold-light-rebuild.vercel.app` — должен
   загрузиться весь сайт; попробовать отправить форму на Contacts/Partner —
   должен прийти `{"ok": true}` и заявка появится в логах бэкенд-проекта
   (Vercel → бэкенд-проект → Logs).

### Альтернатива — деплой через CLI

```bash
npm i -g vercel
vercel login

# бэкенд
cd backend
vercel link            # создать/выбрать проект, задать имя при первом запуске
vercel --prod

# фронтенд
cd ../frontend
vercel link
vercel env add VITE_API_URL production   # вставить URL бэкенда + /api
vercel --prod
```

## Альтернатива — Docker Compose (self-hosted, без Vercel)

Если нужен вариант без привязки к Vercel (свой сервер/VPS), в корне
репозитория есть `docker-compose.yml`, поднимающий два контейнера:

- **backend** — Node 20 Alpine, Express-сервер (`backend/Dockerfile`),
  слушает `4000` только внутри docker-сети (не публикуется наружу напрямую).
- **frontend** — двухстадийная сборка (`frontend/Dockerfile`): сначала
  `npm run build` в Node-контейнере, затем статика `dist/` раздаётся через
  nginx (`frontend/nginx.conf`). Тот же nginx проксирует `/api/*` на
  контейнер `backend` по внутреннему DNS-имени сервиса — фронтенд обращается
  к `/api` на своём же origin, точно как в dev-режиме через Vite-проксю
  (`vite.config.ts`), так что `VITE_API_URL` можно не задавать вовсе.

Запуск:

```bash
docker compose up --build -d
```

Сайт будет доступен на `http://localhost:8080` (порт задан в
`docker-compose.yml`, можно поменять `8080:80` на любой другой). Проверить
бэкенд можно изнутри контейнера фронтенда или через сам сайт — прямого
внешнего порта у `backend` нет (проксируется только через nginx).

Остановить: `docker compose down`. Логи: `docker compose logs -f`.

Для реального сервера (VPS) достаточно скопировать репозиторий, поставить
Docker + Docker Compose и выполнить ту же команду; порт `8080` в проде обычно
дополнительно закрывают за настоящим nginx/Caddy с HTTPS (Let's Encrypt) на
80/443, проксирующим на этот compose-стек — это отдельная инфраструктурная
задача и не входит в текущий минимальный Этап 6.

> Примечание: в песочнице агента сборка образов недоступна (нет доступа к
> Docker Hub), поэтому `Dockerfile`/`docker-compose.yml` проверены только
> синтаксически (`docker compose config`). Собрать и прогнать `docker compose
> up --build` нужно на вашей машине с обычным доступом в интернет.

## Известные ограничения бэкенда (см. `backend/index.js`)

- Файловая персистентность заявок (`os.tmpdir()/fingold-leads.log.jsonl`) —
  это лишь удобный лог для локальной разработки. На serverless (Vercel)
  файловая система эфемерна между вызовами, так что в проде источником
  правды по заявкам служат логи `console.log` в панели Vercel (Functions →
  Logs). Для реального продакшена стоит подключить БД/email/CRM-вебхук —
  это отдельная задача, не входящая в текущий минимальный Этап 6.
