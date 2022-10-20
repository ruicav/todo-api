const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");

async function login(email, password) {
  const user = await User.findOne({ where: { email: email } });
  // NOT FOUND
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    // .env
    const token = jwt.sign({ user }, "SEGREDO", {
      expiresIn: 30000,
    });
    return token;
  }
  return null;
}

module.exports = {
  login,
};
