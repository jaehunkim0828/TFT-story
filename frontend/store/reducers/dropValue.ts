import { CHANGE_DROP_VALUE, CHOOSE_CHAMP } from "../actions/actionType";
import { SelectImg, ImgAction } from '../type/state';
import { DropValue } from '../type/state';

const initialState: DropValue = { value: '' };

export default function dropValueReducer(state = initialState, action: { type: string, payload: string }) {
    switch (action.type) {
        case CHANGE_DROP_VALUE:
            return { value: action.payload };
        default:
            return state;
    }
}