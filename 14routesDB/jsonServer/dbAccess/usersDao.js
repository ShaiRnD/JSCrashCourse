'use strict';
const queryDB = require('./dbAccess');

function getUsers(cb){
    queryDB('SELECT * FROM users;', cb);
};

function getUser(userId, cb){
    queryDB(`SELECT * FROM users WHERE id = ${userId};`, cb);
};

function createUser(name, cb){
    queryDB(`INSERT INTO users (name) VALUES('${name}');`, cb);
};

function getUserPosts(userId, cb){
    queryDB(`SELECT * FROM posts WHERE userId = ${userId};`, cb);
};

function createPost(userId, name, cb){
    queryDB(`INSERT INTO posts (userId, text) VALUES (${userId}, '${name}');`, cb);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserPosts,
    createPost
};