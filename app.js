require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Server contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alejandro Perdomo',
        titulo: 'Tomorrowland'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alejandro Perdomo',
        titulo: 'Tomorrowland'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alejandro Perdomo',
        titulo: 'Tomorrowland'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});