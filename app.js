const express = require('express');
const app = express();
const { sequelize } = require('./app/models/index');
var cors = require('cors')

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()) // Use this after the variable declaration
// Rutas
app.use(require('./app/routes'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log("Se ha establecido la conexión");
    })
});