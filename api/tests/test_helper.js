const Item = require("../models/item_model");
const User = require("../models/user_model");

// item helpers
const initialItems = [
  {
    id: "item1",
    name: "item1",
    photo_url: "item1_url",
    price: 9.99,
    description: "item1 description",
    category: "category1",
  },
  {
    id: "item2",
    name: "item2",
    photo_url: "item2_url",
    price: 18.99,
    description: "item2 description",
    category: "category2",
  },
];

const itemsInDb = async () => {
  const items = await Item.get();
  return items.rows;
};

const initialUser = {
  id: "rootID",
  firstname: "rootFN",
  lastname: "rootLN",
  email: "rootEMAIL",
  passwordHash: "rootPASS",
};
// user helpers
const usersInDb = async () => {
  const users = await User.get();
  return users.rows;
};

module.exports = {
  initialItems,
  itemsInDb,
  initialUser,
  usersInDb,
};
