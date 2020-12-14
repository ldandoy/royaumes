const express = require('express');
const Barrack = require('../models/Barrack');
const Unit = require('../models/Unit');

const Router = express.Router();

Router.get("/:kingdomId", (req, res) => {
    const kingdomId = req.params.kingdomId;

    Barrack.findAll({
        include: {model: Unit, as: 'unit'},
        where: {
            kingdomId: kingdomId
        }
    })
    .then(async barrack => {
        res.status(200).json(barrack);
    })
    .catch(error => {
        next(error)
    });
});

module.exports = Router;