export type ActionSandwich =
| { type : "sandwich/addIngredient", payload : string }
| { type : "sandwich/delete" }


//{type (always string), payload? : any}