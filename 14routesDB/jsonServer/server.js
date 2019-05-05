'use strict';
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