const express = require("express");
const router = express.Router();
const passport = require("passport");
const {Login,Signup,Islogin}=require('../controllers/auth.controller.js');

router.post("/login",passport.authenticate('local', { failureRedirect: 'http://localhost:5173/store' }),Login);

router.post("/signup",Signup);
router.get("/islogin",Islogin);

module.exports=router;