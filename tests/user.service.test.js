const userService = require("../src/services/users.service");
const bcrypt = require("bcrypt");

const user = {
  name: "Parteum",
  email: "parteum@foo.com",
  password: "123",
};

test("password should not be saved equal", async () => {
  const { dataValues: newUser } = await userService.create(user);
  expect(newUser.password).not.toBe("123");
});

// test("password should be encrypted", async () => {
//   const { dataValues: newUser } = await userService.create(user);
//   const validPassword = await bcrypt.compare("123", newUser.password);
//   console.log("pwd", validPassword);
//   expect(validPassword).toBeTruthy();
// });
