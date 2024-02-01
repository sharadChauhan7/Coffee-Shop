const User = require("../model/user");
const passport = require("passport");

module.exports.Login = async (req, res, next) => {
  // Add an empty cart in the session if there is no cart

  console.log(req.user);
  console.log(req.session);
    res.send("LogedIn");
};

module.exports.Signup = async (req, res, next) => {
  try {
    let { username, email, phone, password } = req.body;
    let newUser = new User({ username, email, phone });
    console.log(newUser);
    let result = await User.register(newUser, password);
    res
      .status(200).send({result:true,message:"User Created"});
  } catch (e) {
    console.log(e);
    res.status(400).send("Error");
  }
};

module.exports.Logout = async (req, res, next) => {
  req.logout(function(err) {
    if (err) { res.send("err"); }
    console.log(req.user);
    res.status(200).send('LogedOut');
  });
}

module.exports.Islogin = async (req, res, next) => {
  if(req.user){
    console.log(req.user);
    res.status(200).send({result:true});
  }
  else{
    res.status(200).send({result:false});
  }
}
