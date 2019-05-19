'use strict';
const mysql = require('mysql');
const dbProperties = require('./dbProperties.json');
const util = require('util');

const connection = mysql.createConnection(dbProperties); 
connection.connect(err => {
    if (err) throw err;
    console.log('mysql: connected as id ' + connection.threadId);
});

function queryDB(queryStr, values, cb){
    console.log(`Running Query: ${queryStr}` + (!values ? '' : ` with values ${util.inspect(values)}`));
    connection.query(queryStr, values, (error, results, fields) => {
        cb(error, results);
    });
};

function closeConnection(cb){
    connection.end(err => cb(err));
};

module.exports = {queryDB, closeConnection};