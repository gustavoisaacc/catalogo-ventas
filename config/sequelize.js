const { Sequelize } = require("sequelize");
const { configDB } = require("./config");
const { setupModels } = require("../db/models");

let URL;

if (configDB.isProduction) {
  URL = configDB.dbUrl;
} else {
  const USER = encodeURIComponent(configDB.dbUser);
  const PASSWORD = encodeURIComponent(configDB.dbPassword);
  URL = `postgres://${USER}:${PASSWORD}@${configDB.dbHost}:${configDB.dbPort}/${configDB.dbName}`;
}

const opts = {
  dialect: "postgres",
  logging: configDB.isProduction ? false : true,
};

const sequelize = new Sequelize(URL, opts);

setupModels(sequelize);

module.exports = { sequelize };
