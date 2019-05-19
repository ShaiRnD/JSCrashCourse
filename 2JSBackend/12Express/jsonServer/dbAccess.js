'use strict';
const fs = require('fs');
const dbFilePath = './db.json';

function makeSureDBExistsSync() {
    const dbExists = fs.existsSync(dbFilePath);
    if (!dbExists) {
        console.log(dbFilePath, 'doesnt exists, creating...');
        const emptyDB = {
            posts: [],
            users: []
        };
        fs.writeFileSync(dbFilePath, JSON.stringify(emptyDB, null, 2));
    };
};

function readDBToJson(cb){
    fs.readFile(dbFilePath, (err, data) => {
        if(err) throw err;
        cb(JSON.parse(data));
    });
};

function writeJsonToDB(json, cb){
    const prettyJson = JSON.stringify(json, null, 2);
    fs.writeFile(dbFilePath, prettyJson, err => {
        err && console.log(err);
        cb();
    });
};

module.exports = {readDBToJson, writeJsonToDB, makeSureDBExistsSync};