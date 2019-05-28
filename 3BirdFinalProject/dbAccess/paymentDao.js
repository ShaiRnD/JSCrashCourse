'use strict';
const {queryDB} = require('./dbAccess');

function createPayment(user_id, sum){
    const newValues = {user_id, sum, date: new Date()};
    return queryDB(`INSERT INTO payment set ?;`, newValues)
        .then((results) => {
            return results.insertId;
        });
};

module.exports = {
    createPayment
};