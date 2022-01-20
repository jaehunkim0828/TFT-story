import { COUNT_DOWN_CHAMP, COUNT_UP_CHAMP } from "./actionType";

export const countUpChamp = () => {
    return {
        type: COUNT_UP_CHAMP,
    }
}

export const countDownChamp = () => {
    return {
        type: COUNT_DOWN_CHAMP,
    }
}