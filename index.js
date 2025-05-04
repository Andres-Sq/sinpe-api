import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import smsRoutes from './routes/smsRoutes.js';
import configRoutes from './routes/config.js';
import logRoutes from './routes/logRoutes.js';

const app = express();

// --- Configurar CORS ---
const allowedOrigins = [
    'https://sinpeapp.pages.dev', // Frontend en producción
  ];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}));

app.use(express.json());

// --- Middleware de logging ---
app.use((req, res, next) => {
  try {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const url = new URL(fullUrl);
    const client = url.searchParams.get('client') || 'unknown';

    const log = `[${new Date().toISOString()}] Client: ${client} | ${req.method} ${req.originalUrl} | IP: ${req.ip}\n`;

    fs.appendFile(path.join('logs', 'transactions.log'), log, err => {
      if (err) console.error('Error al escribir log:', err);
    });
  } catch (error) {
    console.error('Error en middleware de log:', error);
  }

  next();
});

// --- Rutas ---
app.use("/api/sms",smsRoutes);
app.use('/api/config', configRoutes);
app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});