import { CHOOSE_ITEM } from "./actionType";

export const seleteItem = (item: [string, number]) => {
    return {
        type: CHOOSE_ITEM,
        payload: item,
    }
}