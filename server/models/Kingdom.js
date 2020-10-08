const Sequelize     = require('sequelize');
const db            = require('../config/database');

const KingDom = db.define('kingdoms', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = KingDom;