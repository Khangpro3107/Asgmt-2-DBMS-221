const { connection, connectDB } = require("../db/connect");
const { getAllTraineesAPI, addPersonAPI, addTraineeAPI, getOneTraineeAPI, getSeasonTraineeAPI } = require("../models/models");
require("dotenv").config();

// const getAllTrainee = async (req, res) => {
//   const name =
//     req.query.name == undefined ? "%%" : "%" + req.query.name + "%";
//   const q =
//     "SELECT * FROM trainee t, person p WHERE t.SSN = p.SSN AND concat(p.Fname, ' ',p.Lname) LIKE ?;";
//   const values = [name];

//   connection.query(q, values, (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// };

const getAllTrainee = async (req, res) => {
  const name =
    req.query.name == undefined ? "%%" : "%" + req.query.name + "%";
  getAllTraineesAPI(name).then((result) => {
    return res.json(result);
  }).catch((err) => res.json({ msg: err.message }))
};

const getAllTrainee2 = async (req, res) => {
  getAll()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => res.json({ msg: err.message }));
};

const addNewPerson = async (req, res, next) => {
  // insert person
  const personValues = [
    req.body.SSN,
    req.body.Fname,
    req.body.Lname,
    req.body.Paddress,
    req.body.Pphone,
  ];
  addPersonAPI(personValues).then((result) => {
    console.log("Added person: ", result);
    return next();
  }).catch((err) => res.json({ msg: err.message }));
}

const addNewTrainee = async (req, res) => {
  // insert trainee
  let traineeValues = [
    req.body.SSN,
    req.body.DoB,
    req.body.photo,
    req.body.Company_ID,
  ];
  if (req.body.Company_ID === "") {
    traineeValues = [
      req.body.SSN,
      req.body.DoB,
      req.body.photo
    ];
  }
  addTraineeAPI(traineeValues, req.body.Company_ID === "").then((result) => {
    return res.status(200).json(result)
  })
  .catch((err) => res.json({ msg: err.message }));
};
const getOneTrainee = async (req, res) => {
  const ssn = req.params.ssn;
  getOneTraineeAPI(ssn).then((result) => {
    res.status(200).json(result[0][0])
  })
  .catch((err) => res.json({ msg: err.message }));
};

const getSeasonTrainee = async (req, res) => {
  const season = req.params.season;
  const ssn = req.params.ssn;

  getSeasonTraineeAPI(season, ssn).then((result) => {
    res.status(200).json(result[0])
  })
  .catch((err) => res.json({ msg: err.message }));
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username !== process.env.DB_USERNAME || password !== process.env.PASSWORD)
    return res.status(401).json({ msg: "Invalid login credentials!" });
  res.cookie("username", process.env.DB_USERNAME, { maxAge: 10000000000 });
  try {
    if (connection.state === "disconnected") await connectDB();
    console.log("Database connected! Username: ", username);
  } catch (error) {
    console.log(error.message);
  }
  return res.status(200).json({ msg: "Login successful!" });
};

const logout = async (req, res) => {
  res.clearCookie("username");
  try {
    if (connection.state === "authenticated") await connection.destroy();
    console.log("Database disconnected!");
  } catch (error) {
    console.log(error.message);
  }
  return res.status(200).json({ msg: "Logout successful!" });
};

const checkAuthenticated = async (req, res, next) => {
  if (req.cookies.username) return next();
  return res.status(401).json({ msg: "Not authenticated! From cookie" });
};

module.exports = {
  getAllTrainee,
  addNewTrainee,
  addNewPerson,
  getOneTrainee,
  getSeasonTrainee,
  login,
  logout,
  checkAuthenticated,
};
