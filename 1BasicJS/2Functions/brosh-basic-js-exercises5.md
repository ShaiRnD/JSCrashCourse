1. `drawFlag(size)`. Note: assume size is always an odd number (5,7 etc...)
    ```javascript
    drawFlag(5) // assume size is odd
    // will print:
    // *****
    // *   *
    // * X *
    // *   *
    // *****
    ```
1. `drawPyramid(height)`
    ```javascript
    drawPyramid(4);
    // will print:
    //    *
    //   ***
    //  *****
    // *******
    ```
1. create a function `hasDigits(str)` that return true if the string supplied contain digits
1. create a function that receives an object and replaces every `a` with `*` on string values only. 
    ```javascript 
    const obj = {
        first: "afds",
        last: "hjhjaaa",
        address: "alenbi",
        age: 45,
        phone: 4545345
    }
    aToStar(obj);
    // will return
    // {
    //    first : "*fds",
    //    last : "hjhj***",
    //    address : "*lenbi",
    //    age : 45,
    //    phone : 4545345
    // };
    ```
    - challange: make it work recursively on child objects as well
1. create a Brainfuck interpreter:
```js
function brainfuck(program, dataArr) {
  // your code here
}

brainfuck('[->+<]', [5,2]) // returns [0,7]
```