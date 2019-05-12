'use strict';
const {queryDB} = require('./dbAccess');

function getUsers(cb){
    queryDB('SELECT * FROM users;', null, cb);
};

function getUser(userId, cb){
    queryDB(`SELECT * FROM users WHERE id = ?;`, userId, cb);
};

function createUser(name, cb){
    queryDB(`INSERT INTO users SET ?;`, {name}, cb);
};

function getUserPosts(userId, cb){
    queryDB(`SELECT * FROM posts WHERE userId = ?;`, userId, cb);
};

function createPost(userId, text, cb){
    const post = {userId, text};
    queryDB(`INSERT INTO posts SET ?;`,post, cb);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserPosts,
    createPost
};