//we have typified the variable is Loading as BOOLEAN
let isLoading: boolean = true;
isLoading = false;
//isLoading = 4; - this will result in a type error

// Here the typecasting is performed automatically
let num = 42 
// num = "bomb"; FAIL - num was automatically typified as number, hence the shit

// Here is how we change the type: we typify num 2 in advance and allow 2 types, number and string
let num2: number | string = 42;
num2 = 'hi';

let state = 'loading'; // possible options include loading, success, error

// DETAILED: ONLY THESE VALUES ACCEPTED
let state2: 'loading' | 'success' | 'error';
// state2 = 'suces' FAIL - unacceptable

//PRIMITIVE TYPES:
/*
- boolean
- number
- string
- null,
- undefined
- void
- any 
- unknown
- bigint
- symbol
*/

//SOME UNKNOWN WORK
let notSure: unknown = 4;
if (typeof notSure === 'number') {
    let value: number = notSure;    
}

//NEW ARRAY
const arr = ['one', 'zwei', 'three', 'four'];
// arr.push(5); - will be an ERROR, because array has been typified automatically

//ARRAY TYPIFIED FOR STRINGs
const arr2: string[] = ['one', 'zwei', 'three', 'four'];

//ARRAY TYPIFIED FOR STRINGs AND NUMBERs
const arr3: (string | number)[] = ['one', 'zwei', 'three', 'four'];
arr3.push(5);

/*
(string | number)[] - an array of strings OR numbers
string | number[] - either string OR array of numbers
string[] | number[] - EITHER array of strings OR array of numbers
[string, number] - tuple (кортеж) - a case of array where length of the array and elements themselves are known in advance
*/

//ARRAY TUPLE FOR NUMBERs
let arr4: number[]  = [1,2,3,4,5];
arr4.push(6);
arr4 = arr4.filter(e => e%2 === 0);

// Object - automatically typified
let person = {
    name: 'Danny',
    isProgrammer: true
}


//Object - types provided
let personBetter: { name : string, isProgrammer: boolean } = {
    name: 'Alfred',
    isProgrammer: false
}

//Object - with interface

interface IPerson { name : string, isProgrammer: boolean };

let personWithInterface: IPerson = {
    name: 'Kirk',
    isProgrammer: true
}

//ARRAY of Persons

let persons: IPerson[] = [personWithInterface];
persons.push({
    name: 'Victor',
    isProgrammer: true
});
persons.push({
    name: 'Lex',
    isProgrammer: false
});
persons.push({
    name: 'Mike',
    isProgrammer: true
});

persons = persons.filter(e => e.isProgrammer === true)

//VARIATIVE INTERFACE - name may be present or not

interface IPersonVariative { name? : string, isProgrammer: boolean };

type Loading = 'loading';
type Success = 'success';
type Err = 'error';
//UNIFY TYPES - can be either of the three
type Status = Loading | Success | Err;

//FUNCTION Typization

const sum = (a:number, b:number): number | 'error' => a + b > 0 ? a + b : 'error';

console.log('Sum of 10 and 4 = '+sum(10,4));
console.log('Sum of 12 and 5 = '+sum(12,5));
console.log('Sum of -12 and 5 = '+sum(-12,5));

