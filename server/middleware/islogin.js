
module.exports.isAuthenticated=(req, res, next)=>{
  if (req.isAuthenticated()) {      // User does not have an active session
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
}
