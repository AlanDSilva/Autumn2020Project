const Pool = require("pg").Pool;

let database = "netdb";

if (process.env.NODE_ENV === "test") {
  databse = "testdb";
}

let connectionParams = {
  user: "postgres",
  host: "localhost",
  database: database,
  password: "admin",
  port: 5432,
};

if (process.env.DATABASE_URL) {
  connectionParams = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

// if (process.env.NODE_ENV === "test") {
//   connectionParams = {
//     user: "postgres",
//     host: "localhost",
//     database: "testdb",
//     password: "admin",
//     port: 5432,
//   };
// }

// if (process.env.NODE_ENV === "production") {
//   connectionParams = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   };
// }

const connection = new Pool({
  ...connectionParams,
});

module.exports = connection;
