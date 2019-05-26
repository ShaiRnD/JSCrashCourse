'use strict';
const {queryDB} = require('./dbAccess');

function getRent(rentId){
    return queryDB(`SELECT * FROM rent WHERE id = ?;`, rentId)
        .then((results) => {
            return results[0];
        });
};

function getActiveRentByScooterAndUser(scooterId, userId){
    return queryDB(`SELECT * FROM rent WHERE scooter_id = ? AND user_id = ? AND end_date IS NULL;`, [scooterId, userId])
        .then((results) => {
            return results[0];
        });
};

function startRent(userId, scooterId, startLat, startLong){
    const newRentValues = {user_id: userId, scooter_id: scooterId, start_date: new Date(), start_lat: startLat, start_long: startLong};
    return queryDB(`INSERT INTO rent set ?;`, newRentValues)
        .then((results) => {
            return results.insertId;
        });
};

function isUserRentActive(userId){
    return queryDB(`SELECT EXISTS(SELECT 1 FROM rent WHERE user_id = ? AND end_date IS NULL) AS answer;`, userId)
    .then((results) => {
        return results[0].answer;
    });
};

function isScooterRented(scooterId){
    return queryDB(`SELECT EXISTS(SELECT 1 FROM rent WHERE scooter_id = ? AND end_date IS NULL) AS answer;`, scooterId)
    .then((results) => {
        return results[0].answer;
    });
};

function getAllScooterRents(scooterId){
    return queryDB(`SELECT * FROM rent WHERE scooter_id = ?;`, scooterId)
    .then((results) => {
        return results;
    });
};
function endRent(id, scooterLat, scooterLong){
    const endRentValues = { end_lat: scooterLat, end_long: scooterLong, end_date: new Date() };
    return queryDB(`UPDATE rent SET ? WHERE ?;`, [endRentValues, {id}]);
};

module.exports = {
    getRent,
    getActiveRentByScooterAndUser,
    startRent,
    isUserRentActive,
    isScooterRented,
    getAllScooterRents, 
    endRent
};