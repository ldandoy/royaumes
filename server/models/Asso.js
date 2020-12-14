const User                  = require('./User');
const KingDom               = require('./KingDom');
const Barrack               = require('./Barrack');
const Unit                  = require('./Unit');

User.hasMany(KingDom, {
    as: 'kingdoms',
    foreignKey: 'userId'
})

KingDom.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId'
})

Barrack.belongsTo(Unit, {
    as: 'unit',
    foreignKey: 'unitId'
})