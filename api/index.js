const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");
const db = require("./database");
const server = http.createServer(app);


/* DB init */
Promise.all(
  [
      db.query(`CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          firstname VARCHAR ( 50 ) NOT NULL,
          lastname VARCHAR ( 50 ) NOT NULL,
          email VARCHAR ( 255 ) UNIQUE NOT NULL,
          password VARCHAR ( 255 ) NOT NULL
      )`),
  ]
).then(() => {
  console.log('database initialized');

server.listen(3001, () => {
  logger.info(`Server running on port 3001`);
});
})
.catch(error => console.log(error));