import { ActionSandwich } from "./sandwichAction";

export interface InitialList {
  ingreds: string[];
}

const initialList: InitialList = {
  ingreds: [],
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
      return { ...state, state: state.ingreds.push(action.payload) };
    default:
      return state;
  }
}
