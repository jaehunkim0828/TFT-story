import { combineReducers } from "redux";
import championImgReducer from "./selectedChamp";
import traitReducer from './traitReducer';

const rootReducer = combineReducers({
    championImgReducer,
    traitReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;