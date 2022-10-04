'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Persona.hasOne(models.Organizador, { as: "organizador", foreignKey: "persona_id" });
      Persona.hasOne(models.Fotografo, { as: "fotografo", foreignKey: "persona_id" });
      Persona.hasOne(models.Invitado, { as: "invitado", foreignKey: "persona_id" });
      Persona.hasOne(models.User, { as: "user", foreignKey: "persona_id" });
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ci: DataTypes.STRING,
    telefono: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'personas',
    modelName: 'Persona',
  });
  return Persona;
};