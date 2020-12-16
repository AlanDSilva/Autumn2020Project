const db = require("../database");

const order = {
  add: function (order, callback) {
    return db.query(
      "insert into history_table(id, user_id, items, p_date, price) values($1,$2,$3,$4,$5) RETURNING *",
      [order.id, order.user_id, order.items, order.date, order.price],
      callback
    );
  },

  getByUser: function (user_id, callback) {
    return db.query(
      "select * from history_table where user_id = $1",
      [user_id],
      callback
    );
  },

  get: function (callback) {
    return db.query("select * from history_table", callback);
  },
  /*
  getOne: (id, callback) => {
    return db.query("select * from item_table where id = $1", [id], callback);
  },

  deleteOne: (id, callback) => {
    return db.query("delete from item_table where id = $1", [id], callback);
  },

  deleteMany: function (callback) {
    return db.query("delete from item_table", callback);
  },
  */
};

module.exports = order;
