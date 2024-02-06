const cart = require("../model/cart");
const User =require("../model/user");
module.exports.Setcart= async (req,res,next)=>{

  // Middleware to set cart Delete all cart data and then set new cart data
    let {cartData,userData} = req.body;
    let user= await User.find({email:userData});
    user=user[0];
    user.cart=[];
    if(cartData){
      console.log(cartData);
      cartData.map(async(data,index)=>{
        data = new cart(data);
        user.cart.push(data);
        await data.save();
      })
      await user.save();
    }
    // console.log(result);
    res.status(200).send("Cart Set");
}

module.exports.Getcart=async (req,res,next)=>{
  // Extract email from params

  let {id}=req.params;
  let userData=await User.find({email:id}).populate('cart');
  let cart =userData[0].cart;
  res.status(200).send(cart);
}