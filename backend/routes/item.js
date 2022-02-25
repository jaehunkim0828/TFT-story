import express, { response, Router } from 'express';
import { db } from '../db.js';

const itemRouter = express.Router();

itemRouter.route('/').get( async (req, res, next) => {
    const items = await db.execute('SELECT * FROM items');
    res.send(items[0]);
})
itemRouter.route('/:id').get( async (req, res, next) => {
    const { id } = req.params;
    const image = await db.execute('SELECT image FROM items WHERE id=?', [id]);
    res.status(200).send(image[0][0]);
})

itemRouter.route('/com/:id').get(async (req, res, next) => {
    const { id } = req.params;
    const image = await db.execute('SELECT image FROM combination WHERE id=?', [id]);
    res.status(200).send(image[0][0]);
})

export default itemRouter;