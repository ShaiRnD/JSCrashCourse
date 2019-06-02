'use strict';
const {queryDB} = require('./dbAccess');

function createReport(scooter_id, battery, lat, long, date, command){
    const newRentValues = {scooter_id, battery, lat, long, date, command};
    return queryDB(`INSERT INTO report set ?;`, newRentValues)
        .then((results) => {
            return results.insertId;
        });
};

module.exports = {
    createReport
};