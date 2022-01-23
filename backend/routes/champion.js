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
        await db.execute('SELECT name FROM traits INNER JOIN champion_trait ON (traits.id=champion_trait.traitId) WHERE champion_trait.championId=?', [id])
        .then( async (result) => {
            const traits = result[0].map(trait => {
                return trait.name;
            })
            res.send(traits);
        })
    });


export default championRouter;