'use strict';
// write a program that does the following:
// 1. receives a username from the terminal
// 2. prints "hello [username]"
// 3. receives a password and compares it with 123
// 4. prints success or fail

// * use prompt

const prompt = require('prompt');
const moment = require('moment');

console.log(moment.locale());
console.log('now is', moment().format('LTS'));
 
prompt.start();
prompt.get(['username'], function (err, result) {
  console.log(`Hello ${result.username}`);
  prompt.get(['password'], function (err, result) {
    console.log(result.password === '123');
  });
});