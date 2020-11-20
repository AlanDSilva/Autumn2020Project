const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user_model");

router.post("/", async (req, res, next) => {
  const body = req.body;
  const saltRounds = 10;
  const id = await uuidv4();
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = {
    id,
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    passwordHash,
  };

  // try {
  //   const savedUser = await User.add(user);
  //   res.json(savedUser.rows);
  // } catch (e) {
  //   next(e);
  // }
  const savedUser = await User.add(user);
  res.json(savedUser.rows);
});

router.get("/", async (req, res) => {
  const users = await User.get();

  res.json(users.rows);
});

module.exports = router;
