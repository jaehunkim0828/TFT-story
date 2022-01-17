import express from 'express';
import cors from 'cors';

import championRouter from './routes/champion.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/champion',championRouter);
app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(8888, () => console.log(`running localhost:${8888}`))