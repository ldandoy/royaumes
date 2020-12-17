const express = require('express');
const User = require('../models/User');

const Router = express.Router();

Router.get("/", (req, res, next) => {
    User.findAll({
        attributes: ['id', 'email', 'username', 'level', 'createdAt', 'updatedAt']
    })
        .then(async  users => {
            res.status(200).json(users);
        })
        .catch(err => {
            next(error)
        });
});

module.exports = Router;