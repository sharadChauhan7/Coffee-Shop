const express = require("express");
const router = express.Router({ mergeParams: true });
const {Setcart,Getcart,EmptyCart}=require('../controllers/cart.controller.js');
const {clearCart}=require('../middleware/middleware.js');

router.get("/:id", Getcart);
router.post("/",clearCart, Setcart);
router.post("/emptycart" , clearCart, EmptyCart);

module.exports=router;