'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galeria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Galeria.belongsTo(models.Evento,{as:"evento",foreignKey:"evento_id"})
      Galeria.hasMany(models.Foto,{as:"fotos",foreignKey:"galeria_id"})
    }
  }
  Galeria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantidad_fotos: DataTypes.INTEGER,
    evento_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'galerias',
    modelName: 'Galeria',
  });
  return Galeria;
};