//Create This File To Put Endpoint
const express = require("express");
const {
  gettask,
  createtask,
  DelTask,
  TaskbyId,
  deleteTask,
  updateTask,
} = require("./../controllers/task");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");
const taskRouter = express.Router();

//User
taskRouter.get("/task/:id", TaskbyId);
taskRouter.post("/task",authentication, createtask);

//Admin
taskRouter.delete("/del/:id", DelTask);
taskRouter.get("/tasks", authentication, gettask);
taskRouter.delete("/delete/:id", deleteTask);
taskRouter.put("/editTask/:id", updateTask);

module.exports = taskRouter;
