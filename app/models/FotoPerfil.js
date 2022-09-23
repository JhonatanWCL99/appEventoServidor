'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FotoPerfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FotoPerfil.belongsTo(models.Invitado,{as:"invitado",foreignKey:"invitado_id"})
    }
  }
  FotoPerfil.init({
    imgUrl: DataTypes.STRING,
    invitado_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'fotosPerfil',
    modelName: 'FotoPerfil',
  });
  return FotoPerfil;
};