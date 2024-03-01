const userModel = require("../../model/UserModel");
const customReferences = require("../../references/customReferences");
const cors=customReferences.cors;
const formData = customReferences.multer();
customReferences.app.post("/signup", formData.none(), async (req, res) => {
  const existingUser = await userModel.findOne({ email: req.body.email });
  if (existingUser) {
    return res.json({
      "save": true,
      "newUser": "A user with same email is already exist.",
    });
  } else {
    const newUser = new userModel(req.body);
    const result = await newUser.save();
    const token = customReferences.jwt.sign({ _id: result._id }, customReferences.secretKey);
    if (result) {
      res.json({ "save": true, "newUser": result, "token": token });
    } else {
      res.json({ "save": false });
    }
  }
});
customReferences.app.post("/login", formData.none(), async(req, res) => {
  console.log('login req',req.body.email);
  try{
  const {email,password}=req.body;
  const user=await userModel.findOne({email:email})
  if(!user){
    return res.json({match:false,message:"user not found"})
  } else if(!user.email==email){
    return res.json({match:false,message:"invalid email"})
  } else{
    const token=customReferences.jwt.sign({_id:user._id},customReferences.secretKey);
    const userResponse = {
      fullname: user.fullname,
      email: user.email,
      _id:user._id 
    };

    res.json({ "match": true, "userData": userResponse, "token": token });  }
} catch (error) {
    console.error("Error:", error);
    res.status(500).json({ match: false, message: "An error occurred" });
  }
});