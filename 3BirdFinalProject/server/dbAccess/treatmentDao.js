'use strict';
const {queryDB} = require('./dbAccess');

function createTreatment(scooterId, date, lat, long){
    const valuesToCreate = {scooter_Id: scooterId, date, lat, long}
    return queryDB(`INSERT INTO treatment SET ?;`, valuesToCreate)
        .then((results) => {
            return results.insertId;
        });
};

module.exports = {
    createTreatment
};