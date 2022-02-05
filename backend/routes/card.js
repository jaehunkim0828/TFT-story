import express from 'express';
import { body } from 'express-validator';

import * as cardController from '../controller/card.js'; 
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
    .get(validate, cardController.getCardId);

cardRouter.route('/thumb/:id')
    .get(validate, cardController.getThumbId);

export default cardRouter;