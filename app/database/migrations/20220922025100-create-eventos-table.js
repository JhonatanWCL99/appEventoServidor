'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('eventos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha_evento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hora_evento: {
        type: Sequelize.TIME,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.CHAR,
        allowNull: false
      },
      restriccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      organizador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "organizadores",
          key: "id"
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('eventos');

  }
};
