const jwt = require("jsonwebtoken");

const auth=(req,res,next)=>{
   try{
    const token=req.cookies.eshop;
    const varifyUser = jwt.verify(token,"987654321123456789");
    next();
   }
   catch(error){
    res.status(401).send(error);
   }
}

module.exports=auth;