import express from "express";

import { db } from '../db.js';
import { sugmented } from "../sugmented.js";

const traitRouter = express.Router();

// traitRouter.route('/:id')
    // .get(async (req, res, next) => {
    //     const { id } = req.params;
    //     await db.execute('SELECT traitId FROM champion_trait WHERE championId=?', [id])
    //     .then(result => res.status(200).send(result[0]))
    //     .catch(err => res.status(404).send({ message: 'not Found' }));
    // });
traitRouter.route('/').post((req, res, next) => {
    sugmented.map(async ({ name, des }) => {
        const done = await db.execute('INSERT INTO sugmented (name, description) VALUES (?, ?)',[name, des]);

        console.log(done);
    })
    res.send('done');
})
.get((req, res, next) => {
    res.send('trait')
})


export default traitRouter;