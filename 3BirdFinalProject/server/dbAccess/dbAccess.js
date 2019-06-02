'use strict';
const mysql = require('promise-mysql');
const dbProperties = require('./dbProperties.json');
const util = require('util');

let connection;
mysql.createConnection(dbProperties)
.then(conn => {connection  = conn;});

function queryDB(queryStr, values){
    console.log(`Running Query: ${queryStr}` + (!values ? '' : ` with values ${util.inspect(values)}`));
    return connection.query(queryStr, values);
};

function closeConnection(){
    return connection.end();
};

module.exports = {queryDB, closeConnection};