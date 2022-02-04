import { CHANGE_DROP_VALUE } from "./actionType";

export function changeValue(value: string) {
    return { 
        type: CHANGE_DROP_VALUE,
        payload: value,
    }
}