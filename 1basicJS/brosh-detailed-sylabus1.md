# Intro
* History
* Interpreted vs compiled
* Install Visual Studio Code
* Installing Node
* What is Node ?
* Writing our first program

## Language basics
* `console.log`
* Defining variables
    * Basic types: string, boolean, numbers
    * Identifiers
    * Reserved words
* Operators (`+-/%* ++ += !!`)
* Comments
* Conditions: `if else`
* Basic operations: `! === !== && ||`
* Ternary operator `? :`
* Loops: `while, do while, for, for of`
* `switch`
* scope

## Types
* numbers
  * Basic arithmatics & operator precedence
  * converting from string: `+myString`
  * `parseInt, parseFloat`
  * Math: `abs, ceil, floor, round, sqrt, pow, min, max, random, PI`
  * Floating point arithmatics problem 1.1 + 2.2
  * NaN (`NaN === NaN` WTFJS??)
  * http://mdn.io/Math
* boolean
* strings
  * immutable
  * `length`
  * finding: `startWith, endWith, indexOf, includes, charAt`
  * operations: `replace, search, split, join, toUpperCase, toLowerCase, trim, substr, substring, slice`
  * http://mdn.io/String
* arrays
  * Creation
  * String vs arrays
  * Basic operations: `push, pop, shift, unshift`
  * `length`
  * Multidimentional arrays
  * http://mdn.io/Array

## Objects
* literal objects
* Access: `obj["keyName"], obj.keyName`
* Properties
* Expansion
* `delete`
* `for in`
* `for of`
* Methods
* Reference types vs value types
* The global object

## Functions 
* Parameters
  * `arguments` - array-like object
* Return value
* function scope (var) vs block scope (let, const)
* IIFE (immediately invoked function expression) 
* Hoisting 
* callbacks

## Dates
* `new Date`
* http://mdn.io/Date

## Error handling
* try, catch, finally
* the Error object https://mdn.io/Error

## Functions - part 2
* `this`
  * 4 ways to invoke a function
  * `bind`, (also `apply` and `call`)
* understanding closure
* arrow functions
  * lexical `this`

## ES6 syntax
* Object literal, Template strings, Default parameters, Destructuring, Spread operator, Rest operator
* Array, Map, Set, 
* Number, String, Object
* Classes
  * a word about prototypes
  * constructor
  * getters/setters
  * static
  * super 
  * inheritance
  * `typeof` vs `instanceof`
* a word about ES6 modules

### Event Loop
* What is the event loop https://www.youtube.com/watch?v=8aGhZQkoFbQ