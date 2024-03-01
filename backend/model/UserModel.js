const customReferences = require('../references/customReferences');
const userSchema = customReferences.mongoose.Schema({
    "fullname":String,
    "email":String,
    "password":String,
   });
module.exports = 
customReferences.mongoose.model('users',userSchema)
