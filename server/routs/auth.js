const express = require("express");
const router = express.Router();
const passport = require("passport");
const {Login}=require('../controllers/auth.controller.js');

router.post("/login",Login);