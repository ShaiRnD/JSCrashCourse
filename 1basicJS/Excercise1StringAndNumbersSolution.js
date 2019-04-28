'use strict'
// Strings and Numbers Task
// Recieve two inputs:
// - If they are both numbers output their sum
// - If they are strings/ numbers output their concatination
// - If they are both strings concat with a white space in between

// *use template literals `${}`
// *use string concatination +

let in1 = 'a', in2 = 'thmj';
let ans;
if(typeof(in1) === 'number' && typeof(in2) === 'number'){
    ans = in1 + in2;
}else if((typeof(in1) === 'number' && typeof(in2) === 'string') || (typeof(in1) === 'string' && typeof(in2) === 'number')){
    ans = in1 + in2;
}else if(typeof(in1) === 'string' && typeof(in2) === 'string'){
    ans = `${in1} ${in2}`;
}

console.log(ans);