import express from 'express';
import cors from 'cors';
const app = express();
import smsRoutes from './routes/smsRoutes.js';
import configRoutes from './routes/config.js';

//app.use(cors());
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
app.use("/api/sms",smsRoutes);
app.use('/api/config', configRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});