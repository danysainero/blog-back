const MongoClient = require('mongodb').MongoClient; 

const express = require('express');

const url = "mongodb://localhost:27018/blogDB";

const app = express();

app.use(express.json());

async function dbConnect() {

    let conn = await MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("Connected to Mongo");

    posts = conn.db().collection('post');
}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();