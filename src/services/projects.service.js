const { Project } = require("../models");

async function get() {
  return await Project.findAll();
}

async function create({ name, userId }) {
  return await Project.create({ name, userId });
}

module.exports = {
  get,
  create,
};
