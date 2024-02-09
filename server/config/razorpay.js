const Razorpay=require('razorpay');

require('dotenv').config({path:'./.env'});

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  module.exports=instance;
  