const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const Item = require("../models/item_model");

router.post("/", async (req, res) => {
  const body = req.body;

  // FOR USE LATER !!
  // const decodedToken = jwt.verify(req.token, process.env.SECRET);
  // if (!req.token || !decodedToken.id) {
  //   return res.status(401).json({ error: "token missing or invalid" });
  // }

  const id = await uuidv4();
  const item = {
    // user_id: decodedToken.id,
    id,
    name: body.name,
    photo_url: body.photo_url,
    price: body.price,
    description: body.description,
    category: body.category,
  };

  const savedItem = await Item.add(item);

  res.json(savedItem.rows);
});

router.get("/", async (req, res) => {
  const items = await Item.get();

  res.json(items.rows);
});

module.exports = router;
