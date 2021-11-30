const express = require("express");
const {gettask,createtask,getDelTask} = require("./../controllers/task")
const authentication=require("./../middleware/authentication")
const authorization=require("./../middleware/authorization")
const taskRouter = express.Router();

taskRouter.get("/tasks", authentication,authorization,gettask)
taskRouter.post("/task",createtask)
taskRouter.delete("/del/:id",getDelTask)


module.exports=taskRouter;
