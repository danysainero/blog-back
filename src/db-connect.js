const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env._URL;
const mongoose = require('mongoose');
const checkWordsOnLoad = require('./validators/check-ow-onLoad');
const checkAdminsOnLoad = require('./validators/check-admins-onLoad');

const connectToDb = async () => {
        await mongoose.connect(mongoURI,
            {
                auth: { 'authSource': 'admin' },
                user: 'admin',
                pass: 'admin',
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