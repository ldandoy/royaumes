const Sequelize     = require('sequelize');
const db            = require('../config/database');

const Barracks = db.define('barracks', {
    unitId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kingdomId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nb: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Barracks;