'use strict';
const {queryDB} = require('./dbAccess');

function getUsers(){
    return queryDB('SELECT * FROM users;', null);
};

function getUser(userId){
    return queryDB(`SELECT * FROM users WHERE id = ?;`, userId);
};

function createUser(name){
    return queryDB(`INSERT INTO users SET ?;`, {name});
};

function getUserPosts(userId){
    return queryDB(`SELECT * FROM posts WHERE userId = ?;`, userId);
};

function createPost(userId, text){
    const post = {userId, text};
    return queryDB(`INSERT INTO posts SET ?;`,post);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserPosts,
    createPost
};