const express = require('express');
const errorHandler = require('./middlewares/errorHandler-midleware');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbConnect = require('./db-connect');
dotenv.config();
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api', require('./routes/index'));

(async function main() {
  await dbConnect();
  app.listen(process.env._PORT);
})();

module.exports = app;
