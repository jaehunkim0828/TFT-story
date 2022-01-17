import { CHOOSE_CHAMP } from "../actions/actionType";
import { seleteChamp } from '../actions/selectedChamp';
import { SelectImg, ImgAction } from '../type/state';

const initialState: SelectImg = { image: '' };

export default function championImgReducer(state = initialState, action: ImgAction) {
    switch (action.type) {
        case CHOOSE_CHAMP:
            return {image : action.payload};
        default:
            return state;
    }
}