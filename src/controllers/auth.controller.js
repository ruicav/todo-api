const authService = require("../services/auth.service");

async function login(req, res, next) {
  try {
    res.json(await authService.login(req.query.email, req.query.password));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
};
