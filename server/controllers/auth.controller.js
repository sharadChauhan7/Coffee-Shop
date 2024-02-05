const User = require("../model/user");
const passport = require("passport");

module.exports.Signup = async (req, res, next) => {
  try {
    let newUser = new User(req.body);
    await newUser.save();
    res
      .status(200).send({result:true,message:"User Created"});
  } catch (e) {
    console.log(e);
    res.status(400).send("Error");
  }
};
module.exports.Login = async (req, res, next) => {
  try {
    let {id}=req.params;
    let user = await User.find({email:id});
    res.status(200).send(user);
  }
  catch (e) {
    console.log(e);
    res.status(400).send("Error");
  }

}

