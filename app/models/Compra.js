'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
      Compra.belongsTo(models.Invitado,{as:"invitado",foreignKey:"invitado_id"})
      Compra.hasMany(models.DetalleCompra,{as:"detallesCompra",foreignKey:"compra_id"})
    }
  }
  Compra.init({

    fecha_compra: DataTypes.DATE,
    hora_compra: DataTypes.TIME,
    total_compra: DataTypes.DECIMAL,
    tipo_compra: DataTypes.STRING,
    invitado_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'compras',
    modelName: 'Compra',
  });
  return Compra;
};