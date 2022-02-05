import { COUNT_UP_DECK_MAKE } from "../actions/actionType";
import { DeckMake, DeckMakeAct } from '../type/state';

const initialState: DeckMake = { count: 0 };

export default function saveDeckReducer(state = initialState, action: DeckMakeAct) {
    switch (action.type) {
        case COUNT_UP_DECK_MAKE:
            return { count: state.count + 1 };
        default:
            return state;
    }
}