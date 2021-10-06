'use strict'

const Store = require('./store.class')

const myStore = new Store(1)

const prod1 = {
    name: 'TV Samsung MP45',
    price: 345.95,
    units: 3,
}

const prod2 ={
    name: 'Ábaco de madera',
    price: 245.95,
    units: 0
}
const prod3 = {
    name: 'impresora Epson LX-455',
    price: 45.95,
    units: 0
}
const prod4 = {
    name: 'USB Kingston 16GB',
    price: 5.95,
    units: 45
}
    
    //añade los productos
    let TV = myStore.addProduct(prod1)
    let abaco = myStore.addProduct(prod2)
    let impresora = myStore.addProduct(prod3)
    let USB = myStore.addProduct(prod4)

    let cloneTV = TV
    let cloneAbaco = abaco
    let cloneImpresora = impresora
    let cloneUSB = USB

    //cambia en TV el precio por 325.90 y sus unidades pasarán a ser 8
try{

    cloneTV.price = 325.90
    myStore.changeProductUnits(cloneTV.id,+5)
    myStore.changeProduct(cloneTV)

}catch(error){
    console.error(error)
}

//al ábaco le sumamos 15 uds 
try{

    myStore.changeProductUnits(cloneAbaco.id,+15)
    myStore.changeProduct(cloneAbaco)

}catch(error){
    console.error(error)
}

//a la impresora le ponemos de precio 55.90 y de unidades -2
try{
    
    cloneImpresora.price = 55.90
    myStore.changeProductUnits(cloneImpresora.id,-2);
    myStore.changeProduct(cloneImpresora)

}catch(error){
    console.error(error)
}

//a la TV le restamos 10 unidades
try{
    
    myStore.changeProductUnits(cloneTV.id,-10)
    myStore.changeProduct(cloneTV)

}catch(error){
    console.error(error)
}

//al ábaco le cambiamos el nombre por 'Ábaco de madera (nuevo modelo)'
try{
    
    cloneAbaco.name = 'Ábaco de madera (nuevo modelo)'
    myStore.changeProduct(cloneAbaco)

}catch(error){
    console.error(error)
}

//mostrar por consola el almacén
    console.log(myStore.toString())

//mostrar por consola el texto 'LISTADO DEL ALMACÉN alfabético'
    console.log('\nLISTADO DEL ALMACÉN alfabético')
    console.log(myStore.orderByName().toString())

//eliminar la TV
try{
    myStore.delProduct(cloneTV.id)
    console.log(cloneTV.toString())
}catch(error){
    console.error(error)
}
   
//eliminar la impresora
try{
    myStore.delProduct(cloneImpresora.id)
    console.log(cloneImpresora.toString())
}catch(error){
    console.error(error)
}
    
//mostrar por consola el almacén ordenado por existencias
    console.log('\nLISTADO DEL ALMACÉN por existencias')
    console.log(myStore.orderByUnits().toString()+ '\n')  

//mostrar por consola los productos del almacén con menos de 10 unidades
    console.log('\nLISTADO DE PRODUCTOS CON POCAS EXISTENCIAS')
    console.log(myStore.underStock(10).toString() + '\n')

// Creamos un nuevo almacén con id 1
// Antes deberás haber importado la 
// clase Store para poder usarla

// Añadimos los 4 objetos que nos piden

// Hacemos las 5 modificaciones


// Mostramos por consola todo lo que nos piden

// Eliminamos los 2 productos

// Mostramos por consola todo lo que nos pide

module.exports = Store;