import express from 'express';
import { db } from '../db.js';

const cardRouter = express.Router();

cardRouter.route('/')
    .get(async (req, res, next) => {
        const cardThumb = await db.execute('SELECT * FROM card_thumb');
        res.send(cardThumb[0]);
    })
    .post(async (req, res, next) => {
        try {
            const { lv3, lv4, lv5, lv6, lv7, finalDeck, augmented } = req.body;

            const insertcardThumb = await db.execute(
                'INSERT INTO card (augmented, level3, level4, level5, level6, level7, champions, traits, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
            , [augmented, lv3, lv4, lv5, lv6, lv7, finalDeck.champions, finalDeck.traits, finalDeck.items]);
            console.log(insertcardThumb);
            res.status(201).send('done');

        } catch(err) {
            res.status(404).send(err);
        }
    })


export default cardRouter;