const userModel = require("../../model/UserModel");
const customReferences = require("../../references/customReferences");
const verifyToken=require('../../middleWares/MiddleWares')
const formData = customReferences.multer();
customReferences.app.get('/getProfileImage', verifyToken, async (req, res) => {
  console.log("get image req", JSON.stringify(req.query))
  try {
    const resultofdata = await userModel.findById(req.query.logegedId);
    console.log("in main", resultofdata.profileImage)
    const image = resultofdata.profileImage
    res.status(200).json(image);
  } catch (error) {
    console.error('Error profileImage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
