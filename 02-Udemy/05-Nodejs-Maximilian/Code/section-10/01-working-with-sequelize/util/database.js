const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "node-course",
  "root",
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: "localhost" }
);

module.exports = sequelize
