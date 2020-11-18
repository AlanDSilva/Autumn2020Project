const db = require("../database");

const item = {
  add: function (item, callback) {
    return db.query(
      "insert into item_table(id, user_id, name, photo_url, price, description, category) values($1,$2,$3, $4, $5, $6, $7) RETURNING *",
      [item.id, item.user_id, item.name, item.photo_url, item.price, item.description, item.category],
      callback
    );
  },

  get: function (callback) {
    return db.query("select * from item_table", callback);
  },
};

module.exports = item;
