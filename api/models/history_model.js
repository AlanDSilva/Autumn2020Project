const db = require("../database");

const order = {
  add: function (order, callback) {
    return db.query(
      "insert into history_table(id, user_id, items) values($1,$2,$3) RETURNING *",
      [
        order.id,
        order.user_id,
        order.items
      ],
      callback
    );
  },

  get: function (callback) {
    return db.query("select * from item_table", callback);
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
