const express = require('express');
const app=express();
const path =require('path');
const port =3000;
const session = require('express-session');
const passport = require('passport');
const locatStrategy=require('passport-local');
const cors=require('cors');
const cookieParser = require('cookie-parser');


const User=require('./model/user');

const auth=require('./routs/auth.js');
const cart=require('./routs/cart.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(cookieParser("secretcode"))

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
app.use(passport.session());

passport.use(new locatStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth',auth);
app.use('/cart',cart);


app.listen(port,()=>{
    console.log("Port is Listening");
});

