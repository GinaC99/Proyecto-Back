const carritoActions = require('./../DB/CRUDCarritos')
const carritoSchema = require('./../DB/mongoose/carrito')

class carritoDaos extends carritoActions {
    constructor() {
        super('carrito', carritoSchema);
    }
}

module.exports = carritoDaos;