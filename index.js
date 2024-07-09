const express = require("express");

const app = express();

const sequelize = require("./utll/database");

const Sequelize = require("sequelize");

const path = require("path");

const Model = require("./Model/User");

const userRoute = require("./Route/User");

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public", "Javascripts")));

app.use(bodyParser.json());

app.use("/User", userRoute);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "View", "index.html"));
});

sequelize.sync();

app.listen(4000);
