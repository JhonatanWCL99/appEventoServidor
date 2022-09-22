'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizador.belongsTo(models.Persona, { as:"persona",foreignKey:"persona_id" })
      Organizador.hasMany(models.Evento, { as:"eventos",foreignKey:"organizador_id" })
    }
  }
  Organizador.init({
    razonSocial: DataTypes.STRING,
    persona_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'organizadores',
    modelName: 'Organizador',
  });
  return Organizador;
};