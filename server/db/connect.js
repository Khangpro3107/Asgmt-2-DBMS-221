const mysql = require("mysql");

const connection = mysql.createConnection("mysql://root:1234@localhost:3306/assignment2");

const connectDB = async ()=>{
    try {
        await connection.connect();
} catch (error) {
        console.log(error.message);
    }
    console.log("Connected");

}

module.exports = connectDB;
