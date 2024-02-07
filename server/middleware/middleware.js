const User = require('../model/user');
const Cart = require('../model/cart');
module.exports.clearCart=async (req,res,next)=>{
    let {userData}=req.body;
    let user= await User.find({email:userData});
    user=user[0];
    await Cart.deleteMany({_id:{$in:user.cart}});
    user.cart=[];
  await user.save();
    next();
}