const express = require('express');

const connectMongo = require('./db.js');

const router = require('./route/empRoute.js');
const { log } = require('console');

connectMongo();

const app = express();
app.use(express.json());

app.use('/emp', router);

app.listen(2000, () => {
    console.log("runningg");

})