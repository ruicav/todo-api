const projectService = require("../services/projects.service");

async function get(req, res, next) {
  try {
    res.json(await projectService.get());
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await projectService.create(req.body));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  create,
};
