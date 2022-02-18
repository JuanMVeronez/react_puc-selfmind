const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Cases extends Model{}

Cases.init({
    nome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    declaration: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Cases'
})

module.exports = Cases;