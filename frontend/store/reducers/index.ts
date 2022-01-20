import { combineReducers } from "redux";
import championImgReducer from "./selectedChamp";
import traitReducer from './traitReducer';
import numberOfChampReducer from "./numberOfChampReducer";

const rootReducer = combineReducers({
    championImgReducer,
    traitReducer,
    numberOfChampReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;