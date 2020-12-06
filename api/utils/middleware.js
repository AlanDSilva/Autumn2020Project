const logger = require("./logger");
const multer = require("multer");
const DataURI = require("datauri/parser");
const path = require("path");

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

const storage = multer.memoryStorage();
const multerUpload = multer({ storage }).single("file");

const dUri = new DataURI();
const dataUri = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

// const uploadFile = (request, response, next) => {
//   const upload = multer().single("file");

//   upload(request, response, (err) => {
//     if (err instanceof multer.MulterError) {
//       console.log("multerr", err);
//     } else if (err) {
//       console.log("err", err);
//     }
//     // Everything went fine.
//     console.log("everything went fine");
//     next();
//   });
// };

module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  multerUpload,
  dataUri,
  // uploadFile,
};
