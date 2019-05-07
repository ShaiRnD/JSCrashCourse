'use strict';
const express = require('express');
const {getUsers,getUser,createUser,getUserPosts,createPost} = require('../dbAccess/usersDao');
const router = express.Router();

router.route('/')
    .get((req, res, next) => 
        getUsers((error, users) => {
            if (error) return next(error);
            res.send(users);
        })
    )
    .post((req, res, next) => 
        createUser(req.body.name, (error, result) => {
            if (error) return next(error);
            res.send({id: result.insertId});
        })
    );

router.get('/:id', (req, res, next) => 
    getUser(req.params.id, (error, user) => {
        if (error) return next(error);
        if (user) res.send(user)
        else res.sendStatus(404);
    })
);

router.route('/:id/posts')
    .get((req, res, next) => 
        getUserPosts(req.params.id, (error, posts) => {
            if (error) return next(error);
            res.send(posts);
        })
    )
    .post((req, res, next) => 
        createPost(req.params.id, req.body.text, (error, result) => {
            if (error) return next(error);
            res.send({id: result.insertId});
        })
    );

module.exports = router;