'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('compras', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha_compra:{
        type: Sequelize.DATE,
        allowNull: false
      },
      hora_compra:{
        type: Sequelize.TIME,
        allowNull: false
      },
      total_compra:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      tipo_compra:{
        type: Sequelize.STRING,
        allowNull: false
      },
      invitado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "invitados",
          key: "id"
        },
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('compras');

  }
};
