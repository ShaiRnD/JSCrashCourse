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

//todo put in rents
function getAllUserRents(userId){
    return queryDB(`SELECT * FROM rent WHERE user_id = ?;`, userId)
    .then((results) => {
        return results;
    });
};

function changeUserBalance(id, changeBy){
    return queryDB(`SELECT * FROM user WHERE ?;`, {id})
    .then(([user]) => {
        return user.balance;
    }).then((balance) => {
        return queryDB(`UPDATE user SET ? WHERE ?`, [{balance: (balance + changeBy)}, {id}]);
    })
};

module.exports = {
    getUser,
    createUser,
    getAllUserRents,
    changeUserBalance
};