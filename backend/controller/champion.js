import { db } from '../db.js';
import * as championRepository from '../data/champion.js';

export async function getChampions (req, res, next) {
    try {
        const result = await championRepository.selectedChampion();
        res.status(200).send(result[0]);
    } catch(err) {
        res.status(404).send({ message: 'not Found' })
    }
}

export async function getTraitOfChampion (req, res, next) {
    const { id } = req.params;
    const getTrait = await championRepository.findTraitName(id);
    const traits = getTrait[0].map(trait => {
        return trait.name;
    })
    res.status(200).send(traits);
    // .then( async (result) => {
    //     const traits = result[0].map(trait => {
    //         return trait.name;
    //     })
    //     res.send(traits);
    // })
}

export async function getChampionImage(req, res, next) {
    const { id } = req.params;
    const getchampImg = await championRepository.findImage(id);
    res.status(200).send(getchampImg[0][0]);
}