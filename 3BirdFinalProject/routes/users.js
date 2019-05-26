'use strict';
const express = require('express');
const {getUser, createUser, getAllUserRents} = require('../dbAccess/usersDao');
const router = express.Router();
const idRouter = express.Router({mergeParams: true});

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

router.use('/:id', idRouter);

router.param('id', (req, res, next, userId) => {
    getUser(userId)
    .then(user => {
        if (user){
            req.user = user;
            next();
        }else{
            // todo alert to report table
            throw "Error: user not found";
        }
    }).catch(next);
});

idRouter.get('/', (req, res) => res.send(req.user));

idRouter.get('/history', (req, res, next) => {
    getAllUserRents(req.user.id)
        .then((rents) => {
            res.send(rents);
        }).catch(next);
});

module.exports = router;