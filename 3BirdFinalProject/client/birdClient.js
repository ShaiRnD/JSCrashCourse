'use strict';
const util = require('util');
const commands = require('./commands');
const prompt = require('prompt');

prompt.message = `bird`;
prompt.delimiter = '>';
let scooterId;
let userId;

const getPromisified = util.promisify(prompt.get);

(async () =>{
    prompt.start();
    while(true){
        try{
            const result = await getPromisified(['command', 'param1', 'param2']);
            const func = commands[result.command];
            if(result.command === 'register'){
                scooterId = await func();
                prompt.delimiter = `-${scooterId}>`;
            }else if(result.command === 'rent'){
                await func(scooterId, result.param1);
                userId = result.param1;
                prompt.delimiter = `-${scooterId}-${userId}>`;
            }else if(result.command === 'release'){
                await func(scooterId, userId, result.param1);
                prompt.delimiter = `-${scooterId}>`;
            }else if(result.command === 'exit'){
                break;
            }else if(!func){
                console.log(`no such command "${result.command}"`);
            }else{
                await func(scooterId, result.param1, result.param2);
            }
        }catch(err){
            console.log(err);
        }
    }
})();



