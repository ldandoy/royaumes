const express = require('express');
const Kingdom = require('../models/Kingdom');

const Router = express.Router();

Router.get("/:userId/:kingdomId", (req, res, next) => {
    const userId = req.params.userId;
    const kingdomId = req.params.kingdomId;
    
    Kingdom.findOne({
        where: {
            id: kingdomId,
            userId: userId,
        }
    })
        .then(async  kingdom => {
            res.status(200).json(kingdom);
        })
        .catch(error => {
            next(error)
        });
});

Router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    
    Kingdom.findAll({
        where: {
            userId: userId,
        }
    })
        .then(async  kingdoms => {
            res.status(200).json(kingdoms);
        })
        .catch(error => {
            next(error)
        });
});

module.exports = Router;