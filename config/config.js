const { config } = require("dotenv");
config();
const configDB = {
  env: process.env.NODE_ENV || "dev",
  isProduction: process.env.NODE_ENV === "production",
  port: process.env.PORT,
  dbName: process.env.PG_DATABASE,
  dbUser: process.env.PG_USER,
  dbPassword: process.env.PG_PASSWORD,
  dbHost: process.env.PG_HOST,
  dbPort: process.env.PG_PORT,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { configDB };
