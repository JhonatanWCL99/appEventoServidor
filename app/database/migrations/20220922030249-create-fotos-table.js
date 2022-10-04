'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      urlImagen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      costoImg:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      galeria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "galerias",
          key: "id"
        },
      },
      fotografo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "fotografos",
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

    await queryInterface.dropTable('fotos');

  }
};
