import express from "express";

import { db } from '../db.js';

const traitRouter = express.Router();

traitRouter.route('/').get(async (req, res, next) => {
    const traits = await db.execute('SELECT * FROM traits');
    res.send(traits[0]);
})

traitRouter.route('/:name').get(async (req, res, next) => {
    const {name} = req.params;
    const id = await db.execute('SELECT image, count, background FROM traits WHERE name=?', [name]);

    res.send(id[0][0]);
})

traitRouter.route('/back/:id').get(async (req, res, next) => {
    const { id } = req.params;

    const trait = await db.execute('SELECT name, image FROM traits WHERE id=?', [id]);
    res.send(trait[0]);
})


export default traitRouter;