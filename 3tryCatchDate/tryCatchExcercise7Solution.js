'use strict';
// Implement a calculator function which receives the params: x, operator (+ - * /), y
// first it checks the validity of the inputs and throws relevant exceptions
// "x/y is not a number"
// "operator is illegal"
// "cannot divide by zero"

// and if the inputs are valid, returns the result
// * without using the eval function

function calculator(x, operator, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'x/y is not a number';
    }
    const operation = operatorFunctionDictionary[operator];
    if(typeof operation !== "function"){
        throw 'operator is illegal';
    }
    if(operator === '/' && y === 0){
        throw 'cannot divide by zero';
    }
    return operation(x, y);
}

const operatorFunctionDictionary = {
    "+": function(x,y){return x + y;},
    "-": function(x,y){return x - y;},
    "*": function(x,y){return x * y;},
    "/": function(x,y){return x / y;}
}

function safePrintCalculator(x, operator, y){
    try{
        console.log(calculator(x, operator, y));
    }catch(e){
        console.log(e);
    }
}

safePrintCalculator(1, '+', 2);
safePrintCalculator(1, '-', 2);
safePrintCalculator(1, '*', 2);
safePrintCalculator(1, '/', 2);
safePrintCalculator('a', '+', 2);
safePrintCalculator(1, '+', 'b');
safePrintCalculator(1, 'a', 2);
safePrintCalculator(1, '/', 0);