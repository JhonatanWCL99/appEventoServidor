'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('invitados', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      persona_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "personas",
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

    await queryInterface.dropTable('invitados');

  }
};
