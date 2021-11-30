const taskModel=require("./../../db/models/task")

const gettask=(req,res)=>{
    taskModel.find({}).then((result)=>{
        res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
    };

const createtask=(req,res)=>{
const {name}=req.body;
const newRole= new taskModel({
    name
})

newRole.save().then((result)=>{
    res.status(201).json(result)
}).catch((err)=>{
    res.status(400).json(err);
})
}


module.exports={
    createtask,
    gettask
}