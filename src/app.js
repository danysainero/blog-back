const mongoose = require('mongoose');

const express = require('express');

const url = "mongodb://localhost:27018/blogDB";

const app = express();

app.use(express.json());

async function dbConnect() {

    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log("Connected to Mongo with Mongoose");

}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();