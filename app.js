var express = require('express');
var app = express();

// en la solicitud de root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b> Mi </b> primer servidor http express');
});

// En localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Holi</b> Bienvenido a mi servidor http hecho con express');
});

// Cambiar el mensaje 404 modificando el middleware
app.use(function (req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe. Que tengas un buen día :)");
});

// inicie el servidor en el puerto 3000!
app.listen(3000, function () {
    console.log('Aplicación de ejemplo escuchando en el puerto 3000.');
});