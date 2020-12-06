const db = require("../database");

const user = {
  add: function (user, callback) {
    return db.query(
      "insert into user_table(id, username, photo_url, passwordHash) values($1,$2,$3,$4) RETURNING *",
      [user.id, user.username, user.photo_url, user.passwordHash],
      callback
    );
  },

  getOne: (username, callback) => {
    return db.query(
      "select * from user_table where username = $1",
      [username],
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
