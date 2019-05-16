'use strict';
const {queryDB} = require('./dbAccess');

function getPosts(){
    return queryDB('SELECT * FROM posts;', null)
};

function getPost(id){
    return queryDB(`SELECT * FROM posts WHERE id = ?;`, id);
};

module.exports = {getPosts, getPost};