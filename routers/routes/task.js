const express = require("express");
const {gettask,createtask} = require("./../controllers/task")
const taskRouter = express.Router();

taskRouter.get("/tasks",gettask)
taskRouter.post("/task",createtask)

module.exports=taskRouter;