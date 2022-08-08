const mongoose = require('mongoose');
const carrito = require('./mongoose/carrito');
const productos = require('./mongoose/productos')
const conexion = async () => {
    try {
        const URL = 'mongodb://localhost:27017'
        let ruta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Db conectada')
    } catch (e) {
        console.error(e)
    }
}
const dataPrueba = {
    "title": " gdfgdfg",
    "fecha": "2022-07-16T04:33:14.205Z",
    "price": "6343453",
    "stock": "1",
    "thumbnail": "https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg?w=2000",
}
class Contenedor {
    async save(Objeto) {
        try {
            console.warn('Esta en la creacion de un nuevo Producto')
            const Products = new productos(Objeto)
            const response = await Products.save()
            console.log(response)
        } catch (e) {
            console.error(e)
        }
    }
    async getById (id){
        try{
            console.warn('Reaizacion de busqueda de un producto por Id')
            const IdProducts = await productos.find({_id: id})
            console.log(IdProducts)
        } catch (e){
            console.error(e)
        }
    }
    async getAll(){
        try{
            console.warn('Esta en la obtencion de todos los productos')
            const AllData = await productos.find({})
            console.log(AllData)
        } catch (e){
            console.error(e)
        }
    }
    async deleteById(id){
        try{
            console.warn('Esta es la eiminacion de un producto por ID')
            const deleteById = await productos.deleteOne({_id: id})
            console.log(deleteById)
        } catch(e){
            console.error(e)
        }
    }
    async deleteAll(){
        try{
            console.warn('Esta en la eliminacon de todos los productos')
            const deleteAll = await productos.deleteMany({})
            console.log(deleteAll)
        } catch(e){
            console.error(e)
        }
    }
}
conexion()
prueba = async () => {
    const Gina = new Contenedor
    // await Gina.save(dataPrueba)
    // await Gina.getAll()
    await Gina.deleteById('62f0444d4c033da95b1321fb')
}
prueba()
