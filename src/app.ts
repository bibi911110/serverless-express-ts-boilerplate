import express from 'express';
import cors from 'cors';
import router from './routes';

// initialize server
const app = express();

// add middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/', router);

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});

export default app;
