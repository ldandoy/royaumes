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
        console.log(barrack)
        res.status(200).json(barrack);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({'error': err});
    });
});

module.exports = Router;