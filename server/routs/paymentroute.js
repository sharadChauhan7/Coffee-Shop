const express = require('express');
const router = express.Router();
require('dotenv').config({path:'./.env'});
const { checkout,verification } = require('../controllers/payment.controller');



router.post('/checkout', checkout);
router.post('/verification', verification);
router.get('/key',(req,res)=>res.send({key_id:process.env.RAZORPAY_KEY_ID}))

module.exports = router;