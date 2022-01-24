import { db } from '../db.js';

export async function selectedChampion() {
    return db.execute('SELECT id, cost, images FROM champions');
}

export async function findTraitName(id) {
    return db.execute('SELECT name FROM traits INNER JOIN champion_trait ON (traits.id=champion_trait.traitId) WHERE champion_trait.championId=?', [id])
}