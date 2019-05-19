'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const posts = require('./routes/posts');
const users = require('./routes/users');
const {closeConnection} = require('./dbAccess/dbAccess');
const util = require('util');

const app = express();
const port = 3000;
const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a'});

app.use(morgan('combined', {
    stream: errorLogStream,
    skip(req, res){return res.statusCode < 400;}
}));
app.use(express.json());
app.use('/posts', posts);
app.use('/users', users);

const server = app.listen(port, () => console.log(`Listening on port ${port}!`));

process.on('SIGTERM', handleSignalEnd)
        .on('SIGINT', handleSignalEnd);

let onlyOnce = false;
function handleSignalEnd(signal) {
    if(!onlyOnce){
        onlyOnce = true;
        console.log(`\nRecieved ${signal}, closing server...`);
        const serverClosePromise = util.promisify(server.close).bind(server);
        serverClosePromise()
        .then(() => {
            console.log('Server closed');
            console.log('Closing Mysql connection...');
            return closeConnection()
        })
        .then(() => {
            console.log('Mysql connection closed');
            console.log(`Letting node exit on it's own...`);
        })
        .catch((err) => {
            console.log(err);
        });
    }else console.log(`Recieved ${signal} second time`);
};

// process.on('SIGTERM', handleSignalEnd)
//         .on('SIGINT', handleSignalEnd);

// let onlyOnce = false;
// function handleSignalEnd(signal) {
//     console.log(`Recieved ${signal} closing server`);
//     if(!onlyOnce){
//         onlyOnce = true;
//         server.close(err => {
//             err && console.log(err);
//             console.log('Server closed');
//             closeConnection(err => {
//                 err && console.log(err);
//                 console.log('Mysql connection closed');
//                 console.log(`Letting node exit on it's own...`);
//             });
//         });
//     }else console.log(`Recieved ${signal} second time`);
// };