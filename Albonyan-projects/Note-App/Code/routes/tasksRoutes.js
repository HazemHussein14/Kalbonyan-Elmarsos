import express from "express";
const router = express.Router();

import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
  clearCompletedTasks,
} from "../controllers/tasksController.js";

router.route("/").post(createTask).get(getAllTasks).delete(clearCompletedTasks);
// remember about :id
router.route("/:id").delete(deleteTask).patch(updateTask);

export default router;

