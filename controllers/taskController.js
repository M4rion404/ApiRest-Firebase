const taskModel = require("../models/task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await taskModel.getTaskById(id);
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = await taskModel.createTask(title);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  try {
    const updatedTask = await taskModel.updateTask(id, title);
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await taskModel.deleteTask(id);
    if (!response) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
