const User = require('../model/user');

module.exports.Login= async (req,res,next)=>{
    console.log(req.body);
    res.send("Got it");
}
