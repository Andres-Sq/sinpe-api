import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const clientFilter = req.query.client; // ejemplo: /api/logs?client=zharkaz
  const logPath = path.join('logs', 'transactions.log');

  fs.readFile(logPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'No se pudo leer el archivo de logs' });
    }

    const lines = data.split('\n');
    const filtered = clientFilter
      ? lines.filter(line => line.includes(`"client":"${clientFilter}"`))
      : lines;

    res.type('text/plain').send(filtered.join('\n'));
  });
});

export default router;