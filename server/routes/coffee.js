const express = require("express");
const router = express.Router({mergeParams:true});
const {getCoffee,addCoffee,getbyId} = require('../controllers/coffee.controller.js');

router.get('/:id',getbyId);
router.get('/',getCoffee);
router.post('/',addCoffee);


module.exports=router;