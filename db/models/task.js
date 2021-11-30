const mongoose=require("mongoose");

const task=new mongoose.Schema({
    name:{type:String},
    isdel:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    userId:{type:String}
})
module.exports=mongoose.model("Task",task)