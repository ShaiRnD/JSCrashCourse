'use strict'
function brainfuck(program, dataArr){
    let dataPointer = 0;
    let instructionPointer = 0;
    let output = [];

    while(instructionPointer !== program.length){
        switch(program[instructionPointer]){
            case '>':
                dataPointer++;
            break;

            case '<':
                dataPointer--;
            break;

            case '+':
                dataArr[dataPointer]++;
            break;
            
            case '-':
                dataArr[dataPointer]--;
            break;

            case '.':
                output.push(dataArr[dataPointer]);
            break;

            case ',':
                // dataArr[dataPointer] = input.shift();
            break;

            case '[':
                if(dataArr[dataPointer] === 0){
                    let endBracketsCounter = 0;
                    while(true){
                        // jump forward to matching ]
                        instructionPointer++;
                        if(program[instructionPointer] === ']'){
                            if(endBracketsCounter === 0){
                                break;
                            }else{
                                endBracketsCounter--;
                            }
                        }else if(program[instructionPointer] === '['){
                            endBracketsCounter++;
                        }
                    }
                }   
            break;

            case ']':
                if(dataArr[dataPointer] !== 0){
                    let startBracketsCounter = 0;
                    while(true){
                        // jump to backward the matching [
                        instructionPointer--;
                        if(program[instructionPointer] === '['){
                            if(startBracketsCounter === 0){
                                break;
                            }else{
                                startBracketsCounter--;
                            }
                        }else if(program[instructionPointer] === ']'){
                            startBracketsCounter++;
                        }
                    }
                }
            break;
        }
        instructionPointer++;
    }
    return output;
}


const dataArr1 = [5,2];
brainfuck('[->+<]', dataArr1);
console.log(dataArr1);

const codeHelloWorld = '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.';
const dataArr = brainfuck(codeHelloWorld, new Array(100).fill(0));
let str = '';
for (const item of dataArr) {
    str += String.fromCharCode(item);
}
console.log(str);