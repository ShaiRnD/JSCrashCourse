'use strict'
// Array Task

// 1. Recieve an array input of multiple types (boolean, string, numbers);
// 2. print only the strings
// 3. print only the numbers
// 4. print only the booleans
// * run through the array only once

const inp = [true, 'hello', false, 2, 3, 89];
// const type = 'string';
const type = 'number';
// const type = 'boolean';

let ans = '';

console.log(inp);
for (const item of inp) {
    if(typeof(item) === type){
        ans += ` ${item}`;
    }
}
ans = ans.trim();
console.log(ans);