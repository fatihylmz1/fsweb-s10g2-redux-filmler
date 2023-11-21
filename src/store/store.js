import { combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import favouriteReducer from "../reducers/favouritesReducer";
import reducer from "../reducers/movieReducer";
export const reducers = combineReducers({
    reducer: reducer,
    favori: favouriteReducer,

});

export const store = createStore(reducers);