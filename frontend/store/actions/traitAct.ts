import { COUNT_DOWN_TRAIT, COUNT_UP_TRAIT } from "./actionType";

export const countUp = (trait: string) => {
    return {
        type: COUNT_UP_TRAIT,
        payload: trait
    }
}

export const countDown = (trait: string) => {
    return {
        type: COUNT_DOWN_TRAIT,
        payload: trait
    }
}