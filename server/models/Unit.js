const Sequelize     = require('sequelize');
const db            = require('../config/database');

const Unit = db.define('units', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    att: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    def: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    booty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    speed: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Unit;