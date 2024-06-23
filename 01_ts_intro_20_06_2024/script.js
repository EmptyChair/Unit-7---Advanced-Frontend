//we have typified the variable is Loading as BOOLEAN
var isLoading = true;
isLoading = false;
//isLoading = 4; - this will result in a type error
// Here the typecasting is performed automatically
var num = 42;
// num = "bomb"; FAIL - num was automatically typified as number, hence the shit
// Here is how we change the type: we typify num 2 in advance and allow 2 types, number and string
var num2 = 42;
num2 = 'hi';
var state = 'loading'; // possible options include loading, success, error
// DETAILED: ONLY THESE VALUES ACCEPTED
var state2;
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
var notSure = 4;
if (typeof notSure === 'number') {
    var value = notSure;
}
//NEW ARRAY
var arr = ['one', 'zwei', 'three', 'four'];
// arr.push(5); - will be an ERROR, because array has been typified automatically
//ARRAY TYPIFIED FOR STRINGs
var arr2 = ['one', 'zwei', 'three', 'four'];
//ARRAY TYPIFIED FOR STRINGs AND NUMBERs
var arr3 = ['one', 'zwei', 'three', 'four'];
arr3.push(5);
/*
(string | number)[] - an array of strings OR numbers
string | number[] - either string OR array of numbers
string[] | number[] - EITHER array of strings OR array of numbers
[string, number] - tuple (кортеж) - a case of array where length of the array and elements themselves are known in advance
*/
//ARRAY TUPLE FOR NUMBERs
var arr4 = [1, 2, 3, 4, 5];
arr4.push(6);
arr4 = arr4.filter(function (e) { return e % 2 === 0; });
// Object - automatically typified
var person = {
    name: 'Danny',
    isProgrammer: true
};
//Object - types provided
var personBetter = {
    name: 'Alfred',
    isProgrammer: false
};
;
var personWithInterface = {
    name: 'Kirk',
    isProgrammer: true
};
//ARRAY of Persons
var persons = [personWithInterface];
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
persons = persons.filter(function (e) { return e.isProgrammer === true; });
;
//FUNCTION Typization
var sum = function (a, b) { return a + b > 0 ? a + b : 'error'; };
console.log('Sum of 10 and 4 = ' + sum(10, 4));
console.log('Sum of 12 and 5 = ' + sum(12, 5));
console.log('Sum of -12 and 5 = ' + sum(-12, 5));
