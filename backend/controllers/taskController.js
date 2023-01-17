const Task = require("../models/Task");
const mongoose = require("mongoose");

const createTask = async (req, res) => {
  const { title, body } = req.body;

  try {
    const task = await Task.create({ title, body });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
};

const getTask = async (req, res) => {
  const { id } = req.params; //  grabs the "/:id" on the route
  //check id valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not valid id" });
  }
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not valid id" });
  }
  const task = await Task.findOneAndDelete({ _id: id }); //deletes the mongo id if matches with param id

  if (!task) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not valid id" });
  }
  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); //deletes the mongo id if matches with param id

  if (!task) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(task);
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
};
