const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env._URL;
const mongoose = require("mongoose");
const checkWordsOnLoad = require("./validators/checkWordsOnLoad");
const checkAdminsOnLoad = require("./validators/checkAdminsOnLoad");

const connectToDb = async () => {
    try {
        await mongoose.connect(mongoURI,
            {
                auth: { "authSource": "admin" },
                user: "admin",
                pass: "admin",
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
            
            await checkWordsOnLoad.checkWordsOnLoad();
            await checkAdminsOnLoad.checkAdminsOnLoad();

    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDb;