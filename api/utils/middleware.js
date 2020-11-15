const logger = require("./logger");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown end point" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);
  response.status(404).send({ error: error.message });
  next(error);
};

module.exports = { unknownEndpoint, errorHandler };
