'use strict';
const birdHTTPClient = require('./birdHTTPClient');

function register(){
    return birdHTTPClient.register()
    .then(({scooterId}) => {
        //todo save to a config file
        console.log(`New bird scooter registered (scooterID: ${scooterId})\n`);
        return scooterId;
    })
};

function rent(scooterId, userId){
    if(!scooterId){
        throw Error("Scooter not registered");
    }
    return birdHTTPClient.rent(scooterId, userId)
        .then(() => {
            console.log(`Bird was rented by user ${userId}\n`);
        });
};

const SPEED = 10; // km/h
async function ride(scooterId, lat, long){
    let lat_now = 0, long_now = 0, battery = 100, totalKm = 1000;
    const distance = Math.sqrt((lat ** 2) + (long ** 2));
    const minutesOfRide =  (distance / SPEED) * 60;
    const deltaDistance = distance / minutesOfRide;
    for(let minute = 0; minute < minutesOfRide; minute++){
        console.log(`location ${lat_now}:${long_now} battery:${battery} totalKm:${totalKm}`);
        lat_now += lat / minutesOfRide;
        long_now += long / minutesOfRide;
        battery -= deltaDistance * 3;
        totalKm -= deltaDistance;
        await birdHTTPClient.position(scooterId, lat_now, long_now, battery);
    }
    console.log(`location ${lat_now}:${long_now} battery:${battery} totalKm:${totalKm}`);
}

function release(scooterId, userId){
    if(!scooterId){
        throw Error("Scooter not registered");
    }
    return birdHTTPClient.release(scooterId, userId)
        .then(() => {
            console.log(`Bird was released\n`);
        });
};

function charge(scooterId, userId){
    console.log(`Scooter is being charged by user ${userId}`);
    //todo
}


module.exports = {
    register,
    rent,
    ride,
    release,
    charge
};