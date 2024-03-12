const { configDB } = require("../config/config");

const USER = encodeURIComponent(configDB.dbUser);
const PASSWORD = encodeURIComponent(configDB.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${configDB.dbHost}:${configDB.dbPort}/${configDB.dbName}`;

module.exports = {
  development: {
    url: URL,
    dialect: "postgres",
  },
  production: {
    url: URL,
    dialect: "postgres",
  },
};
