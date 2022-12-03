const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection(
  `mysql://${process.env.DB_USERNAME}:${process.env.PASSWORD}@:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const connectDB = async () => {
  return connection.connect();
};

module.exports = {connectDB, connection};
