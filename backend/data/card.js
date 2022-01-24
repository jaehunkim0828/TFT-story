import { db } from '../db.js';

export async function insertThumb(augmented, lv3, lv4, lv5, lv6, lv7, finalDeck) {
    return db.execute(
        'INSERT INTO card (augmented, level3, level4, level5, level6, level7, champions, traits, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    , [augmented, lv3, lv4, lv5, lv6, lv7, finalDeck.champions, finalDeck.traits, finalDeck.items]);
}

export async function insertCard(name, finalDeck, image, description, cardId) {
    return db.execute('INSERT INTO card_thumb (name, trait, image, description, card_id) VALUES (?, ?, ?, ?, ?)'
        , [name, finalDeck.traits, image, description, cardId]);
}

export async function seletedcardThumb() {
    return db.execute('SELECT * FROM card_thumb');
}