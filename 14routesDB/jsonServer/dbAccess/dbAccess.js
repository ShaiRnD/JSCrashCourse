'use strict';
const mysql = require('mysql');
const dbProperties = require('./dbProperties.json');

const connection = mysql.createConnection(dbProperties); 
connection.connect(err => {
    if (err) throw err;
    console.log('mysql: connected as id ' + connection.threadId);
});

function queryDB(queryStr, cb){
    console.log(`Running Query: ${queryStr}`);
    connection.query(queryStr, function (error, results, fields) {
        cb(error, results);
    });
}

module.exports = queryDB;