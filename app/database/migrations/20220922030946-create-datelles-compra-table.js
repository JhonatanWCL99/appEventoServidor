'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('detallesCompra', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      resolucion:{
        type: Sequelize.STRING,
        allowNull: false
      },
      subtotal:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      compra_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "compras",
          key: "id"
        },
      },
      foto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "fotos",
          key: "id"
        },
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('detallesCompra');

  }
};
