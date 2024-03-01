const customReferences = require('../references/customReferences');
const feedbackSchema = customReferences.mongoose.Schema({
    "feedback":String
 });
module.exports = customReferences.mongoose.model('feedback',feedbackSchema)
