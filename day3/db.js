const { log } = require('console');
const mongoose = require('mongoose');

const connectMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/MVC_p3").then((result) => {
        console.log("connected");

    }).catch((err) => {
        console.log(err);
        console.log(err.name);


    });
}

module.exports = connectMongo;