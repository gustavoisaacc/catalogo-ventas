const { config } = require("dotenv");
config();
const configDB = {
  env: process.env.NODE_ENV || "dev",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { configDB };
