const mongoose = require('mongoose')

const productosCollections = 'productos';

const productoSchema = new mongoose.Schema({
    title: {type: String, require: true, max: 100},
    fecha: {type: String, require: true, max: 100},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    thumbnail: {type: String, require: true, max: 100}
})

const productos = mongoose.model(productosCollections, productoSchema)
module.exports = productos;