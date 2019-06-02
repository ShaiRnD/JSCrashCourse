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

function updateScooterPosition(scooter, newLat, newLong, battery){
    const distance = Math.sqrt((scooter.lat - newLat) ** 2 + (scooter.long - newLong) ** 2);
    const newTotalKm = scooter.total_km - distance;
    const valuesToUpdate = {lat: newLat, long: newLong, battery, total_km: newTotalKm};
    return queryDB(`UPDATE scooter set ? WHERE ?;`, [valuesToUpdate, {id: scooter.id}]);
};

function makeScooterOperational(id){
    const valuesToUpdate = {operational: true, total_km: 1000};
    return queryDB(`UPDATE scooter set ? WHERE ?;`, [valuesToUpdate, {id}]);
};

function makeScooterNotOperational(id){
    const valuesToUpdate = {operational: false};
    return queryDB(`UPDATE scooter set ? WHERE ?;`, [valuesToUpdate, {id}]);
};

function updateBatteryStatus(id, battery){
    const valuesToUpdate = {battery};
    return queryDB(`UPDATE scooter set ? WHERE ?;`, [valuesToUpdate, {id}]);
}

module.exports = {
    getScooter,
    createScooter,
    updateScooterPosition,
    makeScooterOperational,
    makeScooterNotOperational,
    updateBatteryStatus 
};