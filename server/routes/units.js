const express = require('express');
const Unit = require('../models/Unit');

const Router = express.Router();

Router.get("/", (req, res, next) => {
    Unit.findAll()
    .then(async units => {
        res.status(200).json(units);
    })
    .catch(error => {
        next(error)
    });
});

module.exports = Router;