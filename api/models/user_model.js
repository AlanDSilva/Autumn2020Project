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

  get: (callback) => {
    return db.query("select * from user_table", callback);
  },

  deleteMany: (callback) => {
    return db.query("delete from user_table", callback);
  },
};

module.exports = user;
