const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

const homePageMiddleware = require("./controllers/controllers")     // importing controllers

app.use(morgan("common"));

app.get("/", homePageMiddleware);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT || 3001}...`)
})