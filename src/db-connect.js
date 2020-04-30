const mongoose = require('mongoose');
const checkWordsOnLoad = require('./validators/check-ow-onLoad');
const checkAdminsOnLoad = require('./validators/check-admins-onLoad');

const connectToDb = async () => {
        await mongoose.connect(process.env._URL,
            {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
            
          const responseWordsOnLoad =  await checkWordsOnLoad.checkWordsOnLoad();
          const responseAdminsOnLoad =   await checkAdminsOnLoad.checkAdminsOnLoad();
          
          console.log(`Server Up on port ${process.env._PORT}`,' =====>',responseWordsOnLoad,' =====>', responseAdminsOnLoad);
}

module.exports = connectToDb;