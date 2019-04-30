'use strict';
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

function readDBToJson(cb){
    fs.readFile('./db.json', (err, data) => {
        if(err) throw err;
        cb(JSON.parse(data));
    });
};

function writeJsonToDB(json, cb){
    const prettyJson = JSON.stringify(json, null, 2);
    fs.writeFile('./db.json', prettyJson, err => {
        err && console.log(err);
        cb();
    });
};

app.get('/users', (req, res) => {
    readDBToJson(db => res.send(db.users));
});

app.get('/users/:id', (req, res) => {
    readDBToJson(db => res.send(db.users[req.params.id]));
});

app.post('/users', (req, res) => {
    readDBToJson(db => {
        const newIndex = db.users.length;
        const newUser = {
            id: newIndex,
            name: req.body.name
        };
        db.users.push(newUser);
        writeJsonToDB(db, () => {
            res.send(db.users[newIndex]);
        });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));