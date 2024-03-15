const mongoose = require('mongoose');
const cart=require('./cart');
require('dotenv').config({path:'./.env'});



main()
.then((res)=>{console.log("Connection is up")})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_LOCAL);
}

// User Database Schema

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true,
  },
  phone:{
    type:Number,
    require:true,
    min:1000000000,
    max:9999999999,
  },
  email:{
    type:String,
  },
  cart:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cart"
  },],
  password:{
    type:String,
    require:true,
  },
  address:{
    type:String,
    require:true,
    default:"",
  },
});
const User=mongoose.model("user",userSchema);

module.exports=User;
