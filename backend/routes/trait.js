import express from "express";

import { db } from '../db.js';
import { chTr } from '../traits.js';

const traitRouter = express.Router();

// traitRouter.route('/:id')
    // .get(async (req, res, next) => {
    //     const { id } = req.params;
    //     await db.execute('SELECT traitId FROM champion_trait WHERE championId=?', [id])
    //     .then(result => res.status(200).send(result[0]))r
    //     .catch(err => res.status(404).send({ message: 'not Found' }));
    // });
    //return await db.execute('INSERT INTO traits (name, image) VALUES (?, ?)', [ob.name, ob.image]);
traitRouter.route('/').post(async (req, res, next) => {
    res.send('done');
})

traitRouter.route('/:name').get(async (req, res, next) => {
    const {name} = req.params;
    const id = await db.execute('SELECT id FROM traits WHERE name=?', [name]);

    res.send(id[0][0]);
})


export default traitRouter;