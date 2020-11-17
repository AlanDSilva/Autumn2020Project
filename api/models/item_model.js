const db = require("../database");

const item = {
  add: function (item, callback) {
    return db.query(
      "insert into item_table(id, user_id, name, photo_url, price) values($1,$2,$3, $4, $5) RETURNING *",
      [item.id, item.user_id, item.name, item.photo_url, item.price],
      callback
    );
  },

  get: function (callback) {
    return db.query("select * from user_table", callback);
  },
};

module.exports = item;
