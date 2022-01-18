import { CHOOSE_CHAMP } from "./actionType";

export const seleteChamp = (champion: [string, number]) => {
    return {
        type: CHOOSE_CHAMP,
        payload: champion,
    }
}