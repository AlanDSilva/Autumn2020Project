const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user_model");

router.post("/", async (req, res) => {
  const body = req.body;
  const saltRounds = 10;
  const id = await uuidv4();
  console.log("BODY", body);
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = {
    id,
    name: body.name,
    email: body.email,
    passwordHash,
  };

  const savedUser = await User.add(user);

  res.json(savedUser.rows);
});

module.exports = router;
