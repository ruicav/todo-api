const bcrypt = require("bcrypt");
const { User } = require("../models");

async function get() {
  return User.findAll();
}

async function create(user) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(String(user.password), salt);
  return User.create(user);
}

module.exports = {
  get,
  create,
};
