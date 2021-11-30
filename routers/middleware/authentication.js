const jwt =require("jsonwebtoken");
require(dotenv.congig())
const SECRT_KEY=process.env.SECRT_KEY;

const authentication =(req,res,next)=>{
    try {
        if(!req.headers.authentication)
        return res.status(403).json({message:"forbidden"})
        const token=req.headers.authentication.split(" ")[1];
        const parssedToken=jwt.verify(token,SECRT_KEY);
        req.token=parssedToken;
        next()
    }catch(error){
        res.status(403).json(error)
    }
}
module.exports=authentication;