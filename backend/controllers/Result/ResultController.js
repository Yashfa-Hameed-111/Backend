const ResultModel = require('../../model/ResultModel');
const customReferences = require("../../references/customReferences");
const formData = customReferences.multer();
customReferences.app.post('/result',formData.none(),async (req, res) => {
  try {
    const newResult = new ResultModel(req.body);
    const savedResult = await newResult.save();
    res.json({ save: true, newResult: savedResult });
  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ save: false, error: error.message });
  }
});