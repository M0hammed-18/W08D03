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
taskRouter.post("/task", createtask);

//Admin
taskRouter.delete("/del/:id", authentication, authorization, DelTask);
taskRouter.get("/tasks",  gettask);
taskRouter.delete("/delete/:id", authentication, authorization, deleteTask);
taskRouter.put("/editTask/:id", authentication, authorization, updateTask);

module.exports = taskRouter;
