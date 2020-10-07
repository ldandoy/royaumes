const User                  = require('./User');

/**
const Pet                   = require('./Pet');
const PetCategory           = require('./PetCategory');
const Sector                = require('./Sector');
const Place                 = require('./Place');
const PlaceCategory         = require('./PlaceCategory');

// FK: userId
User.hasMany(Pet, {
    as: 'pets',
    foreignKey: 'userId'
})

Pet.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId'
})

User.belongsToMany(Track,{
     through: 'user_track',
     foreignKey: userId
     timestamps: false
 })
 */