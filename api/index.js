require("dotenv").config(); // allows usage of .env variables
const app = require("./app");
const http = require("http");
const logger = require("./utils/logger");
const db = require("./database");
const server = http.createServer(app);

/* DB init */
Promise.all([
  db.query(`CREATE TABLE IF NOT EXISTS user_table(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        photo_url VARCHAR(255) NOT NULL,
        passwordHash VARCHAR(255) NOT NULL,
        CONSTRAINT username_already_exists UNIQUE(username)
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
  db.query(`CREATE TABLE IF NOT EXISTS history_table(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        user_id VARCHAR(255),
        items text[],
        p_date VARCHAR(255),
        price FLOAT,
        CONSTRAINT fk_user
		      FOREIGN KEY(user_id)
		      REFERENCES user_table(id)
      )`),
])
  .then(() => {
    console.log("database initialized");

    const PORT = process.env.PORT || 3001;
    server.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
