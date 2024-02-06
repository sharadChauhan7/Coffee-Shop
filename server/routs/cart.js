const express = require("express");
const router = express.Router({ mergeParams: true });
const {Setcart,Getcart}=require('../controllers/cart.controller.js');
const {clearCart}=require('../middleware/middleware.js');

router.get("/:id", Getcart);
router.post("/",clearCart, Setcart);

module.exports=router;