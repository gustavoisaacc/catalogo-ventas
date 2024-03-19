const { Sequelize } = require("sequelize");
const { configDB } = require("./config");
const { setupModels } = require("../db/models");

const opts = {
  dialect: "postgres",
  logging: configDB.isProduction ? false : true,
};

const sequelize = new Sequelize(configDB.dbUrl, opts);

setupModels(sequelize);

module.exports = { sequelize };
