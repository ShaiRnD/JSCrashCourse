'use strict';
const express = require('express');
const {getScooter,createScooter} = require('../dbAccess/scootersDao');
const {getUser} = require('../dbAccess/usersDao');
const {startRent, isUserRentActive, isScooterRented, getAllRents} = require('../dbAccess/rentsDao');
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
    getAllRents(req.scooter.id)
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

idRouter.post('/position', (req, res, next) => {

    // getUser(req.params.id)
    // .then(user => {
    //     if (user) res.send(user)
    //     else{
    //         // todo alert to report table
    //         res.status(404).send("Error: user not found");
    //     } 
    // }).catch(next);
});

idRouter.post('/release', (req, res, next) => {

    // getUser(req.params.id)
    // .then(user => {
    //     if (user) res.send(user)
    //     else{
    //         // todo alert to report table
    //         res.status(404).send("Error: user not found");
    //     } 
    // }).catch(next);
});

module.exports = router;