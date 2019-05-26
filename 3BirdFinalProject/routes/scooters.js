'use strict';
const express = require('express');
const {getScooter, createScooter, updateScooterPosition} = require('../dbAccess/scootersDao');
const {getUser} = require('../dbAccess/usersDao');
const {getActiveRentByScooterAndUser, startRent, isUserRentActive, isScooterRented, getAllScooterRents, endRent} = require('../dbAccess/rentsDao');
const router = express.Router();
const idRouter = express.Router({mergeParams: true});


router.post('/', (req, res, next) => {
    createScooter()
    .then(scooterId => res.send({scooterId}))
    .catch(next)
});

router.use('/:id', idRouter);

router.param('id', (req, res, next, scooterId) => {
    getScooter(scooterId)
    .then(scooter => {
        if (scooter){
            req.scooter = scooter;
            next();
        }else{
            // todo alert to report table
            throw "Error: scooter not found";
        }
    }).catch(next);
});

idRouter.get('/', (req, res, next) => res.send(req.scooter));

idRouter.get('/history', (req, res, next) => {
    getAllScooterRents(req.scooter.id)
        .then((rents) => {
            res.send(rents);
        }).catch(next);
});

idRouter.post('/rent', (req, res, next) => {
    const {userId} = req.body;
    const {scooter} = req;
    Promise.all([getUser(userId), isUserRentActive(userId), isScooterRented(scooter.id)])
        .then(([user, userHasActiveRent, scooterRented]) => {
            if(!user){
                // todo alert to report table
                throw "Error: User doesn't exist";
            }
            if(scooterRented) throw "Error: Scooter already in use";
            if(!scooter.operational) throw "Error: Scooter not operational";
            if(scooter.battery < 20) throw "Error: Scooter battery is less than 20 percent";
            if(userHasActiveRent) throw "Error: User has an active ride already";
            
            return startRent(userId, scooter.id, scooter.lat, scooter.long);
        }).then((rentId) => {
            return res.send({rentId});
        }).catch(next);
});

idRouter.patch('/position', (req, res, next) => {
    //todo later add total_km update for every position maybe return it aswell
    const {lat, long, battery} = req.body;
    updateScooterPosition(req.scooter.id, lat, long, battery)
        .then(() => {
            res.sendStatus(204);
        }).catch(next);
});

idRouter.post('/release', (req, res, next) => {
    const {userId} = req.body;
    const {scooter} = req;
    getActiveRentByScooterAndUser(scooter.id, userId)
    .then((rent) => {
        if(!rent) throw "Error: No Active rent for this user and scooter"
        return endRent(rent.id, scooter.lat, scooter.long);
    }).then(() => {
        res.sendStatus(200);
    }).catch(next);
});

module.exports = router;