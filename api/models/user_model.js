const db = require("../database");

const user = {
  add: function (user, callback) {
    return db.query(
      "insert into user_table(id, firstname, lastname, email, passwordHash) values($1,$2,$3,$4,$5) RETURNING *",
      [user.id, user.firstname, user.lastname, user.email, user.passwordHash],
      callback
    );
  },

  findOne: (email, callback) => {
    return db.query(
      "select * from user_table where email = $1",
      [email],
      callback
    );
  },
};

module.exports = user;
