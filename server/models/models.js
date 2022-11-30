// database-related methods here
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "asgmt2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});