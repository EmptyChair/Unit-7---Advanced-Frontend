import { ActionCounter } from "./counterAction";

export interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};
//if no state provided - initialState (that's on start)

export default function counterReducer(
  state = initialState,
  action: ActionCounter
) {
  console.log("Arriving payload: "+action.payload)
  switch (action.type) {
    case "counter/minus1":
      // copy the state in full, replace the value inside the state, return as new state
      console.log("minus1");
      return { ...state, value: state.value - action.payload };
    case "counter/plus1":
      console.log("plus1");
      return { ...state, value: state.value + action.payload };
    case "counter/minus10":
      console.log("minus10");
      return { ...state, value: state.value - action.payload };
    case "counter/plus10":
      console.log("plus10");
      return { ...state, value: state.value + action.payload };
    case "counter/addProvidedNumber":
      if (typeof action.payload === "number") {
        return { ...state, value: state.value + action.payload };
      }
      return state;  
      case "counter/subtractProvidedNumber":
        if (typeof action.payload === "number") {
          return { ...state, value: state.value + action.payload };
        }
        return state;       
    default:
      return state;
  }
}
