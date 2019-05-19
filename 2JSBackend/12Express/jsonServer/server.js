'use strict';

// This project uses routes altough not learned yet in the course, if all the routing is in this file it is OK!

const express = require('express');
const posts = require('./routes/posts');
const users = require('./routes/users');
const {makeSureDBExistsSync} = require('./dbAccess')

const app = express();
const port = 3000;

makeSureDBExistsSync();

app.use(express.json());
app.use('/posts', posts);
app.use('/users', users);

app.listen(port, () => console.log(`Listening on port ${port}!`));