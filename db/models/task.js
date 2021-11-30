const mongoose=require("mongoose");

const task=new mongoose.Schema({
    name:{type:String},
    isDelete: { type: Boolean ,default: false},
    isComplet:{ type: Boolean,default: false},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})
module.exports=mongoose.model("Task",task)