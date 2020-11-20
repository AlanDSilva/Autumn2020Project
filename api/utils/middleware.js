const logger = require("./logger");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown end point" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.code);
  if (error.code === "23505") {
    return response.status(400).send({ error: error.message });
  } else if (error.code === "23502") {
    return response.status(400).send({ error: error.message });
  }

  next(error);
};

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
  }
  next();
};

module.exports = { unknownEndpoint, errorHandler, tokenExtractor };
