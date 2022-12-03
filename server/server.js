const express = require("express");
const app = express();
const morgan = require("morgan");
// const { connectDB } = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {
  getAllTrainee,
  getAllTrainee2,
  createNewTrainee,
  getOneTrainee,
  UpdateOneTrainee,
  getSeasonTrainee,
  login,
  logout,
  checkAuthenticated
} = require("./controllers/controllers");
require("dotenv").config();

app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/trainees", checkAuthenticated, getAllTrainee);
app.get("/trainees2", checkAuthenticated, getAllTrainee2);
app.post("/trainee", checkAuthenticated, createNewTrainee);
app.get("/trainee/:ssn", checkAuthenticated, getOneTrainee);
app.patch("/trainee/:ssn", checkAuthenticated, UpdateOneTrainee);
app.get("/trainee/:season/:ssn", checkAuthenticated, getSeasonTrainee);
app.get("/logout", checkAuthenticated, logout);
app.post("/login", login);

const start = async () => {
  try {
    // await connectDB();
    // console.log("Database connected");
    app.listen(3001, () => console.log(`Server is listening on port 3001...`));
  } catch (error) {
    console.log(error);
  }
};

start();
