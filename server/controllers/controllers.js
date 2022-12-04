const { connection, connectDB } = require("../db/connect");
const { getAll } = require("../models/models");
require("dotenv").config();

const getAllTrainee = async (req, res) => {
  const name =
    req.query.name == undefined ? "%%" : "%" + req.query.name.slice(1, 2) + "%";
  const q =
    "SELECT * FROM trainee t, person p WHERE t.SSN = p.SSN AND concat(p.Fname, ' ',p.Lname) LIKE ?;";
  const values = [name];

  connection.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
const createNewTrainee = async (req, res) => {
  // insert person
  const personValues = [
    req.body.SSN,
    req.body.Fname,
    req.body.Lname,
    req.body.Paddress,
    req.body.Pphone,
  ];
  const personQ =
    "INSERT INTO person(SSN, Fname, Lname, Paddress, Pphone) VALUES (?)";
  connection.query(personQ, [personValues], (err, data) => {
    if (err) return res.send(err);
    console.log("Insert person successfully");
  });
  // insert trainee
  const q = "INSERT INTO trainee(SSN, DoB, Photo, Company_ID) VALUES (?)";

  const values = [
    req.body.SSN,
    req.body.DoB,
    req.body.Photo,
    req.body.Company_ID,
  ];

  connection.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("Create successfully");
  });
};
const getOneTrainee = async (req, res) => {
  const ssn = req.params.ssn;
  const q = "call get_one_trainee_info(?);";
  const values = [ssn];

  connection.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
const UpdateOneTrainee = async (req, res) => {
  // insert person
  const ssn = req.params.ssn;
  const personValues = [
    req.body.Fname,
    req.body.Lname,
    req.body.Paddress,
    req.body.Pphone,
  ];
  const personQ =
    "UPDATE person SET Fname= ?, Lname= ?, Paddress= ?, Pphone= ? WHERE SSN= ?";
  connection.query(personQ, [...personValues, ssn], (err, data) => {
    if (err) return res.send(err);
    console.log("Insert person successfully");
  });
  // insert trainee
  const q = "UPDATE trainee SET DoB=?, Photo=?, Company_ID=? WHERE SSN= ?";

  const values = [req.body.DoB, req.body.Photo, req.body.Company_ID];

  connection.query(q, [...values, ssn], (err, data) => {
    if (err) return res.send(err);
    return res.json("Get successfully");
  });
};
const getSeasonTrainee = async (req, res) => {
  const season = req.params.season;
  const ssn = req.params.ssn;
  const q = "call GetTraineeResult2 (?, ?)";

  const values = [season, ssn];

  connection.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

const getAllTrainee2 = async (req, res) => {
  getAll()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => res.json({ msg: err.message }));
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username !== process.env.DB_USERNAME || password !== process.env.PASSWORD)
    return res.json({ msg: "Invalid login credentials!" });
  res.cookie("username", process.env.DB_USERNAME, { maxAge: 5000 });
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
  return res.status(401).json({ msg: "Not authenticated!" });
};

module.exports = {
  getAllTrainee,
  getAllTrainee2,
  createNewTrainee,
  getOneTrainee,
  UpdateOneTrainee,
  getSeasonTrainee,
  login,
  logout,
  checkAuthenticated,
};
// controllers, middlewares here
