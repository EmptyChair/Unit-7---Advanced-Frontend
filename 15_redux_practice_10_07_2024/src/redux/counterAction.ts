export type ActionCounter =
| { type : "counter/minus1", payload: number }
| { type : "counter/plus1", payload: number }
| { type : "counter/plus10", payload: number }
| { type : "counter/minus10", payload: number }
| { type : "counter/addProvidedNumber", payload : number }
| { type : "counter/subtractProvidedNumber", payload : number }


//{type (always string), payload? : any}