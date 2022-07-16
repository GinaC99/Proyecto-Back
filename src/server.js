const Users = require('./routes/users.js')
const Carrito = require('./routes/carrito.js')
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/productos', Users);
app.use('/api/carrito', Carrito);


app.listen(8080, () => {
    console.log('Hey el server esta funcionando en el puerto 8080')
})
