const userService = require("../services/users.service");

async function get(req, res, next) {
  try {
    res.json(await userService.get());
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const { name, password, email } = req.body;
  try {
    res.json(await userService.create({ name, password, email }));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  create,
};
