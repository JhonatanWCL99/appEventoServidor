'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invitado.hasMany(models.FotoPerfil,{as:"fotosperfil", foreignKey:"invitado_id"})
    }
  }
  Invitado.init({
    persona_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'invitados',
    modelName: 'Invitado',
  });
  return Invitado;
};