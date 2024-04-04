import express from 'express';
import cors from 'cors';
import router from './routes';
import { errorHandler } from './utils/errorHandler';
import db from './config/seqeulize';

const app = express();

// add middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// set routers
app.use('/api', router);

// error handler
app.use(errorHandler);

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});

export default app;
