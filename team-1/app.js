var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require("./routes/user");
var aboutMeRouter = require("./routes/about-me");
var experiencesRouter = require("./routes/experiences");
var projectsRouter = require("./routes/projects");
var skillsRouter = require("./routes/skills");
var socialMediaRouter = require("./routes/social-media");
var uploadRouter = require("./routes/upload");

var app = express();

require("dotenv").config();
var cors = require("cors");
var favicon = require("serve-favicon");
const session = require("express-session");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

var createError = require("http-errors");
const IS_PRODUCTION = app.get("env") === "production";

if (IS_PRODUCTION) {
  app.set("trust proxy", 1); // secures the app if it is running behind Nginx/Apache/similar
}
app.use(cors()); // allows cross domain requests
// app.use(favicon(path.join(__dirname, '../public', 'favicon.ico'))) // <-- location of favicon

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use("/", indexRouter);
app.use("/upload", uploadRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/aboutme", aboutMeRouter);
app.use("/experiences", experiencesRouter);
app.use("/projects", projectsRouter);
app.use("/skills", skillsRouter);
app.use("/social-media", socialMediaRouter);

// create and error object,catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//  {status: 404, message: “page not found”}

// error handler executed when calling next(err) err bl server
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

module.exports = app;
