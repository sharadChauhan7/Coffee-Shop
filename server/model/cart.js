const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User=require('./user');

const CartSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true,
    },
    service:{
        type:String,
        required:true,
    },
    image_url:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model('cart',CartSchema);
