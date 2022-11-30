const mysql = require("mysql");

const connection = mysql.createConnection(
  "mysql://root:1234@localhost:3306/assignment2"
);

const connectDB = async () => {
  return connection.connect();
};

module.exports = {connectDB, connection};
