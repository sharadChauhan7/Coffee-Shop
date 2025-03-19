const express = require('express');
const app=express();
const path =require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors=require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({path:'./.env'});

const port =process.env.PORT;

app.use(cors(
  {
    origin: ["http://localhost:5173","https://browncoffeeshop.netlify.app"],
    methods:["POST","GET"],
    credentials:true,
  }
));

const auth=require('./routes/auth.js');
const cart=require('./routes/cart.js');
const payment=require('./routes/paymentroute.js');
const instance = require('./config/razorpay.js');
const coffee = require('./routes/coffee.js');



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser("secretcode"));

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URL,
  collectionName: 'sessions',
  touchAfter: 24 * 3600,
});
const sessionOption={
  store,
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
app.get('/',(req,res)=>{
  res.json("Working");
})


app.use('/auth',auth);
app.use('/cart',cart);
app.use('/payment',payment);
app.use('/coffee',coffee);


app.listen(port,()=>{
    console.log("Port is Listening to "+port);
});

