'use strict';
const {queryDB} = require('./dbAccess');

function getPosts(cb){
    queryDB('SELECT * FROM posts;', null, cb);
};

function getPost(id, cb){
    queryDB(`SELECT * FROM posts WHERE id = ?;`, id, cb);
};

module.exports = {getPosts, getPost};