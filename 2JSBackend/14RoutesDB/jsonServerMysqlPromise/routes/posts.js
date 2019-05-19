'use strict';
const express = require('express');
const {getPost, getPosts} = require('../dbAccess/postsDao')
const router = express.Router();

router.get('/', (req, res, next) => {
    getPosts().then(posts => res.send(posts))
    .catch(next);
});

router.get('/:id', (req, res, next) =>{
    getPost(req.params.id)
    .then((post) => {
        if(post) res.send(post)
        else res.sendStatus(404);
    }).catch(next);
});

module.exports = router;