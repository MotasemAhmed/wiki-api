const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/config");
const ejs = require("ejs");
const Router = require("./routers/router");

const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("puplic"));

app.use("/", Router);

db.on("error", console.error.bind(console, "MongoDB error: "));
const appPort = 3000;

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}`);
});
