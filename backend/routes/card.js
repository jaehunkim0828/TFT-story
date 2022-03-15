import e from 'express';
import express from 'express';
import { body } from 'express-validator';

import * as cardController from '../controller/card.js'; 
import { db } from '../db.js';
import { validate } from '../middleware/validator.js';

const cardRouter = express.Router();

const validateCard = [
    body('password')
        .isNumeric()
        .isLength({ min: 4, max: 4 })
        .withMessage('비밀번호 길이는 4글자입니다'),
    body('title')
        .notEmpty()
        .withMessage('title을 적어주세요.'),
    body('description')
        .notEmpty(),
    body('images')
        .notEmpty()
        .withMessage('메인 챔피언을 정해주세요.'),
    validate,
];


cardRouter.route('/')
    .get(validate, cardController.getCardList)
    .post(validateCard, cardController.makeDeck);

cardRouter.route('/:id')
    .get(validate, cardController.getCardId)
    .delete(validate, cardController.deleteDeck);

cardRouter.route('/thumb/:id')
    .get(validate, cardController.getThumbId);

cardRouter.route('/trait/:id')
    .get(async (req, res, next) => {
        const {id} = req.params;
        const cardTrait = await db.execute('SELECT trait_id, background FROM card_trait WHERE card_id=?', [id]);
        const toString = cardTrait[0].map(e => JSON.stringify(e.trait_id)).join();
        const trait = await db.execute(`SELECT name, id FROM traits WHERE id IN (${toString})`);
        const result = cardTrait[0].map((e, i) => {
            return trait[0].map(tr => {
                if (tr.id === e.trait_id) {
                    return { ...e, name: tr.name };
                }
                return false;
            }).filter(e => e)[0];
        })
        res.send(result);
    })
    .post(validate, cardController.makeCardTrait);

export default cardRouter;