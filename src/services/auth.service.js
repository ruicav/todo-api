const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const SECRET = "SEGREDO";

async function login(email, password) {
  const user = await User.findOne({ where: { email: email } });
  // NOT FOUND
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    // .env
    const token = jwt.sign({ user }, SECRET, {
      expiresIn: 30000,
    });
    return token;
  }
  return null;
}

function verifyToken(req, res, next) {
  const auth = req.headers.authorization;
  let authenticated = "";
  const token = String(auth).replace("Bearer ", "");
  if (token !== "undefined") {
    try {
      jwt.verify(token, SECRET, (err, decoded) => {
        if (err) throw new Error("Invalid token");
        authenticated = decoded?.user;
      });
      req.user = authenticated;
      next();
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
  res.sendStatus(403);
}

module.exports = {
  login,
  verifyToken,
};
