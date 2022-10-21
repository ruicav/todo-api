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
    res.send(err.message);
    res.status(400);
    next(err);
  }
}

async function bulkUpdate(req, res, next) {
  try {
    res.json(await tasksService.bulkUpdate(req.body));
  } catch (err) {
    res.send(err.message);
    res.status(400);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await tasksService.update(req.body));
  } catch (err) {
    res.send(err.message);
    res.status(400);
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    res.json(
      await tasksService.destroy({
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
  bulkUpdate,
  update,
  destroy,
};
