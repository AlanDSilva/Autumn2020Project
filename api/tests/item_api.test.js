const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const Item = require("../models/item_model");

// Before all tests run
beforeEach(async () => {
  await Item.deleteMany(); // Clears database

  const promiseArray = helper.initialItems.map((item) => Item.add(item)); // add initial items
  await Promise.all(promiseArray);
});

describe("when there are initially some items saved", () => {
  test("items are returned as json", async () => {
    console.log("entered test");
    await api
      .get("/api/items")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all items are returnded", async () => {
    const response = await api.get("/api/items");
    expect(response.body).toHaveLength(helper.initialItems.length);
  });

  test("a specific item is within the returned notes", async () => {
    const response = await api.get("/api/items");
    const names = response.body.map((r) => r.name);
    expect(names).toContain("item2");
  });
});

describe("addition of a new item", () => {
  test("a valid item can be added", async () => {
    const newItem = {
      name: "item3",
      photo_url: "item3_url",
      price: 27.99,
      description: "item3 description",
      category: "category3",
    };

    await api
      .post("/api/items")
      .send(newItem)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const itemsAtEnd = await helper.itemsInDb();
    expect(itemsAtEnd).toHaveLength(helper.initialItems.length + 1);

    const names = itemsAtEnd.map((r) => r.name);
    expect(names).toContain("item3");
  });

  test("Item without name is not added", async () => {
    const newItem = {
      photo_url: "item4_url",
      price: 36.99,
    };

    await api
      .post("/api/items")
      .send(newItem)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const itemsAtEnd = await helper.itemsInDb();

    expect(itemsAtEnd).toHaveLength(helper.initialItems.length);
  });
});

describe("viewing a specific item", () => {
  test("a specific item can be viewed", async () => {
    const itemsAtStart = await helper.itemsInDb();
    const itemToView = itemsAtStart[0];

    const resultItem = await api
      .get(`/api/items/${itemToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(resultItem.body[0]).toEqual(itemToView);
  });

  test("fails with status code 404 if item does not exist", async () => {
    const nonExistentId = "nonExistenId";

    await api.get(`/api/items/${nonExistentId}`).expect(404);
  });
});

describe("deletion of an item", () => {
  test("an item can be deleted", async () => {
    const itemsAtStart = await helper.itemsInDb();
    const itemToDelete = itemsAtStart[0];

    await api.delete(`/api/items/${itemToDelete.id}`).expect(204);

    const itemsAtEnd = await helper.itemsInDb();

    expect(itemsAtEnd).toHaveLength(helper.initialItems.length - 1);
  });
});
