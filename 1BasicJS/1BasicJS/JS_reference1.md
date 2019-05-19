# JS Quick Tutorial
ES5 var
```js
var dontUseVar = 1; // better use let or const
```
---
## JS types:
## Strings
```js
let str = 'This is a string';
```

This is the normal (ES5) way of concatinating
```js
let name = 'Shai';
let message = 'Hi ' + name + ' you\'re awesome'; // ​​​​​Hi Shai you're awesome​​​​​
```
This is the ES6 way
```js
let es6Way = `Hi ${name} you're awesome`; // ​​​​​Hi Shai you're awesome​​​​​
```

http://mdn.io/String
```js
console.log(str.substr(1,3)); // prints his
console.log(str.includes('this')); // prints true
console.log(str.startsWith('a')); // prints false
console.log(String.fromCharCode(100)); // prints d - static method use
```

Searches: `startsWith, endsWith, includes, indexOf`\
Favorite methods: `replace, search, split, join  (a function of array), toUpperCase, toLowerCase, trim, substr, slice`

```js
console.log(str.endsWith('')); // true
console.log(str.indexOf('i',)); // 2
let tmp = '123\
456\
789';
console.log(tmp); // 123456789
console.log(str.replace(/s/, '')); // Thi is a string
console.log(str.search('')); // 0
console.log(str.split('a').join('a')); // This is a string
console.log(str.toUpperCase()); // THIS IS A STRING
console.log(str.toLowerCase()); // this is a string
console.log('              a   bccc b     '.trim()); // a bccc b
console.log(str.substr(2, 4)); // is i
console.log(str.slice(2, 10)); // is is a
```


String as array
```js
let str = 'string';
console.log(str[2]); // prints r
console.log(str.substr(2,3)); // prints rin
```
---
## Numbers
NaN is strange ...
```js
console.log(NaN === NaN); // false!!
console.log(isNaN(NaN)); // true
```

Operators: `+ - += *= /= ++ -- %`

```js
let x = 1;
console.log(x); //1
console.log(x++); // 1
console.log(x); // 2
console.log(++x); // 3
console.log(x); // 3
x -= 2;
console.log(x + 'hi'); // prints '1hi'
// casting numbers
let strX = '12';
console.log(+strX); // prints 12
console.log(parseInt(strX)); // prints 12
console.log(parseInt('12.12')); // prints 12
console.log(parseFloat('12.12')); // prints 12.12
console.log(1 + +strX); // prints 13
console.log(1 * 'test'); // NaN
console.log(-8 % 10); // -8
let num = '12.2';
console.log(+num + 1);// prints 13.2

```

http://mdn.io/Math

---
## Boolean

Operators: `&& || !`\
Equality: `!== ===` (don't use!! `== !=`)

Ternary operator:
```js
let name = 'joe';
let x1 = name === 'josh' ? 'yes' : 'no';
```

```js
let isAllowed = true;
let key = 12;
key += 1;
key++;
++key;
// if statement
if (isAllowed) {

}
else if (key > 10) {

}
else {

}
```
Boolean expressions
```js
let boolExp = strX === '1' || key > 10;
let boolExp2 = strX === '1' && key > 10;
let boolExp3 = !boolExp; // not
let boolExp3 = strX !== 'josh';
```
Truthy and falsy

Falsy: `0, '', null, undefined, false, NaN`

Cast truthy to true and falsy to false with `!!`
```js
console.log(!!NaN); // false
console.log(0); // 0
```
---
```js
let x = 1;
let state = 'hi';

if (x === 1 && state) {
  console.log('success'); // prints success
}
console.log(x === 1 && state); // prints hi
```
---
## Some other stuff
Undefined behavior
```js
let x;
console.log(x); // prints undefined
```
Typeof
```js
console.log(typeof(1)); // number
console.log(typeof(true)); // boolean
console.log(typeof('str')); // string
console.log(typeof(undefined));// undefined
console.log(typeof({})); // object
console.log(typeof(function() {})); // function
```
Weird stuff
```js
console.log(typeof([])); // object
console.log(typeof(NaN)); // number
console.log(typeof(null)); // object
```

Loop

Structure:  

```js
//  |    A    |   B   | C  |
for (let i = 0; i < 10; i++) {
  // first iteration A then B
  // next iterations C then B
  // enters the block if B is true
}
```
Most used: iterates through arr
```js
let arr = ['banana','apple','pineapple'];
for (let item of arr) {
  console.log(item); // prints banana, apple, pineapple
}
```

Least used: iterates through keys of arr
```js
for (let item in arr) {
  console.log(item); // prints 0,1,2
}
```

0 or more iterations
```js
while (password !== '1234') {
}
```
1 or more iterations (and also break and continue)
```js
do {
  // input password
  if (error) break; // exits the loop  

  if (true) continue; // end this iteration and jumps to the condition

  console.log('will not print because of continue');
} while (password !== '1234')
```

Switch
```js
let userType

switch (userType) {
  case 'admin':
    // do some fancy stuff
    break;
  case 'guest':
    // do some fancy stuff
    break;
  default:
    // if didn't enter any of the cases
    break;
}

//same as
if (userType === 'admin') {
  // do some fancy stuff
}
else if (userType === 'guest') {

}
else {

}
```
---
## Arrays
```js
let arr1 = [1,2,3,4,5];
let emptyArr = [];

emptyArr.push(1);
emptyArr.push('second');
emptyArr.push(true);
let returnValue = emptyArr.pop();

let arr = [1,2,3,4,,,,,0];
arr[100] = 1;
console.log(arr[80]); // undefined

let matrix = [[1,2,3,4], 
              [2,4,6,8], 
              [3,6,9,12], 
              [4,8,12,16]];

matrix[2][1];
```
http://mdn.io/Array

