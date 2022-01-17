import express from "express";

import { db } from '../db.js';

const championRouter = express.Router();

championRouter.route('/')
    .get(async (req, res, next) => {
        await db.execute('SELECT id, cost, images FROM champions')
        .then(result => res.status(200).send(result[0]))
        .catch(err => res.status(404).send({ message: 'not Found' }));
    })
championRouter.route('/:id')
    .get(async (req, res, next) => {
        const { id } = req.params;
        await db.execute('SELECT traitId FROM champion_trait WHERE championId=?', [id])
            .then( async (result) => {
                const traits = result[0];
                const traitsName = [];
                await traits.map(async (trait, i) => {
                    await db.execute('SELECT name FROM traits WHERE id=?', [trait.traitId])
                    .then(data => traitsName.push(data[0][0].name));
                    if (traits.length - 1 === i)  return res.send(traitsName);
                })
            });
    });


export default championRouter;