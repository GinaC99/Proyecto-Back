const productsActions = require('./../DB/CRUDproductos')
const productSchema = require('./../DB/mongoose/productos')

class productsDaos extends productsActions {
    constructor() {
        super('prductos', productSchema);
    }
}

export { productsDaos };