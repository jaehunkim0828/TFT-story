import { db } from '../db.js';

export async function insertCard(augmented, lv3, lv4, lv5, lv6, lv7, final, items, traits) {
    const lvToString = (lv) => {
        return lv.reduce((acc, obj, index, arr) => {
            if (index === arr.length - 1) return `${acc}${obj.value}`;
            return `${acc}${obj.value} `;
        }, '');
    }

    const finalToStirng = (final) => {
        const keys = Object.keys(final);
        const values = Object.values(final);
        return keys.reduce((acc, key, index, arr) => {
            if (index === arr.length - 1) {
                return `${acc}${key} ${values[index]}`
            }
            return `${acc}${key} ${values[index]} > `
        }, '');
    }
    //19 19 > 20 12 > 33 21

    const traitToString = (trait) => {
        const keys = Object.keys(trait);
        const values = Object.values(trait);
        return keys.reduce((acc, key, index, arr) => {
            if (index === arr.length - 1) {
                return `${acc}${key} ${values[index]}`
            }
            return `${acc}${key} ${values[index]} > `
        }, '');
    }
    // 고물상 1 > 아카데미 2 > 봉쇄자 1

    const augumentedToString = (aug) => {
        const values = Object.values(aug);
        return values.reduce((acc, level, index, arr) => {
            const augment = level.reduce((ac, { value }, j, array) => {
                if (j === array.length -1 ) return `${ac}${value}`
                return `${ac}${value} , `
            },'')
            if (index === arr.length - 1) {
                return `${acc}${augment}`
            }
            return `${acc}${augment} > `
        }, '');
    }

    // 계산된 패배 , 뭐 , 뭐2 , 뭐3 > 부익부 , 뭐 , 뭐2 , 뭐3 > 레벨 업

    const itemToString = (item) => {
        const keys = Object.keys(item);
        const values = Object.values(item);
        return keys.reduce((acc, key, index, arr) => {
            const augment = values[index].reduce((ac, value, j, array) => {
                if (j === array.length -1 ) return `${ac}${value}`
                return `${ac}${value} , `
            },`${key} : `)
            if (index === arr.length - 1) {
                return `${acc}${augment}`
            }
            return `${acc}${augment} > `
        }, '');
    }

    return await db.execute(
        'INSERT INTO card (augmented, level3, level4, level5, level6, level7, champions, traits, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    , [augumentedToString(augmented), lvToString(lv3), lvToString(lv4), lvToString(lv5), lvToString(lv6), lvToString(lv7), finalToStirng(final), traitToString(traits), itemToString(items)]);
}

export async function insertThumb(title, traits, images, description, cardId, password) {
    const traitToString = (trait) => {
        const keys = Object.keys(trait);
        return keys.reduce((acc, key, index, arr) => {
            if (index === arr.length - 1) {
                return `${acc}${key}`
            }
            return `${acc}${key} > `
        }, '');
    }

    // 고물상 > 아카데미 > 봉쇄자

    return await db.execute('INSERT INTO card_thumb (name, trait, image, description, card_id, password) VALUES (?, ?, ?, ?, ?, ?)'
        , [title, traitToString(traits), images, description, cardId, password]);
}

export async function seletedcardThumb() {
    return await db.execute('SELECT * FROM card_thumb');
}

export async function seletedCard(id) {
    return await db.execute('SELECT * FROM card WHERE id=?', [id]);
}

export async function seletedThumb(id) {
    return await db.execute('SELECT * FROM card_thumb WHERE id=?', [id]);
}