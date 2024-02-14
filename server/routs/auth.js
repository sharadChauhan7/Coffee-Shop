const express = require("express");
const router = express.Router();
const {Signup,Login,UpdateUser}=require('../controllers/auth.controller.js');


router.post("/signup",Signup);
router.get('/login/:id',Login);
router.post('/update',UpdateUser)

module.exports=router;