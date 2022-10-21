const { Task, Project } = require("../models");

async function get() {
  return await Task.findAll();
}

async function create({ description, projectId, userId }) {
  const project = await Project.findByPk(projectId);
  if (project.userId !== userId) {
    throw new Error("Project does not belong to User");
  }
  return await Task.create({ description, projectId, status: "PENDING" });
}

async function bulkUpdate({ tasks, status }) {
  return Task.update(
    { status: status, ...(status === "DONE" && { doneAt: new Date() }) },
    { where: { id: tasks.map((task) => task.id) } }
  );
}

async function update({ description, id }) {
  const task = await Task.findByPk(id);
  if (task.status === "DONE") {
    throw new Error("Task cannot be updated");
  }
  task.set({ description });
  return await task.save();
}

async function destroy({ id }) {
  const task = await Task.findByPk(id);
  if (task.status === "DONE") {
    throw new Error("Task cannot be deleted");
  }
  return await task.destroy();
}

module.exports = {
  get,
  create,
  bulkUpdate,
  update,
  destroy,
};
