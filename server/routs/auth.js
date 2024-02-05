const express = require("express");
const router = express.Router();
const {Signup,Login}=require('../controllers/auth.controller.js');


router.post("/signup",Signup);
router.get('/login/:id',Login)

module.exports=router;