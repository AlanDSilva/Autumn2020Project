var db = require("../database");

var example = {
  get: function (callback) {
    return db.query("select * from example_table order by id desc", callback);
  },

  add: function (example, callback) {
    return db.query(
      "insert into example_table(name, email, password, confirm) values($1,$2,$3, $4) RETURNING *",
      [example.name, example.email, example.password, example.confirm],
      callback
    );
  },
};

module.exports = example;
