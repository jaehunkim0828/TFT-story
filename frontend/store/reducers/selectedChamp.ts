import { HYDRATE } from "next-redux-wrapper";

import { CHOOSE_CHAMP } from "../actions/actionType";
import { SelectImg, ImgAction } from '../type/state';

const initialState: SelectImg = { image: '', id: 0 };

export default function championImgReducer(state = initialState, action: ImgAction) {
    switch (action.type) {
        case CHOOSE_CHAMP:
            return {image : action.payload[0], id: action.payload[1]};
        case HYDRATE:
            return {image : action.payload[0], id: action.payload[1]};
        default:
            return state;
    }
}