const express = require("express");
const app = express();
const cors = require("cors");
const exampleRouter = require("./controllers/example");
const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/examples", exampleRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
