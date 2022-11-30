const {connection} = require('../db/connect');

const getAllTrainee = async(req, res)=>{
  connection.query('SELECT * FROM trainee', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
}
const createNewTrainee = async(req, res)=>{
  const data = req.body;
  res.json(req.body);
}
const getOneTrainee = async(req, res)=>{
  const id = req.params.id;
  res.json(`Xin chao create ${id}`);
}
const UpdateOneTrainee = async(req, res)=>{
  res.json("Xin chao update");
}
const getSeasonTrainee = async(req, res)=>{
  res.json("Xin chao season");
}

module.exports = {
  getAllTrainee, createNewTrainee, getOneTrainee, UpdateOneTrainee, getSeasonTrainee
}
// controllers, middlewares here