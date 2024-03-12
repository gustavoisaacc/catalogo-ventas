const { Sequelize } = require("sequelize");
const { configDB } = require("./config");
const { setupModels } = require("../db/models");

const USER = encodeURIComponent(configDB.dbUser);
const PASSWORD = encodeURIComponent(configDB.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${configDB.dbHost}:${configDB.dbPort}/${configDB.dbName}`;

const sequelize = new Sequelize(URL, {
  dialect: "postgres",
  logging: true, // Set to console.log to see the raw SQL queries
});

setupModels(sequelize);

module.exports = { sequelize };
