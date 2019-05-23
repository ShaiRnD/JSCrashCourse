'use strict';
const {queryDB} = require('./dbAccess');

function getScooter(scooterId){
    return queryDB(`SELECT * FROM scooter WHERE id = ?;`, scooterId)
        .then((results) => {
            return results[0];
        });
};

function createScooter(){
    const newScooterValues = {total_km: 1000, operational: true, lat: 0, long: 0, battery: 100};
    return queryDB(`INSERT INTO scooter set ?;`, newScooterValues)
        .then((results) => {
            return results.insertId;
        });
};

module.exports = {
    getScooter,
    createScooter,
};