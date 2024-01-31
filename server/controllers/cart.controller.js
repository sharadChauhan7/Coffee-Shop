module.exports.Setcart=(req,res,next)=>{
  req.session.cart=req.body;
    res.status(200).send("Cart Set");
}

module.exports.Getcart=(req,res,next)=>{
  res.status(200).send(req.session.cart);
}