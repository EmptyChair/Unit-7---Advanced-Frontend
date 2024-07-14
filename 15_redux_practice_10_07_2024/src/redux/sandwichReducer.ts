import { ActionSandwich } from "./sandwichAction";

export interface InitialList {
  ingreds: string[];
}

const initialList: InitialList = {
  ingreds: ["Salami", "Bread"],
};
//if no state provided - initialState (that's on start)

export default function sandwichReducer(
  state = initialList,
  action: ActionSandwich
) {
  switch (action.type) {
    case "sandwich/delete":
      return { ...state, ingreds: [] };
    case "sandwich/addIngredient": 
      state.ingreds.push(action.payload);
      return { ...state, ...state.ingreds };
    default:
      return state;
  }
}

// return { ...state, ingreds: state.ingreds.push(action.payload) };
