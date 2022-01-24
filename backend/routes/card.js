import express from 'express';

import * as cardController from '../controller/card.js'; 

const cardRouter = express.Router();

cardRouter.route('/')
    .get(cardController.getCardList)
    .post(cardController.makeDeck)

export default cardRouter;