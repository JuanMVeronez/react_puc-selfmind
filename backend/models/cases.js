const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Cases extends Model{}

Cases.init({
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Cases'
})

module.exports = Cases;