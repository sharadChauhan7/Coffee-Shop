const express = require('express');
const app=express();
const path =require('path');
const port =3000;
const session = require('express-session');
const passport = require('passport');
const locatStrategy=require('passport-local');


const User=require('./model/user');

const auth=require('./routs/auth.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const sessionOption={
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires:Date.now()+1000*60*60*24*3,
    maxAge: 1000*60*60*24*3,
    httpOnly:true,
  }
}

app.use(session(sessionOption));

passport.use(new locatStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/login",async(req,res)=>{
    try{
        let {username,email,phone,password}=req.body;
        let newUser= await new User({username ,email ,phone});
        console.log(newUser);
        let result = await User.register( newUser, password);
        console.log(result);
        res.send("Got it");
    }
    catch(e){
        console.log(e);
        res.send("Error");
    }
})
// app.use("/",auth);

app.listen(port,()=>{
    console.log("Port is Listening");
});

