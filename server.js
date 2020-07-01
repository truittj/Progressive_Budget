const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds263670.mlab.com:63670/heroku_d8578sd1";
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});