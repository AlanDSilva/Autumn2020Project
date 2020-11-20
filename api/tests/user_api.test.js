const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const db = require("../database");
const bcrypt = require("bcrypt");
const User = require("../models/user_model");

// Before all tests run
beforeEach(async () => {
  await User.deleteMany(); // Clears database
  //console.log("cleared");

  await User.add(helper.initialUser);
  //console.log("added initial user");
});

describe("when there is intially one user in db", () => {
  test("users are returned as json", async () => {
    //console.log("entered test");
    await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("creation succeeds with a valid data", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      firstname: "newFN",
      lastname: "newLN",
      email: "newEMAIL",
      password: "newPASS",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const emails = usersAtEnd.map((u) => u.email);
    expect(emails).toContain(newUser.email);
  });

  test("creation fails with proper error message if email already taken", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      firstname: "newFN",
      lastname: "newLN",
      email: "rootEMAIL", // same as initial user
      password: "newPASS",
    };

    const result = await api.post("/api/users").send(newUser).expect(400);

    expect(result.body.error).toContain(`email_already_exists`);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});
