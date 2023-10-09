const fs = require('fs');
const path = require('path');

module.exports = class Product {

    constructor(title, price, description) {

        this.title = title;
        this.price = price;
        this.description = description;

    }

    save(){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

        fs.readFile(p, (err, data) => {
            let products = [];
            if(!err) {
                products = JSON.parse(data);
            }

            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {

        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.readFile(p, (err, data) => {
            if(err){
                return [];
            }
            return JSON.parse(data);
        })

    }

}