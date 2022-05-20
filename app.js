const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const router = require("./server/routes/router");
const ejs = require("ejs");
const path = require("path");

////connet database
const db = require("./database/db");
db();
////
const app = express();

//// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//// logger
app.use(morgan("dev"));

////view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "ejs folder name"));

// load public CSS
app.use(express.static("public"));

//// api route
app.use("/", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`App running on ${PORT}`));
