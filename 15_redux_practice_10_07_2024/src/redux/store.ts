import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";

const store = legacy_createStore(combineReducers(
    {
        counter: counterReducer,
        sandwich: sandwichReducer
    }
))

export default store;

export type RootState = ReturnType<typeof store.getState>