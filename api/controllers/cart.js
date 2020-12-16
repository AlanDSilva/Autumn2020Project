const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const History = require("../models/history_model");

//const cloudinary = require("cloudinary");

router.post("/", async (req, res) => {
  const body = req.body;
  const id = await uuidv4();
  
  const decodedToken = jwt.verify(body.token, process.env.SECRET);
  if (!body.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const order = {
    id,
    user_id: body.token,
    items: body.items,
  };

  const savedItem = await History.add(order);

  res.json(savedItem.rows);
});

module.exports = router;