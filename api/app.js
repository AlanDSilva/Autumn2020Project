const express = require("express");
const app = express();
const cors = require("cors");
const exampleRouter = require("./controllers/example");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const itemRouter = require("./controllers/item");
const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/examples", exampleRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/items", itemRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
