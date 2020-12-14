const express = require('express');
const User = require('../models/User');

const Router = express.Router();

Router.get("/:userId", (req, res, next) => {
    User.findOne({
        where: {
            id: req.params.userId
        },
        attributes: ['id', 'email', 'password', 'username', 'createdAt', 'updatedAt'],
    })
    .then(async user => {
        res.status(200).json(user);
    })
    .catch(error => {
        next(error)
    });
});

module.exports = Router;