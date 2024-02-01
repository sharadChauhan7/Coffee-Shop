module.exports.Setcart=(req,res,next)=>{
    // req.body=JSON.parse(req.body);
    // req.session.cart=req.body;

    // console.log(req.session.cart);
    console.log(req.session);
    req.session.cart=req.body;
    console.log(req.session);
    console.log("Set Cart");
    res.status(200).send("Cart Set");
}

module.exports.Getcart=(req,res,next)=>{
  console.log(req.session);
  console.log("Get Cart");
  res.status(200).send(req.session.cart);
}