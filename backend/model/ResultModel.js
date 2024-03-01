const customReferences = require('../references/customReferences');
const resultSchema=customReferences.mongoose.Schema({
    result: {
        type: String
      }
})
module.exports=customReferences.mongoose.model('result',resultSchema);