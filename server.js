const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds263670.mlab.com:63670/heroku_d8578sd1";
mongoose.connect(MONGODB_URI);
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.use(require("./routes/apiRoutes"));
//app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});