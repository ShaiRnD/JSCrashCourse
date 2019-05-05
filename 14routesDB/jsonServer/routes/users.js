'use strict';
const express = require('express');
const {readDBToJson, writeJsonToDB} = require('../dbAccess');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        readDBToJson(db => res.send(db.users));
    })
    .post((req, res) => {
        readDBToJson(db => {
            const newIndex = db.users.length;
            const newUser = {
                id: newIndex,
                name: req.body.name
            };
            db.users.push(newUser);
            writeJsonToDB(db, () => {
                res.send(db.users[newIndex]);
            });
        });
    });

router.get('/:id', (req, res) => {
    readDBToJson(db => {
        const user = db.users[req.params.id];
        if(user) res.send(user)
        else res.sendStatus(404);
    });
});

router.route('/:id/posts')
    .get((req, res) => {
        readDBToJson(db => {
            const postsForUser = db.posts.filter(post => post.userId === req.params.id);
            res.send(postsForUser);
        });
    })
    .post((req, res) => {
        readDBToJson(db => {
            const newIndex = db.posts.length;
            const newPost = {
                id: newIndex,
                userId: req.params.id,
                text: req.body.text
            };
            db.posts.push(newPost);
            writeJsonToDB(db, () => {
                res.send(db.posts[newIndex]);
            });
        });
    });

module.exports = router;