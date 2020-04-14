
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes/routes");

const mongoURI =
  "mongodb://admin:admin@localhost:27018/blogDB?authSource=admin";
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

  app.use("/blog", routes);

  app.listen(3000, () => console.log("Server started in port 3000"));
}

main();
