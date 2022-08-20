const carrito = require('./mongoose/carrito')
const mongoose = require('mongoose');


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


class ContenedorCar {

    async save(Objeto) {
        try {
            console.warn('Esta en la creacion de un nuevo Carrito')
            const Carrito = new carrito(Objeto)
            const response = await Carrito.save()
            return (response)
        } catch (e) {
            console.error(e)
        }
    }
    async getAll() {
        try {
            console.warn('Esta en la obtencion de todos los carritos')
            const AllData = await carrito.find({})
            return (AllData)

        } catch (e) {
            console.error(e)
        }
    }
    async getById(id) {
        try {
            const getID = await carrito.find({ _id: id })
            return (getID)
        } catch (e) {
            console.error(e)
        }
    }
    async deleteById(id) {
        try {
            console.warn('Esta es la eliminacion de un carrito por ID')
            const deleteById = await carrito.deleteOne({ _id: id })
            return (deleteById)
        } catch (e) {
            console.error(e)
        }
    }
    async deleteAll() {
        try {
            console.warn('Esta en la eliminacon de todos los carrito')
            const deleteAll = await carrito.deleteMany({})
            return (deleteAll)
        } catch (e) {
            console.error(e)
        }
    }
    async postSave(id, body, idProducto) {
        try {
            console.warn('Actualizacion de un producto en un carrito')
            const CarritoUpdate = await carrito.findOneAndUpdate({ _id: id }, { productos: body }, { new: true },)
            return (CarritoUpdate)
        } catch (e) {
            console.error(e)
        }
    }
};

conexion()

module.exports = ContenedorCar