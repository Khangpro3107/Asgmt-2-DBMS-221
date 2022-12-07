const {connection} = require("../db/connect")

const getAllTraineesAPI = (name) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM trainee t, person p WHERE t.SSN = p.SSN AND concat(p.Fname, ' ',p.Lname) LIKE ?;", [name], (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

const addPersonAPI = (personValues) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO person(SSN, Fname, Lname, Paddress, Pphone) VALUES (?, ?, ?, ?, ?);", personValues, (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

const addTraineeAPI = (traineeValues, isFree) => {
  var query = "INSERT INTO trainee(SSN, DoB, Photo, Company_ID) VALUES (?, ?, ?, ?);"
  if (isFree) query = "INSERT INTO trainee(SSN, DoB, Photo) VALUES (?, ?, ?);"
  return new Promise((resolve, reject) => {
    connection.query(query, traineeValues, (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

const getOneTraineeAPI = (ssn) => {
  return new Promise((resolve, reject) => {
    connection.query("call get_one_trainee_info(?);", [ssn], (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

const getSeasonTraineeAPI = (season, ssn) => {
  return new Promise((resolve, reject) => {
    connection.query("call GetTraineeResult (?, ?);", [season, ssn], (err, result) => {
      if (err) reject(err);
      else resolve(result)
    })
  })
}

module.exports = { getAllTraineesAPI, addPersonAPI, addTraineeAPI, getOneTraineeAPI, getSeasonTraineeAPI }