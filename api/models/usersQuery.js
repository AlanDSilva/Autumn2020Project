var db = require("../database");
const bcrypt = require('bcryptjs');

const saltRounds = 4;

var usersQuery = {
  get: function (callback) {
    return db.query("select * from users", callback);
  },

  add: function (data, callback) {
    return bcrypt.hash(data.password, saltRounds).then(hash =>
      db.query(
        "insert into users(firstname, lastname, email, password) values($1,$2,$3, $4) RETURNING *",
        [data.firstname, data.lastname, data.email, hash],
        callback
      )
    )
    .then(dbResults => {
      console.log(dbResults);
      res.sendStatus(201);
    })
    .catch(error =>  {return error});
  },
};

module.exports = usersQuery;
