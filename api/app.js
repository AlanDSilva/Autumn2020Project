const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");

// components
var loginRouter = require('./router/login');
const users = require("./controllers/users");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
// register
app.use("/register", users);
app.use("/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
