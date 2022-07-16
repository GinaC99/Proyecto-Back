const express = require('express')
const Contenedor = require('../API/actions.js');

const Products = express();
const ApiProducts = new Contenedor('usuario')

Products.get('/:id?', async (req, res) => {
    console.log('Hey esta en el get de los usuarios')
    const answerData = await ApiProducts.getAll();
    res.send(answerData)
})

Products.post('/', (req, res) => {
    console.log('Esta en el post de los usuarios')
    const Objeto = req.body
    const data = ApiProducts.save(Objeto);
    res.send(data);
})

Products.put('/:id', (req, res) => {
    console.log('Esta en el put de los carritos')
    const id = req.params.id
    const body = req.body
    ApiProducts.updateById(id, body);
})

Products.delete('/:id', (req, res) => {
    console.log('Esta en el delete de los carritos')
    const id = req.params.id
    ApiProducts.deleteById(id);
})
Products.delete('/', (req, res) => {
    console.log('Esta en el delete all de los carritos')
    ApiProducts.deleteAll();
})
module.exports = Products;
