//This File Create To Put CRUD Oprations Depand on userSchema
const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = Number(process.env.SALT);

const regester = async (req, res) => {
  const { email, password, role } = req.body;
  const saveEmail = email.toLowerCase();
  console.log(saveEmail);
  const savePassword = await bcrypt.hash(password, SALT);
console.log(savePassword);
  const newUser = new userModel({
    email: saveEmail,
    password: savePassword,
    role
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const login = (req, res) => {
  const {  email, password } = req.body;

  userModel
    .findOne({ email } )
    .then(async (result) => {
      if (result) {
        console.log(result);
        console.log(email);
        if (result.email == email) {
          const secret = process.env.SECRT_KEY;
          const hashedpass = await bcrypt.compare(password, result.password);
          // console.log(hashedpass);
          // console.log(secret);
          const payload = {
            role: result.role,
            id: result._id,
            username: result.username,
            email: result.email,
            
          };
          // console.log("afterpayload",result);
          option = {
            expiresIn: "6000000m",
          };

          const token = await jwt.sign(payload, secret, option);
          // console.log("thistoken",token);
          if (hashedpass) {
            res.status(200).json({ result, token });
          } else {
            res.status(404).json("worng email or password");
          }
        } else {
          res.status(404).json("worng email or password");
        }
      } else {
        res.status(400).json("email does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { regester, login };
