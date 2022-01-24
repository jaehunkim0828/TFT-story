import * as cardRepository from '../data/card.js';

export async function getCardList (req, res, next) {
    const cardThumb = await cardRepository.seletedcardThumb();
    res.send(cardThumb[0]);
}

export async function makeDeck (req, res, next) {
    try {
        const { 
            lv3, 
            lv4, 
            lv5, 
            lv6, 
            lv7, 
            finalDeck, 
            augmented,
            name,
            image,
            description
        } = req.body;

        const insertcardThumb = await cardRepository.insertThumb(augmented, lv3, lv4, lv5, lv6, lv7, finalDeck);
        const cardId = insertcardThumb[0].insertId;
        const insertcard = await cardRepository.insertCard(name, finalDeck, image, description, cardId);
        console.log(insertcard);
        res.status(201).send(insertcard);

    } catch(err) {
        res.status(404).send(err);
    }
}