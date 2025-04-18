import express from 'express';
import cors from 'cors';
const app = express();
import smsRoutes from './routes/smsRoutes.js';


app.use(cors({
    origin: 'https://witty-beach-00d53e41e.6.azurestaticapps.net/',
  }));

app.use(express.json());
app.use("/api/sms",smsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});