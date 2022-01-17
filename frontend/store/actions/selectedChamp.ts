import { CHOOSE_CHAMP } from "./actionType";

export const seleteChamp = (champion: string) => {
    return {
        type: CHOOSE_CHAMP,
        payload: champion
    }
}