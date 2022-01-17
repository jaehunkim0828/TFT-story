import { createStore, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./reducers";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const makeStore: MakeStore<any> = () => {
    const store = createStore(rootReducer, bindMiddleware([]));
    return store;
}

export const wrapper = createWrapper<any>(makeStore, { debug: true });