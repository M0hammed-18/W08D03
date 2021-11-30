//Create This File To Put Endpoint
const express = require("express");
const{create,getrole}=require("./../controllers/role")

const roleRouter=express.Router()

roleRouter.post("/create", create);
roleRouter.get("/show",getrole)

module.exports= roleRouter;
