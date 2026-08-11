# Минимальный образ для Express-бэкенда ФИНГОЛД (POST /api/lead, GET /api/health).
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY index.js ./

ENV PORT=4000
EXPOSE 4000

CMD ["node", "index.js"]
