# W08D03

## Packages used:
* express
* dotenv 
* jsonwebtoken
* mongoose 
* bcrypt 

## Modules:
### RoleSchema

```js
const mongoose = require("mongoose");

const role=new mongoose.Schema({
    role:{type:String,required:true},
    Permissions:{type:Array}
})

module.exports=mongoose.model("Role",role);
```

### UserSchema
``` js
const mongoose = require("mongoose");

const user =new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type: mongoose.Schema.Types.ObjectId, ref: "Role"},
    avter:{type:String},
})

module.exports=mongoose.model("User",user);
```

## ConectWithDB:
```js
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();
const DB_URI=process.env.DB_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
mongoose.connect(DB_URI,options).then(()=>{
    console.log("DB READ TO USE");
},
(err)=>{
    console.log(err);
}
)
```
![ ER Diagrm ](https://github.com/M0hammed-18/W08D03/blob/main/Digram/ERDiagram.png)

![UML Diagram ](https://github.com/M0hammed-18/W08D03/blob/main/Digram/UML.png)