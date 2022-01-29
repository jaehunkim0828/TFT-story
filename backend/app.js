import express from 'express';
import cors from 'cors';

import championRouter from './routes/champion.js';
import cardRouter from './routes/card.js';
import traitRouter from './routes/trait.js';
import sugmentedRouter from './routes/sugmented.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/champion',championRouter);
app.use('/card', cardRouter);
app.use('/trait', traitRouter);
app.use('/sugmented', sugmentedRouter);
app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(8080, () => console.log(`running localhost:${8080}`))