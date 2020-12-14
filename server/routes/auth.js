const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Kindom = require('../models/Kingdom');

const Router = express.Router();

Router.post("/register", async(req, res) => {
    // console.log(req.body);
    if (req.body.username && req.body.email && req.body.email2 && req.body.password && req.body.password2 && req.body.username != "" && req.body.email != "" && req.body.email == req.body.email2 && req.body.password != "" && req.body.password == req.body.password2) {
        User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                level: 1
            })
            .then(async user => {
                // Création du token d'authentification
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                }, process.env.JWT_KEY, {
                    expiresIn: "1h"
                })

                // Création de la ville de départ
                Kindom.create({
                    name: "Ville de " + req.body.username,
                    userId: user.id,
                })
                .then(async kingdom => {
                    res.status(200).json({ token });
                })
                .catch(err => {
                    res.status(500).json({ 'error': err });
                });
            })
            .catch(err => {
                res.status(500).json({ 'error': err });
            });
    } else {
        res.status(500).json({ 'error': "Vous n'avez pas rempli tous les champs, ou ils sont mal confirmés" });
    }
});

Router.post("/login", async(req, res) => {
    // console.log(req.body);
    if (req.body.email != "" && req.body.password != "") {
        User.findOne({
                where: {
                    email: req.body.email
                },
                attributes: ['id', 'email', 'password', 'username', 'createdAt', 'updatedAt'],
            })
            .then(async user => {
                if (!user) {
                    res.status(500).json({ 'error': 'Erreur de login ou de mot de passe' });
                } else if (!await user.validPassword(req.body.password)) {
                    res.status(500).json({ 'error': 'Erreur de login ou de mot de passe' });
                } else {
                    const token = jwt.sign({
                        id: user.id,
                        email: user.email,
                    }, process.env.JWT_KEY, {
                        expiresIn: "1h"
                    })
                    res.status(200).json({ token });
                }
            })
            .catch(err => {
                res.status(500).json({ 'error': err });
            });

    } else {
        res.status(500).json({ 'error': "Vous n'avez pas rempli tous les champs" });
    }
});

Router.get("/logout", (req, res) => {
    res.status(200).json('Vous êtes bien déconnecté');
});

module.exports = Router;