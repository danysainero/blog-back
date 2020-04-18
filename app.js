const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const WordsValidator = require("./validators/offensive-words-list");
dotenv.config();
const mongoURI = process.env._URL;
const PORT = process.env._PORT || 3001;
const app = express();
const db = mongoose.connection;

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/blog", require("./routes/postRoutes")); //API Post
app.use("/blog", require("./routes/commentRoutes")); //API Comments
app.use("/blog", require("./routes/offensivewordRoutes")); //API Offensivewords

async function dbConnect() {
  const dbconnection = await mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  return db.readyState;
}

async function main() {
  let conectionState = await dbConnect();

  let initOffensiveWordsList = await WordsValidator.checkWordsOnLoad();

  app.listen(PORT, () => console.log(`Mongo & Server started in port ${PORT}`));
}

main();
