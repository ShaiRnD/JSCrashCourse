'use strict';
const express = require('express');
const {getUser,createUser} = require('../dbAccess/usersDao');
const router = express.Router();

router.post('/', (req, res, next) => {
    createUser(req.body)
    .then(userId => res.send({userId}))
    .catch((err) => {
        if(err.code === "ER_DUP_ENTRY"){
            return res.status(400).send("Error: Email already in use");
        }
        next(err);
    });
});

router.get('/:id', (req, res, next) => {
    getUser(req.params.id)
    .then(user => {
        if (user) res.send(user)
        else{
            // todo alert to report table
            res.status(404).send("Error: user not found");
        } 
    }).catch(next);
});

//todo when rent is done
router.get('/:id/history', (req, res, next) => {

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