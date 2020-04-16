const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env._URL;
const PORT = process.env._PORT || 3001;
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function dbConnect() {
  const dbconnection = await mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });  
}

async function main() {
  await dbConnect();

  app.use("/blog", require("./routes/postRoutes")); //API Post
  app.use("/blog", require("./routes/commentRoutes")); //API Comments
  app.use("/blog", require("./routes/offensivewordRoutes")); //API Offensivewords

  app.listen(PORT, () => console.log(`Mongo & Server started in port ${PORT}`));
}

main();
