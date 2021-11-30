const express = require("express");
const {gettask,createtask,DelTask,TaskbyId,deleteTask,updateTask} = require("./../controllers/task")
const authentication=require("./../middleware/authentication")
const authorization=require("./../middleware/authorization")
const taskRouter = express.Router();

taskRouter.get("/tasks", authentication,authorization,gettask)
taskRouter.post("/task",createtask)
taskRouter.delete("/del/:id",DelTask)
taskRouter.get("/task/:id",TaskbyId)
taskRouter.delete("/delete/:id",deleteTask)
taskRouter.put("/editTask/:id",updateTask)


module.exports=taskRouter;
