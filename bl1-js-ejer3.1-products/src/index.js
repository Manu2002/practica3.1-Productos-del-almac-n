'use strict'

const Store = require("./store.class");

// Creamos un nuevo almacén con id 1
// Antes deberás haber importado la 
// clase Store para poder usarla

const myStore = new Store(1);

const prod1 ={
    name: 'tv',
    price: 399.95,
    units:3
}

const prod2 ={
    name: 'tv',
    price: 399.95,
    units:3
}

try{
    let product1 = myStore.addProduct(prod1)
    myStore.delProduct(product1.id)
}catch(error){
    console.error(error);
}
myStore.findProduct(1);
// Añadimos los 4 objetos que nos piden

// Hacemos las 5 modificaciones


// Mostramos por consola todo lo que nos piden

// Eliminamos los 2 productos

// Mostramos por consola todo lo que nos piden

