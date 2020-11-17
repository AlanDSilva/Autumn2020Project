const express = require("express");
const router = express.Router();
const users = require("../models/usersQuery");

router.get("/", (req, res) => {
  //   users.get((err, rows) => {
  //     res.json(rows.rows);
  //   });
  users.get().then((results) => {
    res.json(results.rows);
  });
});

router.post("/", function (req, res, next) {
    users.add(req.body, function (err, count) {
      if (err) {
        next(err);
      } else {
        res.json(req.body); //or return count for 1 & 0
      }
    });
});

module.exports = router;
