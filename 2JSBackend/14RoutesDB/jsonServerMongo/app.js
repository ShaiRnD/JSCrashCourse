'use strict';



// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const morgan = require('morgan');
// const posts = require('./routes/posts');
// const users = require('./routes/users');
// const {closeConnection} = require('./dbAccess/dbAccess');

// const app = express();
// const port = 3000;
// const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a'});

// app.use(morgan('combined', {
//     stream: errorLogStream,
//     skip(req, res){return res.statusCode < 400;}
// }));
// app.use(express.json());
// app.use('/posts', posts);
// app.use('/users', users);

// const server = app.listen(port, () => console.log(`Listening on port ${port}!`));

// process.on('SIGTERM', handleSignalEnd);
// process.on('SIGINT', handleSignalEnd);

// function handleSignalEnd(signal) {
//     console.log(`Recieved ${signal} closing server`);
//     shutDownGracefully();
// };

// //todo handle this later
// // process.on('uncaughtException', (err, origin) => {
// //     shutDownGracefully(err);
// // });


// function shutDownGracefully(uncaughtException) {
//     server.close(err => {
//         err && console.log(err);
//         console.log('Server closed');
//         closeConnection(err => {
//             err && console.log(err);
//             console.log('Mysql connection closed');
//             if(uncaughtException) throw uncaughtException
//             else console.log(`Letting node exit on it's own...`);
//         });
//     });
// }
