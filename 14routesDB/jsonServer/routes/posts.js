'use strict';
const express = require('express');
const {getPost, getPosts} = require('../dbAccess/postsDao')
const router = express.Router();

router.get('/', (req, res, next) => 
    getPosts((error, posts) => {
        if (error) return next(error);
        res.send(posts);
    })
);

router.get('/:id', (req, res, next) =>
    getPost(req.params.id, (error, post) => {
        if (error) return next(error);
        if(post) res.send(post)
        else res.sendStatus(404);
    })
);

module.exports = router;