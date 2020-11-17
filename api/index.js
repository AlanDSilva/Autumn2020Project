require("dotenv").config(); // allows usage of .env variables
require("express-async-errors"); // Passes errors on, in async-await functions
const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(3001, () => {
  logger.info(`Server running on port 3001`);
});
