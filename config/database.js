
require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: true
  },
  // Configuracion de Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations"
}