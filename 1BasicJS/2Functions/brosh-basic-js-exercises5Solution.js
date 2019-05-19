'use strict'
function drawFlag(size){// assume size is odd
    const magicHalf = (size - 1) / 2;
    for(let i = 0; i < size; i++){
        let spaceChar = ' ';
        let middle;
        if(i === 0 || i === (size - 1)){
            spaceChar = '*';
            middle = '*';
        }else if(i === magicHalf){
            middle = 'X';
        }else {
            middle = ' ';
        }
        const space = spaceChar.repeat(magicHalf - 1);
        console.log(`*${space}${middle}${space}*`);
    }
}

function drawPyramid(height){
    for(let i = 0; i < height; i++){
        const space = ' '.repeat(height - 1 - i);
        const middle = '*'.repeat(i * 2 + 1)
        console.log(`${space}${middle}${space}`);
    }
}

function hasDigits(str){
    for (const char of str) {
        if(!isNaN(+char)){
            return true;
        }
    }
    return false;
}

function aToStar(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            if(typeof element === "string"){
                obj[key] = element.replace(/a/g,'*');
            }else if(typeof element === "object"){
                aToStar(element);
            }
        }
    }
    return obj;
}

// drawFlag(9);
// drawPyramid(4);
// console.log(hasDigits("foisejfd4"));

const obj = {
    first: "afds",
    last: "hjhjaaa",
    address: "alenbi",
    age: 45,
    phone: 4545345,
    child: {
        first: "abba"
    },
    arr: ['a',123,'123','ababab']
}
console.log(aToStar(obj));
console.log(aToStar(obj).child);
console.log(aToStar(obj).arr);

//brainfuck in a different file