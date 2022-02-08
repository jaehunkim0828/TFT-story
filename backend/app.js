import express from 'express';
import cors from 'cors';

import championRouter from './routes/champion.js';
import cardRouter from './routes/card.js';
import traitRouter from './routes/trait.js';
import augmentedRouter from './routes/augmented.js';
import itemRouter from './routes/item.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/champion',championRouter);
app.use('/card', cardRouter);
app.use('/trait', traitRouter);
app.use('/augmented', augmentedRouter);
app.use('/item', itemRouter);
app.use('/images', express.static('images'));
app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(8080, () => console.log(`running localhost:${8080}`))