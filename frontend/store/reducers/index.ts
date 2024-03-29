import { combineReducers } from "redux";
import championImgReducer from "./selectedChamp";
import traitReducer from './traitReducer';
import numberOfChampReducer from "./numberOfChampReducer";
import itemReducer from "./selectedItemReducer";
import dropValueReducer from "./dropValue";
import saveDeckReducer from "./saveDeck";

const rootReducer = combineReducers({
    championImgReducer,
    traitReducer,
    numberOfChampReducer,
    itemReducer,
    dropValueReducer,
    saveDeckReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;