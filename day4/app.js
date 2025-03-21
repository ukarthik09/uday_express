const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const arr = [{
    name: "tom",
    sal: 1200
},
{
    name: "jerry",
    sal: 3000
}]

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/user', (req, res) => {
    res.render('user', { arr: arr });
})

app.listen(1000, () => {
    console.log("runningg");

})