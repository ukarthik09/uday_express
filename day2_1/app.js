const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/data", (req, res) => {
    const data = req.body;
    res.json(data);

})

app.get('/', (req, res) => {
    res.sendFile('./views/form.html', { root: __dirname });
})

app.listen(2000, () => {
    console.log("runningg");

})