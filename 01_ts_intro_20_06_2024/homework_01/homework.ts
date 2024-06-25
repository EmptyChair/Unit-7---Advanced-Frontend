console.log('LETs REWORK THIS SHIT FOR TYPESCRIPT!');
console.log('Hello world!');
console.log(5+4);


//one line comment
/*
multiple
line comment
*/

// const - переопределить нельзя
// let (переменная)
// var (переменная - depreciated, устаревший вариант)

// указывать тип переменной в JS не обязательно - можно спокойно менять
// TSC: UNION TYPE
let a :(number |string);
a = 10;
console.log(a);
a = '15';
console.log(a);

// TSC: PRIMITIVE TYPE
const b: number = 5;
// b=6; - error

// TSC: TYPE ANY
let x: any;
console.log(x);

x = 7.5;
console.log(typeof x);

x = 'bye';
console.log(typeof x);

//concatenation
// TSC: TYPE STRING
let res : string = 'true'+5; 
console.log(res);

//работа с разными типами данных и неявным приведением к другому типу
// TSC: NO AUTOMATIC RE-CASTING!!!
//let res25 = true +5; //true -> 1; false -> 0
let res25: number;
let st1 : boolean = true;
let st2 : boolean = false;
function addBoolInt(a: boolean, b: number) {
    if (a) {
        return 1+b;
    } else {
        return b;
    }
}
console.log('Add true/false to 25')
console.log(addBoolInt(st1, 25)); //26
console.log(addBoolInt(st2, 25)); //25
// false = 0, NaN, undefined, null, false (if transformed into boolean)
//TSC doesn't do type switching automatically, hence ANY in line 29
x  = 10;
x = !!x; //true
console.log(x);
console.log(typeof x);
x =!x; //false
console.log(x);
console.log(typeof x);

//number -> string
// TSC: DITTO HERE, can't recast automatically like JS
//res = 5;
let resAny2: any;
console.log(typeof resAny2); //number

res+= '';
console.log(typeof resAny2);//string

//string -> number

resAny2 = Number('5a');
console.log(resAny2); //NaN, can't work

resAny2 = + '666';
console.log(resAny2);
console.log(typeof resAny2);

console.log(parseInt('545asd')); //преобразует 545 - до первого нематематического символа
console.log(parseInt('545asd46565465465')); //тоже 545, после букв не воспринимает

console.log(eval('10*10+5')); //105

//JS сравнивает переменный в условиях отсутствия жесткого типизирования как в Java

/*
=  присвоение значения
== нестрогое сравнение без учёта типов
=== строгое сравнение с учётом типов

5 == '5' true
5 === '5' flase
*/
// TSC : TSC CAN'T COMPARE DIFFERENT TYPES LIKE THAT
//console.log(5 == '5'); 
//console.log(5 === '5'); 

// TSC: 
let h  = 10;
console.log(h++); //h is increased by 1 by the end of line 81, while console depicts h before addition, hence 10
console.log(++h); //the other way around - addition first, h later, hence 12

let h1 = 15;
let res1 = h1++ + ++h1;
//h1++ = 16
//++h1 = 16
console.log(res1);
h1 = 15;
let h11 = h1++;
console.log(h11);
let h22 = ++h1
console.log(h22);
res1 = h11 + h22;
console.log(res1);
//TSC: add number types, rename function from "sum" as it is reserved
function sumOfNum(a: number,b:number) {
return a+b;
}
console.log(sumOfNum(2,3));

function sumDigits(x: number) {
    /*
    let str = String(x);
    let sum = 0;
    for (i=0; i<str.length, i++;) {
        sum = sum+ parseInt(str[i]);
    }
    console.log('The sum of digits of '+x+' is...');
    return sum;
    */
    console.log('The sum of digits of '+x+' is...');
    let sum = 0;
    while(x) {
        // 54/10 = 5, rest 4
        sum += x%10
        x= (x-(x%10))/10;
    }    
    return sum;
}

function sumDigits2(x:number) {
    console.log('The sum of digits of '+x+' is...');
    let str = x+'';
    let sum = 0;
    //TSC: AGAIN, need to declare i beforehand!
    let i;
    for (i=0; i<str.length, i++;) {
        sum = sum+ parseInt(str[i]);
        console.log('The running sum of digits of '+x+' is...'+sum);
    }    
    return sum;
}

console.log(sumDigits(1234));
console.log(sumDigits2(1234));


//fourOrSeven принимает 4 или 7 - возвращать обратное значение
// TSC: add types-witching function
function fourOrSeven(x: number |string) {    
    console.log('fourOrSeven for '+x);
    if( x=='4')
    return 7;
    if( x=='7')
    return 4;
    if (x == 4 )
    return 7;
    else 
    return 4;
}

console.log(fourOrSeven('4')); 
console.log(fourOrSeven('7')); 
console.log(fourOrSeven(4)); 
// TSC: add types-witching function
function fourOrSevenT(x:number|string) {
    console.log('fourOrSevenT for '+x);
    if( x=='4')
        return 7;
    if( x=='7')
        return 4;
    else 
        return x == 4 ? 7 : 4
}
console.log(fourOrSevenT('4')); 
console.log(fourOrSevenT('7')); 
console.log(fourOrSevenT(4)); 

function fourOrSevenS(x: number | string) {
    console.log('fourOrSevenS for '+x);
    switch (x) {
        case '4':
            return 7;
        case '7':
            return 4;
        case 4:
            return 7;
        default:
            return 4;
    }
}
console.log(fourOrSevenS('4')); 
console.log(fourOrSevenS('7')); 
console.log(fourOrSevenS(4)); 

//fourOrSeven принимает 4 или 7 - возвращать обратное значение




// HOMEWORK 1
// fourOrSeven accepts only 4 or 7 and must return 7 (if 4 put in) or 4 (if 7 put in)
// Method 4

function fourOrSevenM4(x: number|string) {
    console.log("fourOrSeven - method 4")
    if (x =='4') {
        return 11-4;
    }
    if (x == '7') {
        return 11-7;
    } 
    if (typeof x == 'number'){
        return 11-x;
    }
    
}

console.log("Homework - Task 1"); 
console.log(fourOrSevenM4('4')); 
console.log(fourOrSevenM4('7')); 
console.log(fourOrSevenM4(4));

// Method 5

function fourOrSevenM5(x) {
    console.log("fourOrSeven - method 5")
    if (x =='4') {
        return 28/4;
    }
    if (x == '7') {
        return 28/7;
    } 
    if (typeof x == 'number'){
        return 28/x;
    }
}

console.log(fourOrSevenM5('4')); 
console.log(fourOrSevenM5('7')); 
console.log(fourOrSevenM5(4));

// HOMEWORK 2
// luckyNumber accepts 6-digit numbers
// if sum of 1st 3 digits equals the sum of second 3 digits, the number is lucky

function luckyNumber(x: number) {
    console.log("Number is "+x)
    let sum1 = 0
    let sum2 = 0;
    let i;
    for (i=0; i<3; i++) {
        sum2 = sum2 + x%10;
        x = (x-(x%10))/10
    }
    for (i=3; i<6; i++) {
        sum1 = sum1+ x%10;
        x = (x-(x%10))/10
    }
    if (sum1 == sum2)
    console.log("The number is lucky!")
    else
    console.log("The number is NOT lucky!")

    return sum1 == sum2
}

console.log("Homework - Task 2"); 
console.log(luckyNumber(123871)); //false : (1+2+3 == 8+7+1)
console.log(luckyNumber(111111));
console.log(luckyNumber(651840));

// HOMEWORK 3
// banana - write banana using only a and b

function banana() {
    let a=  'a';
    let b = 'b';  
    return (b+a+(0/0)+a)    
}

console.log("Homework - Task 3"); 
//TSC: impossible in TSC, there is no NaN!!!
console.log("Function banana writes this word: "+banana())

