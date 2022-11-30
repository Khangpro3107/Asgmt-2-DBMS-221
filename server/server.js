const express = require("express");
const app = express();
const morgan = require("morgan");
const { connectDB } = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  getAllTrainee,
  createNewTrainee,
  getOneTrainee,
  UpdateOneTrainee,
  getSeasonTrainee,
} = require("./controllers/controllers");
require("dotenv").config();

const homePageMiddleware = require("./controllers/controllers"); // importing controllers

app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json())

app.get("/trainees", getAllTrainee);
app.post("/trainee", createNewTrainee);
app.get("/trainee/:id", getOneTrainee);
app.patch("/trainee/:id", UpdateOneTrainee);
app.get("/trainee/season/:id", getSeasonTrainee);

const start = async () => {
  try {
    await connectDB();
    console.log("Database connected");
    app.listen(3001, () => console.log(`Server is listening on port 3001...`));
  } catch (error) {
    console.log(error);
  }
};

start();
