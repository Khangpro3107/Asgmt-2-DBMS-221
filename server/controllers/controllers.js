const {methodGetAllTrainee} = require('../models/models')

const getAllTrainee = async(req, res)=>{
  const allTrainees = await methodGetAllTrainee();
  // console.log(allTrainees);
  res.json(JSON.stringify(allTrainees));
}
const createNewTrainee = async(req, res)=>{
  res.json("Xin chao create");
}
const getOneTrainee = async(req, res)=>{
  res.json("Xin chao one");
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