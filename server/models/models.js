// database-related methods here
const {connection} = require('../db/connect');

const methodGetAllTrainee = async()=>{
    let tmp;
    // return await connection.query('SELECT * FROM trainee');
    connection.query('SELECT * FROM trainee', function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        tmp = result;
      });
      return tmp;
}

module.exports = {methodGetAllTrainee};




