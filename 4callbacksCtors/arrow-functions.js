let arri = [1,2,3,4];

// function (i) {
//    return i * 2
// }

arri = [1,2,true, "", 0, undefined, [], {}, new Date(), null];
console.log(arri);

// example of map function and simplest form of arrow function - no return statement, one argument and no (), no {} aswell
const arri2 = arri.map(i => i * 2);
console.log(arri2);

// example of filtering truthy and falsy values
const filteredArri = arri.filter(i => i);
console.log(filteredArri);

// example of arrow function with more than one statement, notice the {} and the return
const arri3 = arri.map(i => {
   let res = i * 2;
   if (i > 10) res = i * 1.5;
   return res;
});
console.log(arri3);

// example of reduce function
const arri4 = arri.reduce((accumilator, currentValue) => {

});

// example of arrow function with no arguments
arri.forEach(() => console.log("there's an item here"))

//implement reduce
function reduce(arr, cb){
   let accumilator = arr.shift();
   for (const item of arr) {
      accumilator = cb(item, accumilator);
   }
   return accumilator;
}

arri = [123, '', 'hellllo', 'goodby'];
const reduceRes = reduce(arri, (item, value) => item + value);
console.log(reduceRes)