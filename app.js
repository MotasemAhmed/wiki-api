const app = require("express")();
const bodyParser = require("body-parser");
const db = require("./db/config");
const Article = require("./models/article");

db.on("error", console.error.bind(console, "MongoDB error: "));
const appPort = 3000;

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}`);
});
