const res = require('express/lib/response');
const fs = require('fs')

class Contenedor {
    constructor() {
        this.ruta = `./carrito.txt`;
    }

    async save(Objeto) {
        console.log('Esto es el save')
        let idProducto
        let productos = []
        const sendData = {}
        const data = []
        try {
            const archivo = await fs.promises.readFile(this.ruta, 'utf-8')
            productos = JSON.parse(archivo)
        } catch (e) {
            const archivo = fs.promises.writeFile(this.ruta, '')
        }
        let getAllData = await this.getAll()
        try {
            getAllData.map((responsedata) => {
                Object.keys(responsedata).map((responseKeysData) => {
                    if (responseKeysData === 'id') {
                        if (idProducto) {
                            if (idProducto < responsedata[responseKeysData]) {
                                idProducto = responsedata[responseKeysData]

                            }
                        }
                    }
                })
            })
            if (idProducto >= 1) {
                const id = idProducto + 1
                sendData['id'] = id
            }
        } catch (e) {
            sendData['id'] = 1
        }
        data.push(Objeto)
        sendData['productos'] = data
        sendData['timestamp'] = new Date()
        productos.push(sendData)
        await fs.promises.writeFile(this.ruta, JSON.stringify(productos))
        return (sendData.id)
    }

    async getAll() {
        console.log('Esto es el getAll')
        try {
            const contenidoId = await fs.promises.readFile(this.ruta, 'utf-8')
            const array = JSON.parse(contenidoId);
            return array;
        } catch (e) {
            console.log('Opps', e)
        }
    }

    async getById(id) {
        console.log('Esto es el get by Id', id)
        let productos;
        try {
            const archivo = await fs.promises.readFile(this.ruta, 'utf-8')
            const arrayObjetos = JSON.parse(archivo)
            arrayObjetos.filter((res) => {
                if (res.id === parseInt(id)) {
                    productos = (res.productos)
                }
            })
            return (productos)
        } catch (e) {
            return ('no existe el id')
        }
    }

    async deleteById(id) {
        console.log('esto es el delete de un carrito, por su ID')
        try {
            const archivo = await fs.promises.readFile(this.ruta, 'utf-8')
            const array = JSON.parse(archivo)
            const data = array.filter((res) => res.id != id)
            fs.unlinkSync(this.ruta, e => {
                console.log(e)
            })
            fs.writeFileSync(this.ruta, JSON.stringify(data))
        } catch (e) {
            console.log('Ops', e)
            return ('no existe e id del carrito selecionado')
        }
    }

    async postSave(id, body) {
        console.log('Esto es el save por id')
        let productos;
        let ids;
        let timestamp;
        const Objecto = {}
        const alldata = []
        try {
            const data = await this.getAll()
            data.filter((res) => {
                if (res.id === parseInt(id)) {
                    productos = (res.productos)
                    ids = res.id
                    timestamp = res.timestamp
                }
                else {
                    alldata.push(res)
                }
            })
            productos.push(body)
            Objecto['id'] = ids
            Objecto['timestamp'] = timestamp
            Objecto['productos'] = productos
            alldata.push(Objecto)
            await fs.promises.writeFile(this.ruta, JSON.stringify(alldata))
            return (alldata)
        } catch {
        }
        
    }

    async deleteByIdProd(idcarr, idProduc) {
        console.log('Este es el delete id')
        const data = await this.getAll()
        const alldata = []
        let ids;
        let timestamp;
        const productos = []
        const sendData = {}
        data.filter((res) => {
            if (res.id === parseInt(idcarr)) {
                if (res.productos.length > 1) {
                    res.productos.map((products) => {
                        // console.log(products)
                        if (products.id !== parseInt(idProduc)) {
                            productos.push(products)
                        }
                    })
                }
                ids = res.id
                timestamp = res.timestamp
            }
            else {
                alldata.push(res)
            }
        })
        sendData['id'] = ids
        sendData['productos'] = productos
        sendData['timestamp'] = timestamp
        alldata.push(sendData)
        console.log(alldata)
        await fs.promises.writeFile(this.ruta, JSON.stringify(alldata))
        return(alldata)
    }

};

module.exports = { Contenedor }