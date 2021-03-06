const express = require("express");
require("express-async-errors"); // Passes errors on, in async-await functions
const app = express();
const cors = require("cors");
const cloudinary = require("cloudinary");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const itemRouter = require("./controllers/item");
const historyRouter = require("./controllers/history");
const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use(middleware.tokenExtractor); // Extracts token before any route
// register
app.use("/api/users", userRouter);
// login
app.use("/api/login", loginRouter);
// items
app.use("/api/items", itemRouter);
// cart
app.use("/api/history", historyRouter);

app.use(middleware.unknownEndpoint); // Handles requests made to undefined end points
app.use(middleware.errorHandler); // Handles errors. Returs the error message

module.exports = app;
