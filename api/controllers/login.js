const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../models/user_model");

router.post("/", async (req, res) => {
  const body = req.body;
  const rows = await User.getOne(body.username);
  const user = rows.rows[0];

  const passwordCorrect =
    user === undefined
      ? false
      : await bcrypt.compare(body.password, user.passwordhash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: "invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, username: user.username });
});

module.exports = router;
