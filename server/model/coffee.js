const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  region: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  flavor_profile: {
    type: [String], 
    required: true,
  },
  grind_option: {
    type: [String], 
    required: true,
  },
  roast_level: {
    type: String,
    required: true,
    enum: ["Light", "Medium", "Dark"], 
  },
  image_url: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/, 
  },
}, { timestamps: true });

const Coffee = mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;
