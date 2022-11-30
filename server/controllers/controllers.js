const { connection } = require("../db/connect");

const getAllTrainee = async (req, res) => {
  connection.query("SELECT * FROM trainee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return res.json(result);
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
  connection.query(
    `SELECT * FROM trainee WHERE SSN = ${ssn}`,
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      return res.json(result);
    }
  );
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
    return res.json("Get successfully");
  });
};

module.exports = {
  getAllTrainee,
  createNewTrainee,
  getOneTrainee,
  UpdateOneTrainee,
  getSeasonTrainee,
};
// controllers, middlewares here
