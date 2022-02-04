import express from "express";

import { db } from '../db.js';
import { item } from '../items.js';

const traitRouter = express.Router();

// traitRouter.route('/:id')
    // .get(async (req, res, next) => {
    //     const { id } = req.params;
    //     await db.execute('SELECT traitId FROM champion_trait WHERE championId=?', [id])
    //     .then(result => res.status(200).send(result[0]))r
    //     .catch(err => res.status(404).send({ message: 'not Found' }));
    // });
traitRouter.route('/').post(async (req, res, next) => {
    res.send('done');
})
.get()


export default traitRouter;