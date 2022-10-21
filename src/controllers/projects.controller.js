const projectService = require("../services/projects.service");

async function get(req, res, next) {
  try {
    res.json(
      await projectService.get({
        ...req.body,
        id: req.param.id ? req.params.id : null,
      })
    );
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

async function update(req, res, next) {
  try {
    res.json(await projectService.update(req.body));
  } catch (err) {
    res.send(err.message);
    res.status(400);
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    res.json(
      await projectService.destroy({
        userId: req.body.userId,
        id: req.params.id,
      })
    );
  } catch (err) {
    res.send(err.message);
    res.status(400);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  destroy,
};
