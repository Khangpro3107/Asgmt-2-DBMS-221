const express = require("express");
const app = express();
const morgan = require("morgan");
const connectDB = require("./db/connect")

require("dotenv").config();

const homePageMiddleware = require("./controllers/controllers")     // importing controllers

app.use(morgan("common"));

app.get("/trainee", getAllTrainee);
app.post("/trainee", createNewTrainee);
app.get("/trainee/:id", getOneTrainee);
app.patch("/trainee/:id", UpdateOneTrainee);
app.get("/trainee/season/:id", getSeasonTrainee);

try {
  connectDB();
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening on port ${process.env.PORT || 3001}...`)
  })
} catch (error) {
  console.log(error);
}
