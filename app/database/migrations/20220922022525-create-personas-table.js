'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('personas', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      nombre:{
        type:Sequelize.STRING,
        allowNull:false
      },
      apellido:{
        type:Sequelize.STRING,
        allowNull:false
      },
      direccion:{
        type:Sequelize.STRING,
        allowNull:false
      },
      ci:{
        type:Sequelize.STRING,
        allowNull:false
      },
      telefono:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('personas');

  }
};
