const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env._URL;

const app = express();

app.use(express.json());

async function dbConnect() {
  await mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  console.log("Connected to Mongo with Mongoose");
}

async function main() {
  await dbConnect();

  app.use("/blog", require("./routes/postRoutes")); //API Post
  app.use("/blog", require("./routes/commentRoutes")); //API Comments
  app.use("/blog", require("./routes/offensivewordRoutes")); //API Offensivewords

  app.listen(3000, () => console.log("Server started in port 3000"));
}

main();
