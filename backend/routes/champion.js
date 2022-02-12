import express from "express";

import * as championController from '..//controller/champion.js';

const championRouter = express.Router();

championRouter.route('/').get(championController.getChampions);
championRouter.route('/traits/:id').get(championController.getTraitOfChampion);
championRouter.route('/:id').get(championController.getChampionImage);


export default championRouter;