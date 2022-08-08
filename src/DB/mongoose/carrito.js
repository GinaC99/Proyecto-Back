const mongoose = require('mongoose')

const carritoCollection = 'carritoCompras';

const carritoSchema = new mongoose.Schema({
    productos:
        [
            {
                title: { type: String, require: true, max: 100 },
                fecha: { type: String, require: true, max: 100 },
                price: { type: Number, require: true, max: 100 },
                stock: { type: Number, require: true },
                thumbnail: { type: String, require: true  }
            }],
    fecha: { type: String, require: true, max: 100 }
})
const carrito = mongoose.model(carritoCollection, carritoSchema)
module.exports = carrito; 