require("dotenv").config(); // allows usage of .env variables
require("express-async-errors"); // Passes errors on, in async-await functions
const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");
const db = require("./database");
const server = http.createServer(app);

/* DB init */
Promise.all([
  db.query(`CREATE TABLE IF NOT EXISTS user_table(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        passwordHash VARCHAR(255) NOT NULL,
        CONSTRAINT email_already_exists UNIQUE(email)
      )`),
  db.query(`CREATE TABLE IF NOT EXISTS item_table (
	      id VARCHAR(255) NOT NULL PRIMARY KEY,
	      user_id VARCHAR(255),
	      name VARCHAR(255) NOT NULL,
	      photo_url VARCHAR(255), 
        price FLOAT NOT NULL,
        description VARCHAR(255),
        category VARCHAR(255),
	      CONSTRAINT fk_user
		      FOREIGN KEY(user_id)
		      REFERENCES user_table(id)
      )`),
])
  .then(() => {
    console.log("database initialized");

    server.listen(3001, () => {
      logger.info(`Server running on port 3001`);
    });
  })
  .catch((error) => console.log(error));
