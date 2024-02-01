const mongoose=require('mongoose');
const Schema=mongoose.Schema;

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
        required:true
    },
    image:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model('cart',CartSchema);
