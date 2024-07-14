import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";

// 3.1 Store Creation, with information about methods to change information inside storage
const store = legacy_createStore(combineReducers(
    {
        counter: counterReducer,
        sandwich: sandwichReducer
    }
))

export default store;
// 3.2 Typification of everything which is stored in global state
export type RootState = ReturnType<typeof store.getState>