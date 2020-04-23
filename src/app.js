const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbConnect = require('./db-connect');
dotenv.config();

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

(async function main() {
  await dbConnect();
  app.listen(process.env._PORT);
})();

module.exports = app;
