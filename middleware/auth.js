const jwt = require("jsonwebtoken");

const auth=(req,res,next)=>{
   try{
    const token=req.cookies.ehop;
    const varifyUser = jwt.verify(token.Token,"987654321123456789");
    next();
   }
   catch(error){
    res.status(401).send({success:false,Response:"Please Login first to access this endpoint!"});
   }
}

module.exports=auth;