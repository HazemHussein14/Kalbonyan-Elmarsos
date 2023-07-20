import Task from "../model/task.js";
import User from "../model/user.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/index.js";

const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const task = await Task.create(req.body);
  const currentUser = await User.findById(req.user.userId);
  currentUser.tasks.unshift(task);
  await currentUser.save();
  res.status(StatusCodes.CREATED).json({ task });
};

const getAllTasks = async (req, res) => {
  const currentUser = await User.findById(req.user.userId).populate("tasks");
  const tasks = currentUser.tasks.map((task) => ({
    _id: task._id,
    title: task.title,
    checked: task.checked,
  }));
  res.status(StatusCodes.OK).json({ tasks });
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  if (!taskId) {
    throw new NotFoundError(`Can not find ID: ${taskId}`);
  }

  const deletedTask = await Task.findByIdAndDelete(taskId);
  if (!deletedTask) {
    throw new NotFoundError("Task not found");
  }

  const currentUser = await User.findById(req.user.userId);
  currentUser.tasks.pull(taskId);
  await currentUser.save();

  res.status(StatusCodes.OK).json({ msg: `deleted successfully!` });
};

const clearCompletedTasks = async (req, res, next) => {
  const currentUser = await User.findById(req.user.userId);

  if (!currentUser) {
    throw new NotFoundError("User not found");
  }

  const completedTasks = await Task.find({
    checked: true,
    createdBy: req.user.userId,
  });

  if (!Array.isArray(completedTasks)) {
    throw new Error("Failed to fetch completed tasks");
  }

  // Remove the completed tasks from both Task collection and currentUser's tasks array
  await Task.deleteMany({
    _id: { $in: completedTasks.map((task) => task._id) },
  });

  // Update the currentUser's tasks array by filtering out the deleted tasks
  currentUser.tasks = currentUser.tasks.filter(
    (taskId) => !completedTasks.some((task) => task._id.equals(taskId))
  );

  const deletedTaskIds = completedTasks.map((task) => task._id);

  await currentUser.save();

  res
    .status(StatusCodes.OK)
    .json({ deletedTaskIds, msg: "Completed tasks cleared" });
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const currentUser = await User.findById(req.user.userId);

  const task = await Task.findById(taskId);

  const updatedChecked = !task.checked;

  const updatedTask = await Task.findByIdAndUpdate(taskId, {
    $set: { checked: updatedChecked },
  });

  await currentUser.save();

  const updatedTaskId = updatedTask._id;
  res
    .status(StatusCodes.OK)
    .json({ updatedTaskId, msg: "Task updated successfully" });
};

export { createTask, deleteTask, getAllTasks, updateTask, clearCompletedTasks };
