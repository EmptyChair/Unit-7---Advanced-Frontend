import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sandwich = () => {
  const sandwich = useSelector((state: RootState) => state.sandwich.ingreds);
  //use dispatch to change global state
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center fw-bold">
        REACT-REDUX Exercise (Sandwich Ingredients)
      </h1>
      <div className="w-75 mx-auto align-self-center">
        <h1>Ingredients:</h1>
        <div className="text-center px-2 py-2 bg-dark text-white">
          {sandwich.map((ingreds, index) => (
            <div className="px-2 py-2 bg-dark" key={index}>
              {ingreds}
            </div>
          ))}
        </div>

        <div className="input-group  mb-3">
          {/*Bread*/}
          <button
            onClick={() => {
              dispatch({
                type: "sandwich/addIngredient",
                payload: "Bread",
              });
              console.log(sandwich);
            }}
            className="btn btn-light"
          >
            Bread
          </button>
          {/*Cheese*/}
          <button
            onClick={() => {
              dispatch({
                type: "sandwich/addIngredient",
                payload: "Cheese",
              });
              console.log(sandwich);
            }}
            className="btn btn-warning"
          >
            Cheese
          </button>
          {/*Salami*/}
          <button
            onClick={() => {
              dispatch({
                type: "sandwich/addIngredient",
                payload: "Salami",
              });
              console.log(sandwich);
            }}
            className="btn btn-primary"
          >
            Salami
          </button>
          {/*delete all*/}
          <button
            onClick={() => {
              dispatch({
                type: "sandwich/delete",
              });
              console.log(sandwich);
            }}
            className="btn btn-danger"
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;
