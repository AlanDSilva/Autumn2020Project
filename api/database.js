const Pool = require("pg").Pool;

let connectionParams = {
  user: "postgres",
  host: "localhost",
  database: "netdb",
  password: "admin",
  port: 5432,
};

if (process.env.NODE_ENV === "test") {
  connectionParams = {
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "admin",
    port: 5432,
  };
}

if (process.env.NODE_ENV === "production") {
  connectionParams = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const connection = new Pool({
  ...connectionParams,
});

module.exports = connection;
