import express from 'express';
import cors from 'cors';
const app = express();
import smsRoutes from './routes/smsRoutes.js';

//app.use(cors());
app.use(cors({ origin: 'https://sinpe-api-production.up.railway.app' }));

app.use(express.json());
app.use("/api/sms",smsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});