import { combineReducers } from "redux";
import championImgReducer from "./selectedChamp";

const rootReducer = combineReducers({
    championImgReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;