'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotografo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fotografo.belongsTo(models.Persona, { as: "persona", foreignKey: "persona_id" })
      Fotografo.belongsToMany(models.Evento, { through: "evento_fotografo" })
    }
  }
  Fotografo.init({
    persona_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'fotografos',
    modelName: 'Fotografo',
  });
  return Fotografo;
};