const express = require("express");
const app = express();
const morgan = require("morgan");
// const { connectDB } = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {
  getAllTrainee,
  createNewTrainee,
  getOneTrainee,
  UpdateOneTrainee,
  getSeasonTrainee,
  login,
  logout,
  checkAuthenticated,
} = require("./controllers/controllers");
require("dotenv").config();

app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/trainees", checkAuthenticated, getAllTrainee);
app.post("/trainee", checkAuthenticated, createNewTrainee);
app.get("/trainee/:ssn", checkAuthenticated, getOneTrainee);
app.patch("/trainee/:ssn", checkAuthenticated, UpdateOneTrainee);
app.get("/trainee/:season/:ssn", checkAuthenticated, getSeasonTrainee);
app.get("/logout", checkAuthenticated, logout);
app.post("/login", login);
// app.get("/trainees", getAllTrainee);
// app.post("/trainee", createNewTrainee);
// app.get("/trainee/:ssn", getOneTrainee);
// app.patch("/trainee/:ssn", UpdateOneTrainee);
// app.get("/trainee/:season/:ssn", getSeasonTrainee);
// app.get("/logout", logout);
// app.post("/login", login);

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
