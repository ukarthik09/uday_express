const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
})

app.post("/about", (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

app.listen(2000, () => {
    console.log("runniingg");

})