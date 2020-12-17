const Sequelize     = require('sequelize');
const db            = require('../config/database');

const Ressource = db.define('ressources', {
    wood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    or: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pop: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kingdomId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Ressource;