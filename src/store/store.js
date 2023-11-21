import { combineReducers, legacy_createStore as createStore } from "redux";

import reducer from "../reducers/movieReducer";
export const reducers = combineReducers({
    reducer: reducer,
});

export const store = createStore(reducers);