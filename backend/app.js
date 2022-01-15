import express from 'express';
import cors from 'cors';

import { db } from './db.js';
import { traits } from './json.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res, next) => {
    await db.execute('SELECT name, cost, images FROM champions')
    .then(result => res.status(200).send(result[0]))
    .catch(err => res.status(404).send({ message: 'not Found' }));
})

app.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    db.execute('SELECT traitId FROM champion_trait WHERE championId=?', [id])
        .then(result => res.status(200).send(result[0]));
})

app.post('/', async (req, res, next) => {
    try {
        traits.championTrait.forEach(async trait => {
            console.log(trait, '시작');
            await db.execute('INSERT INTO champion_trait (traitId, championId) VALUES (?, ?)', [trait.trait, trait.champion])
        })
        res.send('done');
    } catch (err) {
        console.err(err);
    }
})

app.listen(8888, () => console.log(`running localhost:${8888}`))