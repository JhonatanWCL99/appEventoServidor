'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Foto.belongsTo(models.Galeria,{as:"galeria",foreignKey:"galeria_id"})
      Foto.belongsTo(models.Fotografo,{as:"fotografo",foreignKey:"fotografo_id"})
    }
  }
  Foto.init({
    urlImg: DataTypes.STRING,
    costoImg: DataTypes.DECIMAL,
    galeria_id:DataTypes.INTEGER,
    fotografo_id:DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'fotos',
    modelName: 'Foto',
  });
  return Foto;
};