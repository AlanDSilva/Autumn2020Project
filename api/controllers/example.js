const express = require("express");
const router = express.Router();
const example = require("../models/example_model");

router.get("/", (req, res) => {
  //   example.get((err, rows) => {
  //     res.json(rows.rows);
  //   });
  example.get().then((examples) => {
    res.json(examples.rows);
  });
});

router.post("/", function (req, res, next) {
  //   example.add(req.body, function (err, count) {
  //     if (err) {
  //       next(err);
  //     } else {
  //       res.json(req.body); //or return count for 1 & 0
  //     }
  //   });
  example
    .add(req.body)
    .then((savedExample) => {
      res.json(savedExample.rows);
    })
    .catch((error) => next(error));
});

module.exports = router;
