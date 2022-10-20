const { Task } = require("../models");

async function get() {
  return await Task.findAll();
}

async function create({ description, projectId }) {
  return await Task.create({ description, projectId, status: "PENDING" });
}

module.exports = {
  get,
  create,
};
