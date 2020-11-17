const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const Item = require("../models/item_model");

const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

router.post("/", async (req, res) => {
  const body = req.body;
  const token = getTokenFrom(req);

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const id = await uuidv4();
  const item = {
    id,
    user_id: decodedToken.id,
    name: body.name,
    photo_url: body.photo_url,
    price: body.price,
  };

  const savedItem = await Item.add(item);

  res.json(savedItem.rows);
});

module.exports = router;
