const express = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

//server prefix for task paths = /api/tasks

//GET all of the tasks
router.get("/", getAllTasks);

//GET one task
router.get("/:id", getTask);

// POST + a task
router.post("/", createTask);

//DELETE task
router.delete("/:id", deleteTask);

module.exports = router;
