//rafce
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface IProvidedNumber {
  newNumber: number;
}

const Counter = () => {
  //retrieve data from store
  const count = useSelector((state: RootState) => state.counter.value);
  //use dispatch to change global state
  const dispatch = useDispatch();
  //read provided number
  const [providedNumber, setProvidedNumber] = useState<number | "">();

  return (
    <div>
      <h1 className="text-center fw-bold">
        REACT-REDUX Exercise (Simple Counter)
      </h1>
      <div className="w-75 mx-auto align-self-center">
        <div className="text-center px-2 py-2 bg-primary text-white">
          Counter: {count}
        </div>
        <div className="text-center px-2 py-2 bg-secondary text-white d-flex justify-content-center">
          {/*state is provided automatically*/}
          {/*when pressed, launch a function: use dispatch to get information about action, apply action to global state*/}
          <button
            className="px-2 py-2"
            onClick={() => dispatch({ type: "counter/minus1", payload: 1 })}
          >
            {" "}
            -1
          </button>
          <button
            className="px-2 py-2"
            onClick={() => dispatch({ type: "counter/plus1", payload: 1 })}
          >
            {" "}
            +1
          </button>
          <button
            className="px-2 py-2"
            onClick={() => dispatch({ type: "counter/minus10", payload: 10 })}
          >
            -10
          </button>
          <button
            className="px-2 py-2"
            onClick={() => dispatch({ type: "counter/plus10", payload: 10 })}
          >
            {" "}
            +10
          </button>
        </div>
        <div className="input-group  mb-3">
          <input
            type="text"
            //value and providedNumber are tied together, if one changes, so will the other
            value={providedNumber}
            onChange={(e) => {
              //+ e.target.value - turning the value into number
              if (!isNaN(+e.target.value)) {
                setProvidedNumber(+e.target.value);
              }
            }}
            className="form-control"
            placeholder="Provide a Number"
          />
          <button
            onClick={() => {
              if (providedNumber) {
                dispatch({
                  type: "counter/addProvidedNumber",
                  payload: providedNumber,
                });
                setProvidedNumber("");
              }
            }}
            className="btn btn-success"
          >
            Add Number
          </button>
          <button
            onClick={() => {
              if (providedNumber) {
                dispatch({
                  type: "counter/subtractProvidedNumber",
                  payload: -providedNumber,
                });
                setProvidedNumber("");
              }
            }}
            className="btn btn-danger"
          >
            Subtract Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
