const Pool = require("pg").Pool;

let database = "netdb";

if (process.env.NODE_ENV === "test") {
  database = "testdb";
}

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: database,
  password: "admin",
  port: 5432,
});
module.exports = connection;
