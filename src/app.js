const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const dbConnect = require('./db-connect');
dotenv.config();

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/blog", require("./routes/postRoutes")); //API Post
app.use("/blog", require("./routes/commentRoutes")); //API Comments
app.use("/blog", require("./routes/offensivewordRoutes")); //API Offensivewords */
app.use("/blog", require("./routes/userRoutes")); //API Offensivewords */
app.use("/blog", require("./routes/loginRoutes")); //API Offensivewords */


(async function main() {
  await dbConnect();
  app.listen(process.env._PORT, () => console.log(`Mongo & Server started in port ${process.env._PORT}`));
})();

module.exports = app;
