const FeedbackModel = require('../../model/FeedbackModel');
const customReferences = require("../../references/customReferences");
const formData = customReferences.multer();
customReferences.app.post('/feedback',formData.none(),async (req, res) => {
  const newFeedback = new FeedbackModel(req.body);
  const feedback = await newFeedback.save();
  if (feedback) {
    res.json({ "save": true, "newFeedback": feedback });
  } else {
    res.json({ "save": false });
  }
});