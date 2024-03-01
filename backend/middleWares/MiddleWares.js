const customReferences=require('../references/customReferences');
const verifyToken=(req,res,next)=>{
    let token=req.headers['authorization'];
    console.log("token",token);
    if(token){
        token=token.split(' ')[1]
        console.log("split token",token)
       customReferences.jwt.verify(token,customReferences.secretKey,(error,valid)=>{
          if(error){
            res.status(401).json({'message':"Please provide a valid token."})
          }
          else{
            next()
          }
        })
      }else{
        res.status(403).json({ message: 'Please provide a token.' });
      }
}
module.exports={
    verifyToken:verifyToken
  }