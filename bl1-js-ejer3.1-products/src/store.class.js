const Product = require('./product.class');

// Aquí la clase Store
class Store {
    constructor(id) {
        this.id = id;
        this.products = new Array();
    }

    findProduct(id){
        return this.products.find(producte => producte.id === id)
    }


    addProduct(producto){
        if(!producto.name){
            throw 'El producto no contiene nombre'
        }
        if(!producto.price || producto.price < 0){
            throw 'El precio es incorrecto'
        }
        if(producto.units){
            if(!Number.isInteger(producto.units)){
                throw 'Las unidades deben ser numericas'
            }
            if(producto.units < 0){
                throw 'Las unidades son incorrectas'
            }
        }
        if(!Number(producto.price)){
            throw 'El precio debe ser numerico'
        }
        const newProd = new Product(
            this.maxId() + 1,
            producto.name,
            producto.price,
            producto.units
        )
        this.products.push(newProd)
        return newProd
    }

    maxId(){
        return this.products.reduce((max,producte) => producte.id > max ? producte.id : max,0)
    }

    delProduct(id){
        let product = this.findProduct(id)
        if(product === undefined){
            throw 'El producto no existe'
        }else if(product.units != 0){
            throw 'Las unidades no estan a 0'
        }else{
            let index = this.products.findIndex(producte => producte.id === id)
            return this.products.splice(index,0)
        }
    }
    changeProduct(data){
        let product = this.findProduct(data.id)
        if(data.name){
            product.name = data.name
        }
        if(data.price){
            product.price = data.price
        }
        if(data.units){
            product.units = data.units
        }
        return product
    }
    
    changeProductUnits(id, units){
        let product = this.findProduct(id)
        if(!product){
            throw 'El id no corresponde a ningun producto'
        }
        let calculo = product.units+units
        if(calculo < 0){
            throw 'Las unidades son incorrectas'
        }else{
            product.units = calculo
            return product
        }
    }

    totalImport(){
        let importe = this.products.reduce((total,precio) => total += precio.productImport(), 0);    // total = 35.35
        return importe
    }
    underStock(units){
        let productos = []
        for(let i = 0; i < this.products.length; i++){
            let producto = this.products[i]
            if(producto.units < units){
                productos.push(producto)
            }
        }
        return productos
    }
    orderByUnits(){
        let productosOrdenados=this.products.sort(function(producto1, producto2) {
            return producto1.units-producto2.units;
          });
          return productosOrdenados
    }

    orderByName(){
        let productosOrdenados=this.products.sort((producto1, producto2) => producto1.name.localeCompare(producto2.name));
        return productosOrdenados
    }

    toString(){
        let cadena = 'Almacen ' + this.id + ' => ' + this.products.length + ' productos: ' + this.totalImport().toFixed(2) + ' €\n'
        for(let i = 0; i < this.products.length; i++){
            let prod = this.products[i].toString() + '\n'
            cadena = cadena + ' - ' + prod
        }
        return cadena
    }

    toRender(product){
        let cadena = 'Almacen ' + this.id + ' => ' + product.length + ' productos: ' + this.totalImport().toFixed(2) + ' €\n'
        for(let i = 0; i < product.length; i++){
            let prod = product[i].toString() + '\n'
            cadena = cadena + ' - ' + prod
        }
        return cadena
    }
}
// y tendrás que exportarla


module.exports = Store;