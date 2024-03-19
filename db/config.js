const { configDB } = require("../config/config");

module.exports = {
  development: {
    url: configDB.dbUrl,
    dialect: "postgres",
  },
  production: {
    url: configDB.dbUrl,
    dialect: "postgres",
  },
};
