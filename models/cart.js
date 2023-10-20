const fs = require('fs');
const path = require('path');
const {compileFileClient} = require("pug");

/*

CALLBACK FUNCTIONS are asynchronous equivalents for a function, providing non-blocking code blocks. Maintains performance in Single Threaded NodeJS
Whenever a task is done, this function will be called automatically.

 */

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
    );
module.exports = class Cart {

    //Add an existing product to the cart, using ID to map the product.
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, data) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(data);
            }
            const existingIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct + 1;
                cart.products = [...cart.products];
                cart.products[existingIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            //Determine total price of the cart by adding product price (+) converts value from String to Number.
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        });


    }

    static deleteProduct(id, price){
        fs.readFile(p, (err, data) => {
            if(err){

            }
            const updatedCart = {...JSON.parse(data)};
            const product = updatedCart.products.findIndex(prod => prod.id === id);
            const prodQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);

            updatedCart.totalPrice = updatedCart.totalPrice - price * prodQty;

            fs.writeFile(p, JSON.stringify(updatedCart), err =>{
                console.log(err);
            });
        });
    };

    static getCart(cb){
        fs.readFile(p, (err, data) => {
           const cart = JSON.parse(data);
           if(err){
               cb(null);
           } else {
               cb(cart);
           }
        });
    }

};