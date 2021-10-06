const Product = require('./product.class');

// Aquí la clase Store
class Store {
    constructor(id) {
        this.id = id;
        this.products = new Array();
    }

    findProduct(id){
        return this.products.find(producto => producto.id === id)       
    }

    addProduct(product){
        if (!product.name){
            throw 'ERROR no se le pasa name'
        } 
        if(!product.price){
            throw 'Error no hay un price'
        }
        if (!isNaN(product.price)){
            if (product.price < 0){
                throw 'ERROR no se le pasa price o no es un número positivo'
            } 
        } else {
            throw 'Error'
        }
        if (product.units){
            if (product.units < 0 || !Number.isInteger(product.units)){
                throw 'ERROR se le pasa units pero no es un número entero positivo'
            }
        }
        let newProduct = new Product(this.maxId()+1,product.name,product.price,product.units)
        this.products.push(newProduct)
        return newProduct;
    }
    
    maxId(){
        return this.products.reduce((max,product) => product.id > max ? product.id : max, 0);
    }

    delProduct(id){
        let producto = this.findProduct(id)
        if(!producto || producto.units <= 0){
            throw 'error'
        } else {
            let index = this.products.findIndex(prod => prod.id === id)
            return this.products.splice(index,0);
        }
    }

    changeProduct(product){
        let productoId = this.findProduct(product.id)
        if(product.name){
            productoId.name = product.name
        }
        if(product.price){
            productoId.price = product.price
        }
        if(product.units){
            productoId.units = product.units
        }
        return productoId
    }

    changeProductUnits(id, units){
        
    }
}
// y tendrás que exportarla


module.exports = Store;