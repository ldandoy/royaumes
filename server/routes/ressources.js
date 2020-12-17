const express = require('express');
const Ressource = require('../models/Ressource');

const Router = express.Router();

Router.get("/:kingdomId", (req, res, next) => {
    const kingdomId = req.params.kingdomId;

    Ressource.findOne({
        where: {
            kingdomId: kingdomId
        }
    })
    .then(async ressources => {
        res.status(200).json(ressources);
    })
    .catch(error => {
        next(error)
    });
});

module.exports = Router;