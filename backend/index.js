// Минимальный Express-бэкенд ФИНГОЛД.
// Эндпоинт: POST /api/lead — приём заявок из форм Partner/Contacts (frontend/src/utils/api.ts).

const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
// os.tmpdir() — единственная гарантированно доступная для записи директория
// на serverless-платформах (Vercel и т.п.), где корень проекта read-only.
// ВАЖНО: на serverless-функциях этот файл не переживает между вызовами —
// это лишь удобный локальный лог для разработки, а не постоянное хранилище.
// Основной источник заявок в проде — вывод console.log ниже (виден в логах платформы).
const LEADS_FILE = path.join(os.tmpdir(), 'fingold-leads.log.jsonl');
const VALID_SOURCES = new Set(['partner', 'contacts']);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/lead', (req, res) => {
  const { source, fields } = req.body ?? {};

  if (!VALID_SOURCES.has(source)) {
    return res.status(400).json({ error: 'Некорректный source: ожидается "partner" или "contacts"' });
  }
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) {
    return res.status(400).json({ error: 'Поле fields обязательно и должно быть объектом' });
  }

  const lead = {
    source,
    fields,
    receivedAt: new Date().toISOString(),
  };

  console.log('[lead]', JSON.stringify(lead));

  try {
    fs.appendFileSync(LEADS_FILE, JSON.stringify(lead) + '\n');
  } catch (err) {
    console.error('Не удалось сохранить заявку в файл:', err);
    // Заявка всё равно залогирована выше — не блокируем ответ клиенту из-за сбоя записи на диск.
  }

  res.status(201).json({ ok: true });
});

// На Vercel файл импортируется как serverless-функция (@vercel/node) и
// app.listen() не нужен — платформа сама вызывает экспортированный handler.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`ФИНГОЛД backend слушает на порту ${PORT}`);
  });
}

module.exports = app;
