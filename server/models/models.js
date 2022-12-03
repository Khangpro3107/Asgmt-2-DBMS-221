const {connection} = require("../db/connect")

const getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM trainee", (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

module.exports = {getAll}
