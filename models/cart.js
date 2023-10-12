const fs = require('fs');
const path = require('path');
const {compileFileClient} = require("pug");

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
    );
module.exports = class Cart {
    static addProduct(id, productPrice){
        fs.readFile(p, (err, data) => {
            let cart = {products: [], totalPrice: 0};
            if(!err) {
                cart = JSON.parse(data);
            }
            const existingIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingIndex];
            let updatedProduct;
            if(existingProduct) {
                updatedProduct = {...existingProduct }
                updatedProduct.qty = updatedProduct + 1;
                cart.products = [...cart.products];
                cart.products[existingIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        });


    }

}