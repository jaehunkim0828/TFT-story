import { HYDRATE } from "next-redux-wrapper";

import { CHOOSE_ITEM } from "../actions/actionType";
import { SelectImg, ImgAction } from '../type/state';

const initialState: SelectImg = { image: '', name: '', id: 0 };

export default function itemReducer(state = initialState, action: ImgAction) {
    switch (action.type) {
        case CHOOSE_ITEM:
            return {image : action.payload[0], id: action.payload[1], name: action.payload[2]};
        // case HYDRATE:
        //     return {image : action.payload[0], id: action.payload[1]};
        default:
            return state;
    }
}