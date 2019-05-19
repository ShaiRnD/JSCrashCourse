'use strict';
const express = require('express');
const {readDBToJson} = require('../dbAccess')
const router = express.Router();

router.get('/', (req, res) => {
    readDBToJson(db => res.send(db.posts));
});

router.get('/:id', (req, res) => {
    readDBToJson(db => {
        const post = db.posts[req.params.id];
        if(post) res.send(post)
        else res.sendStatus(404);
    });
});

module.exports = router;