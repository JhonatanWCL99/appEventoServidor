'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetalleCompra.belongsTo(models.compra,{as:"compra",foreignKey:"compra_id"})
    }
  }
  DetalleCompra.init({
    resolucion: DataTypes.STRING,
    subtotal: DataTypes.DECIMAL,
    compra_id: DataTypes.INTEGER,
    foto_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'detallesCompra',
    modelName: 'DetalleCompra',
  });
  return DetalleCompra;
};