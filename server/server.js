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
app.use(express.json());
app.use(cookieParser());

app.get("/trainees", getAllTrainee);
app.get("/trainees2", getAllTrainee2);
app.post("/trainee", createNewTrainee);
app.get("/trainee/:ssn", getOneTrainee);
app.patch("/trainee/:ssn", UpdateOneTrainee);
app.get("/trainee/:season/:ssn", getSeasonTrainee);
app.get("/logout", logout);
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
