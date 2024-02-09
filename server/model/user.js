const mongoose = require('mongoose');
const cart=require('./cart');

main()
.then((res)=>{console.log("Connection is up")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coffee');
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