import { COUNT_DOWN_TRAIT,COUNT_UP_TRAIT } from "../actions/actionType";
import { TraitState, Trait  } from '../type/state';

const initialState: TraitState = { 
    trait: {
        '고물상': 0,
        '대식가': 0,
        '돌연변이': 0,
        '범죄 조직':0,
        '사교계': 0,
        '시계태엽': 0,
        '아카데미': 0,
        '요들': 0,
        '요들 군주':0,
        '용병': 0,
        '자매': 0,
        '제국': 0,
        '집행자': 0,
        '포근': 0,
        '화학공학': 0,
        '강화술사': 0,
        '거신': 0,
        '경호대': 0,
        '난동꾼': 0,
        '도전자': 0,
        '변형술사': 0,
        '봉쇄자': 0,
        '비전 마법사':0,
        '쌍발총': 0,
        '암살자': 0,
        '저격수': 0,
        '학자': 0,
        '혁신가': 0,
    },
};

export default function championImgReducer(state = initialState, action: Trait) {
    switch (action.type) {
        case COUNT_DOWN_TRAIT:
            state.trait[action.payload] -= 1
            return state;
        case COUNT_UP_TRAIT:
            state.trait[action.payload] += 1
            return state;
        default:
            return state;
    }
}