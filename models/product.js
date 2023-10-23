const db = require('../util/database');
const crypto = require('crypto');
const Cart = require('../models/cart.js');

module.exports = class Product {

    //Standard constructor similar to that you would see in Java.

    constructor(id, title, imageUrl, price, description) {

        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;

    }



    //Assign a random UUID to each item being saved, and push the item into the products.json file using the writeFile method. Otherwise, log any errors.
    save() {
        return db.execute
        ('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.description, this.imageUrl]
        );
    }

    static deleteById(){

    }

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    }

    static findById(id){
        return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
    }
}