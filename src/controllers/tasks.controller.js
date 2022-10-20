const tasksService = require("../services/tasks.service");

async function get(req, res, next) {
  try {
    res.json(await tasksService.get());
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await tasksService.create(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  create,
};
