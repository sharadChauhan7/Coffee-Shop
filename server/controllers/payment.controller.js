const Razorpay = require("razorpay");
const instance = require("../config/razorpay.js");

module.exports.checkout = async (req, res) => {
  try{
    let amount=req.body.amount;
    const options = {
        amount: amount, // amount in the smallest currency unit
        currency: "INR",
      };
      let result= await instance.orders.create(options);
        console.log(result);
        res.status(200).send(result);
  }
  catch(e){
    console.log(e);
    res.status(400).send("Error");
  }
};

module.exports.verification = async (req, res) => {
  try{
      console.log(req.body);
        res.status(200).send("Verification Successfull");
  }
  catch(e){
    console.log(e);
    res.status(400).send("Error");
  }
};
