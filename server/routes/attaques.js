const express = require('express');

const Kingdom = require('../models/Kingdom');
const Barrack = require('../models/Barrack');

const Router = express.Router();

Router.post("/:userId", (req, res, next) => {
    console.log(req.body);

    const userId = req.params.userId;
    let unitsOff = req.body.unitsOff;
    const units = req.body.units;
    let unitsDef = [];

    // Get unit from def
    // Start by getting all the kingdoms => get all the barracks of all the kingdoms
    Kingdom.findAll({
        attributes: ['id'],
        where: {
            userId: userId,
        }
    })
    .then(async kingdoms => {
        kingdomsId = [];
        for (const id in kingdoms) {
            kingdomsId.push(kingdoms[id].id);
        }
        Barrack.findAll({
            where: {
                kingdomId: kingdomsId
            },
            raw : true
        })
        .then(async barracks => {
            for (const unitId in units) {
                let found = false;
                for (const id in barracks) {
                    if (units[unitId].id == barracks[id].unitId) {
                        unitsDef.push({id: parseInt(unitId), nb: barracks[id].nb});
                        found = true;
                    }
                }

                if (!found) {
                    unitsDef.push({id: parseInt(unitId), nb: 0});
                }
            }

            // on gére le combat. D'abord, on calcule l'off, puis la def, et ensuite on avance entre les unites
            off = [];
            for (const id in unitsOff) {
                // console.log(unitsOff[id].nb, units[id].att)
                off.push(unitsOff[id].nb*units[id].off)
            }

            def = [];
            for (const id in unitsDef) {
                // console.log(unitsDef[id].nb, units[id].def)
                def.push(unitsDef[id].nb*units[id].def)
            }

            for (id in off) {
                if (off[id] != 0) {
                    for (idDef in def) {
                        if (def[idDef] != 0) {
                            if ((def[idDef] - off[id]) < 0) { // cas il ne reste plus de def
                                off[id] = off[id]-def[idDef];
                                def[idDef] = 0;
                            } else { // cas il ne reste plus de def
                                def[idDef] = def[idDef]-off[id];
                                off[id] = 0;
                            }
                        }
                    }
                }
            }

            // Résultat de l'attaque
            result = "win";
            for (idDef in def) {
                if (def[idDef] != 0) {
                    result = "loose";
                }
            }

            // mise à jour
            for (idOff in unitsOff) {
                if (off[idOff] == 0) {
                    unitsOff[idOff].dead = unitsOff[idOff].nb;
                    unitsOff[idOff].survey = 0;
                } else {
                    unitsOff[idOff].survey = Math.trunc((off[idOff]/units[idOff].off))
                    unitsOff[idOff].dead = unitsOff[idOff].nb - unitsOff[idOff].survey;
                }

                Barrack.findOne({ where: { id: unitsOff[idOff].id } })
                .then(async barrack => {
                    if (barrack) {
                        barrack.update({
                            nb: unitsOff[idDef].survey
                        })
                        .then(async barrack => {
                            console.log(barrack);
                        })
                        .catch(error => {
                            next(error)
                        });
                    }
                })
                .catch(error => {
                    next(error)
                });
            }

            for (idDef in unitsDef) {
                if (def[idDef] == 0) {
                    unitsDef[idDef].dead = unitsDef[idDef].nb;
                    unitsDef[idDef].survey = 0;
                } else {
                    unitsDef[idDef].survey = Math.trunc((def[idDef]/units[idDef].def))
                    unitsDef[idDef].dead = unitsDef[idDef].nb - unitsDef[idDef].survey;
                }
            }

            // Renvoie au joueur
            // console.log(result, unitsOff, unitsDef);
            res.status(200).json({result, unitsOff, unitsDef});
        })
        .catch(error => {
            next(error)
        });
    })
    .catch(error => {
        next(error)
    });
});

module.exports = Router;