'use strict';
const express = require('express');
const {getScooter, createScooter, updateScooterPosition, makeScooterOperational, makeScooterNotOperational} = require('../dbAccess/scootersDao');
const {getUser} = require('../dbAccess/usersDao');
const {getActiveRentByScooterAndUser, startRent, isUserRentActive, isScooterRented, getAllScooterRents, endRent} = require('../dbAccess/rentsDao');
const {createTreatment} = require('../dbAccess/treatmentDao')
const {createReport} = require('../dbAccess/reportsDao')
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
            const {battery, lat, long}  = req.body;
            return createReport(scooterId, battery, lat, long, new Date(), `Command: ${req.originalUrl}`)
            .then(() => {
                req.scooter = scooter;
                next();
            });
        }else{
            return createReport(scooterId, null, null, null, new Date(), `Command: ${req.originalUrl}, scooter_Id doesn't exist!`)
            .then(() => {
                throw "Error: scooter not found";
            });
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
    // maybe return total_km
    const {lat, long, battery} = req.body;
    updateScooterPosition(req.scooter, lat, long, battery)
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
        return endRent(rent, scooter.lat, scooter.long);
    }).then(() => {
        return getScooter(scooter.id);
    }).then(scooter => {
        if(scooter.total_km <= 0) return makeScooterNotOperational(scooter.id)
        return;
    }).then(() => {
        res.sendStatus(200);
    }).catch(next);
});

idRouter.post('/maintenance', (req, res, next) => {
    const {date, lat, long} = req.body;
    Promise.all([createTreatment(req.scooter.id, new Date(date), lat, long), makeScooterOperational(req.scooter.id)])
        .then(() => {
            res.sendStatus(204);
        }).catch(next);
});



module.exports = router;