const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user_model");

const cloudinary = require("cloudinary");
const middleware = require("../utils/middleware");

router.post("/", middleware.multerUpload, async (req, res, next) => {
  const body = req.body;
  const saltRounds = 10;
  const id = await uuidv4();
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  let photo_url = "No photo url";

  if (req.file !== undefined) {
    const file = await middleware.dataUri(req).content;
    const result = await cloudinary.uploader.upload(file);
    photo_url = result.url;
  }

  const user = {
    id,
    username: body.username,
    photo_url: photo_url,
    passwordHash,
  };

  const savedUser = await User.add(user);
  res.json(savedUser.rows);
});

router.get("/", async (req, res) => {
  const users = await User.get();

  res.json(users.rows);
});

module.exports = router;
