const fs = require('fs');
const path = require('path');
const crypto = require('crypto')

const p = path.join(
    //Used to get the main module of Node application
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    //Using the filesystem import, read the file from above path and extract the data, if there's an error, return call back an empty array. If no error,
    //use call back to parse the data into JSON.
    fs.readFile(p, (err, data) => {
        if(err){
            return cb([]);
        }
        cb(JSON.parse(data));
    })
}

module.exports = class Product {

    //Standard constructor similar to that you would see in Java.

    constructor(title, imageUrl, price, description) {

        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;

    }


save() {

        //Assign a random UUID to each item being saved, and push the item into the products.json file using the writeFile method. Otherwise, log any errors.

    this.id = crypto.randomUUID().toString();
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
        })
    });
}

//The callback function is passed as an argument to another function and is executed once the other function has completed its task. In this case, it is used to
    // handle an asynchronous function of reading from a file.
    // A callback function is a function you pass as an argument to another function to handle the result of an async operation when it's ready.
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

//Find by id is using the default node method of find to match a product in the products json file with the id object passed in the argument.
    //If an id is matched, the data is returned using the callback function.
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(products => products.id === id);
            cb(product);
        });
    }
};