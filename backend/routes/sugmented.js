import express, { Router } from 'express';
import { db } from '../db.js';

const sugmentedRouter = express.Router();

sugmentedRouter.route('/').get( async (req, res, next) => {
    const sugmented = await db.execute('SELECT name, description, level FROM sugmented');
    res.send(sugmented[0]);
})

export default sugmentedRouter;