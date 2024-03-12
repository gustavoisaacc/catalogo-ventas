const { config } = require("dotenv");
config();
const configDB = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

module.exports = { configDB };
