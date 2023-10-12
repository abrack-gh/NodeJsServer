const fs = require('fs');
const path = require('path');
const crypto = require('crypto')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, data) => {
        if(err){
            return cb([]);
        }
        cb(JSON.parse(data));
    })
}

module.exports = class Product {

    constructor(title, imageUrl, price, description) {

        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;

    }


save() {
    this.id = crypto.randomUUID().toString();
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
        })
    });
}
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(products => products.id === id);
            cb(product);
        });
    }
};