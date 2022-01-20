import { COUNT_DOWN_CHAMP, COUNT_UP_CHAMP } from "../actions/actionType";
import { countDownChamp,countUpChamp } from '../actions/numberOfChampAct';
import { NumberOfChamp, NumberOfChampState } from '../type/state';

const initialState: NumberOfChampState = { member: 0 };

export default function numberOfChampReducer(state = initialState, action: NumberOfChamp) {
    switch (action.type) {
        case COUNT_UP_CHAMP:
            return { member: state.member + 1 };
        case COUNT_DOWN_CHAMP:
            return { member: state.member - 1 };
        default:
            return state;
    }
};