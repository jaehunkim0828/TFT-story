import * as cardRepository from '../data/card.js';

export async function getCardList (req, res, next) {
    const cardThumb = await cardRepository.seletedcardThumb();
    res.send(cardThumb[0]);
}

export async function makeDeck (req, res, next) {
    try {
        const { 
            lv3, //array [{ value: '벡스'}, 레오나, 브라움, 트리스타나]
            lv4, //array [벡스, 레오나, 브라움, 트리스타나]
            lv5, //array [벡스, 레오나, 브라움, 트리스타나]
            lv6, //array [벡스, 레오나, 브라움, 트리스타나]
            lv7, //array [벡스, 레오나, 브라움, 트리스타나]
            final, //object { '0': 19, '21': 20 } 
            augmented,// object -> array { level1: ['계산된 패배'], level2: ['부익부'], level3: ['레벨 업']}
            title, // string
            images, // string
            description, //string,
            items, //object -> array { '19': [2, 5, 10], '20': [11, 21, 13]}
            password, //string 4글자
            traits,
            main, // { 고물상: 1, 아카데미: 2, 봉쇄자: 1 }
        } = req.body;

        const insertcard = await cardRepository.insertCard(augmented, lv3, lv4, lv5, lv6, lv7, final, items, traits);
        const cardId = insertcard[0].insertId;
        console.log(cardId);
        await cardRepository.insertThumb(title, traits, images, description, cardId, password);
        res.status(201).send({ message: '만들기 성공!' });
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    }
}

export async function getCardId (req, res, next) {
    const { id } = req.params;
    const card = await cardRepository.seletedCard(id);
    res.send(card[0]);
}

export async function getThumbId (req, res, next) {
    const { id } = req.params;
    const thumb = await cardRepository.seletedThumb(id);
    res.send(thumb[0]);
}