const Sequelize     = require('sequelize');
const db            = require('../config/database');

const Unit = db.define('units', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    off: {
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
    wood: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    or: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pop: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Unit;