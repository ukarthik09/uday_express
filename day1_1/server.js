const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("hello");
})
app.listen(2000, () => {
    console.log("connected");

})