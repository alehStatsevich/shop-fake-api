import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {beerReducer} from "./punkReduser";

const rootReducer = combineReducers({
    beers: beerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;
