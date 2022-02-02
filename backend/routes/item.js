import express, { Router } from 'express';
import { db } from '../db.js';

const itemRouter = express.Router();

itemRouter.route('/').get( async (req, res, next) => {
    const items = await db.execute('SELECT name, image, id FROM items');
    res.send(items[0]);
})

export default itemRouter;