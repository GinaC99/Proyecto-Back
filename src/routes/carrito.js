const express = require('express')
const Contenedor = require('./../DAOS/carritoDaos')

const CarritoCompras = express();
const Carrito = new Contenedor()

CarritoCompras.get('/', async (req, res) => {
    console.log('Hey esta en el get del carrito')
    const answerData = await Carrito.getAll();
    res.send(answerData)
})

CarritoCompras.get('/:id/productos', async (req, res) => {
    console.log('Hey esta en el get por Id del carrito')
    const id = req.params.id
    const answerData = await Carrito.getById(id);
})

CarritoCompras.post('/', async (req, res) => {
    console.log('Esta en el post de carros')
    const Objeto = req.body
    const data = await Carrito.save(Objeto);
})

CarritoCompras.put('/:id', (req, res) => {
    console.log('Esta en el put de los carritos')
    const id = req.params
    Carrito.updateById(id);
})

CarritoCompras.delete('/:id', (req, res) => {
    console.log('Esta en el delete de los carritos')
    const id = req.params.id
    const data = Carrito.deleteById(id);
})

CarritoCompras.delete('/', (req, res) => {
    console.log('Esta en el delete all de los carritos')
    Carrito.deleteAll();
})

CarritoCompras.post('/:id/productos', (req, res) => {
    const id = req.params.id
    const body = req.body
    const data = Carrito.postSave(id, body)
    res.send(data)
})

module.exports = CarritoCompras;
