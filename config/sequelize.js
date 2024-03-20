const { Sequelize } = require("sequelize");
const { configDB } = require("./config");
const { setupModels } = require("../db/models");

const options = {
  dialect: "postgres",
  logging: configDB.isProd ? false : true,
};

if (configDB.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(configDB.dbUrl, options);

setupModels(sequelize);

module.exports = { sequelize };
