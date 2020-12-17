const express = require('express');

const Barrack = require('../models/Barrack');
const Unit = require('../models/Unit');

const Router = express.Router();

Router.get("/:kingdomId", (req, res, next) => {
    const kingdomId = req.params.kingdomId;
    Unit.findAll({
        include: {
            model: Barrack, as: 'barracks',
            where: {
                kingdomId: kingdomId
            },
            required: false,
            left: true
        }
    })
    .then(async units => {
        res.status(200).json(units);
    })
    .catch(error => {
        next(error)
    });
});

Router.post("/:kingdomId/recru", (req, res, next) => {
    const kingdomId = req.params.kingdomId;
    units = req.body.units;

    res.status(200).json(units);
})

module.exports = Router;