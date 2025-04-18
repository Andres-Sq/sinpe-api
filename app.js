import express from 'express';
const app = express();
import smsRoutes from './routes/smsRoutes.js';

app.use(express.json());
app.use("/api/sms",smsRoutes);