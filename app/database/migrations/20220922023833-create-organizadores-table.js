'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('organizadores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      razonSocial: {
        type: Sequelize.STRING,
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
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('organizadores');

  }
};
