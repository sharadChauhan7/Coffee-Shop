const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

main()
.then((res)=>{console.log("Connection is up")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coffee');
}
