'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Evento.belongsTo(models.Organizador,{as:"organizador",foreignKey:"organizador_id"})
    }
  }
  Evento.init({
    fecha_evento: DataTypes.DATE,
    hora_evento: DataTypes.TIME,
    direccion: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estado: DataTypes.CHAR,
    restriccion: DataTypes.STRING,
    organizador_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'eventos',
    modelName: 'Evento',
  });
  return Evento;
};