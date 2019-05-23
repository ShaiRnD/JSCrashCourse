'use strict';
const {queryDB} = require('./dbAccess');

function getUser(userId){
    return queryDB(`SELECT * FROM user WHERE id = ?;`, userId)
        .then((results) => {
            return results[0];
        });
};

function createUser({name, email, address, creditCardNumber}){
    return queryDB(`INSERT INTO user SET ?;`, {name, email, address, credit_card_number: creditCardNumber, balance : 0, signUp_date: new Date()})
        .then((results) => {
            return results.insertId;
        });
};

module.exports = {
    getUser,
    createUser,
};