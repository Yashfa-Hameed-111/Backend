const customReferences = require('./references/customReferences');
require("./database/config");
require('./controllers/Feedback/FeedbackController')
require("./controllers/Auth/AuthController");
require('./controllers/Result/ResultController');
require('./controllers/Profile/ProfileController');
customReferences.app.listen(8005);