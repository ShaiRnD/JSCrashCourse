'use strict'
// Array and Strings task
// 
// 1. Recieve a name array as input
// 2. print the longest name
// 3. print the most common letter
// * print a palindrome if present

const inp = ['Shai', 'Eran', 'Hadar', 'Alexander', 'abba', 'aba'];
let longest = '';
for (const item of inp) {
    if(longest.length < item.length){
        longest = item;
    }
}
console.log(longest);

const letterArr = new Array(26).fill(0);
const oneWord = inp.join('').toLowerCase();
const A_ASCII = 'a'.charCodeAt();
for (const char of oneWord) {
    const charIndex = char.charCodeAt() - A_ASCII;
    letterArr[charIndex]++;
}
let commenest = 0;
let max = 0;
for(const key in letterArr){
    if(letterArr[key] > max){
        max = letterArr[key];
        commenest = key;
    }
}
console.log(String.fromCharCode(commenest + A_ASCII));

for (const name of inp) {
    if(name.split('').reverse().join('') === name){
        console.log(name);
    }
}