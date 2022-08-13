const express = require('express')
const Contenedor = require('../DB/CRUDproductos');

const Products = express();
const ApiProducts = new Contenedor()

Products.get('/:id?', async (req, res) => {
    console.log('Hey esta en el get de los productos')
    const answerData = await ApiProducts.getAll();
    res.send(answerData)
})

Products.post('/', (req, res) => {
    console.log('Esta en el post de los productos')
    const Objeto = req.body
    const data = ApiProducts.save(Objeto);
    res.send(data);
})

Products.put('/:id', (req, res) => {
    console.log('Esta en el put de los productos')
    const id = req.params.id
    const body = req.body
    ApiProducts.updateById(id, body);
})

Products.delete('/:id', (req, res) => {
    console.log('Esta en el delete de los productos')
    const id = req.params.id
    ApiProducts.deleteById(id);
})
Products.delete('/', (req, res) => {
    console.log('Esta en el delete all de los productos')
    ApiProducts.deleteAll();
})
module.exports = Products;
