const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

main()
.then((res)=>{console.log("Connection is up")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coffee');
}

// User Database Schema

const userSchema = new mongoose.Schema({
  phone:{
    type:Number,
    require:true,
    min:1000000000,
    max:9999999999,
  },
  email:{
    type:String,
  }
});

userSchema.plugin(passportLocalMongoose);
const User=mongoose.model("user",userSchema);

module.exports=User;