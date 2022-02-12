import { HYDRATE } from "next-redux-wrapper";

import { COUNT_DOWN_TRAIT,COUNT_UP_TRAIT, RESET_TRAIT } from "../actions/actionType";
import { TraitState, Trait  } from '../type/state';

const initialState: TraitState = { 
    trait: {
        '경호대': 0,
        '난동꾼': 0,
        '변형술사': 0,
        '저격수': 0,
        '비전마법사': 0,
        '도전자': 0,
        '암살자': 0,
        '쌍발총': 0,
        '강화술사':0,
        '거신': 0,
        '타격대': 0,
        '학자': 0,
        '혁신가': 0,
        '경쟁자': 0,
        '고물상': 0,
        '대식가': 0,
        '돌연변이': 0,
        '마법공학': 0,
        '범죄도시': 0,
        '사교계': 0,
        '시계태엽': 0,
        '연미복': 0,
        '요들':0,
        '요들군주': 0,
        '용병': 0,
        '집행자': 0,
        '화학공학': 0,
        '흑막': 0,
    },
};

export default function championImgReducer(state = initialState, action: Trait) {
    switch (action.type) {
        case COUNT_DOWN_TRAIT:
            state.trait[action.payload] > 0 ? state.trait[action.payload] -= 1 : state.trait[action.payload] = 0
            return state;
        case COUNT_UP_TRAIT:
            state.trait[action.payload] += 1
            return state;
        case RESET_TRAIT:
            return {
                trait: {
                '경호대': 0,
                '난동꾼': 0,
                '변형술사': 0,
                '저격수':0,
                '비전마법사': 0,
                '도전자': 0,
                '암살자': 0,
                '쌍발총': 0,
                '강화술사':0,
                '거신': 0,
                '타격대': 0,
                '학자': 0,
                '혁신가': 0,
                '경쟁자': 0,
                '고물상': 0,
                '대식가': 0,
                '돌연변이': 0,
                '마법공학': 0,
                '범죄도시': 0,
                '사교계': 0,
                '시계태엽': 0,
                '연미복': 0,
                '요들':0,
                '요들군주': 0,
                '용병': 0,
                '집행자': 0,
                '화학공학': 0,
                '흑막': 0,
            }};
        case HYDRATE:
            return state;
        default:
            return state;
    }
}