const express = require("express");
const router = express.Router();
const {Setcart,Getcart}=require('../controllers/cart.controller.js');

router.get("/", Getcart);
router.post("/", Setcart);

module.exports=router;