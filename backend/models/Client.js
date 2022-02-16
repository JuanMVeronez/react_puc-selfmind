const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Client extends Model{}

Client.init({
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
    foco: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'client'
})

module.exports = Client;