'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('fotosPerfil', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      imgUrl:{
        type: Sequelize.STRING,
        allowNull:false
      },
      invitado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "invitados",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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

    await queryInterface.dropTable('fotosPerfil');

  }
};
