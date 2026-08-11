# Сборка статики ФИНГОЛД (Vite + React + TS) и раздача через nginx.
# nginx также проксирует /api/* на контейнер backend (см. nginx.conf) —
# фронтенд обращается к /api по тому же origin, как и в dev (см. vite.config.ts).

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS serve
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
