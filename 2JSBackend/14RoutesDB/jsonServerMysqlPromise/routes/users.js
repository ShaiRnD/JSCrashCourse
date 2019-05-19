'use strict';
const express = require('express');
const {getUsers,getUser,createUser,getUserPosts,createPost} = require('../dbAccess/usersDao');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        getUsers()
        .then(users => res.send(users))
        .catch(next);
    })
    .post((req, res, next) => {
        createUser(req.body.name)
        .then(result => res.send({id: result.insertId}))
        .catch(next);
    });

router.get('/:id', (req, res, next) => {
    getUser(req.params.id)
    .then(user => {
        if (user) res.send(user)
        else res.sendStatus(404);
    }).catch(next);
});

router.route('/:id/posts')
    .get((req, res, next) => {
        getUserPosts(req.params.id)
        .then(posts => res.send(posts))
        .catch(next);
    })
    .post((req, res, next) => {
        createPost(req.params.id, req.body.text)
        .then(result => res.send({id: result.insertId}))
        .catch(next);
    });

module.exports = router;