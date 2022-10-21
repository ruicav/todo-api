const { Project, Task } = require("../models");

async function get({ userId, id }) {
  return await Project.findAll({
    where: { userId, ...(id && { id }) },
    include: [{ model: Task, as: "tasks" }],
  });
}

async function create({ name, userId }) {
  console.log("novo", { name, userId });
  return await Project.create({ name, userId });
}

async function update({ id, name, userId }) {
  const project = await Project.findByPk(id);
  if (project.userId !== userId) {
    throw new Error("Project does not belong to User");
  }
  project.set({ name });
  return await project.save();
}

async function destroy({ id, userId }) {
  const project = await Project.findByPk(id);
  if (project.userId !== userId) {
    throw new Error("Project does not belong to User");
  }

  Task.destroy({ where: { projectId: project.id } });
  return await project.destroy();
}

module.exports = {
  get,
  create,
  update,
  destroy,
};
