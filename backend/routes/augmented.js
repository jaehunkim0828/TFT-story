import express, { Router } from 'express';
import { db } from '../db.js';

const augmentedRouter = express.Router();

augmentedRouter.route('/').get( async (req, res, next) => {
    const augmented = await db.execute('SELECT name, description, level FROM augmented');
    res.send(augmented[0]);
})

export default augmentedRouter;