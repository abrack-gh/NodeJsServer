const Product = require("../models/product");
const json = require("../data/products.json");
const db = require('../util/database');
const Sequelize = require('sequelize');


exports.getEditProducts = (req, res, next) => {
    res.render('../views/admin/edit-product',
        {
            pageTitle: 'Edit Product',
            path: 'admin/edit-product',
            activeProduct: true,
            productCSS: true
        })
}

exports.getShop = (req, res, next) => {
    req.user.getProducts()
        .then((products) => {
            res.render('../views/admin/shop',
                {
                    prods: products,
                    pageTitle: 'Shop - Home',
                    path: '/'
                })
        })
        .catch(err => (console.log(err)));
}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false
        });
}

exports.postAddProduct = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
        })
    .then(result => {
        console.log(result);
        res.redirect('/admin/shop')
    })

        .catch(err => {
        console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    req.user.getProducts({where: {id: prodId}})
    // Product.findByPk(prodId)
        .then(products => {
            const product = products[0];
        if(!product){
           return res.redirect('/');
        }
        res.render('admin/edit-product',
            {
                pageTitle: 'Add Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
    });
};

exports.postEditProduct = (req, res, next) => {

    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImage = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Product.findByPk(prodId).then(product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.imageUrl = updatedImage;
        product.description = updatedDesc;
        return product.save();
    })
        .then(result => {console.log('UPDATED PRODUCT')})
        .catch(err => {console.log(err)})
    res.redirect('/admin/shop');
};

exports.postDeleteProduct = (req, res, next) => {

    const prodId = req.body.productId;
    Product.findByPk(prodId)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            console.log('ITEM DELETED');
            res.redirect('/admin/shop');
        })
        .catch(err => {
            console.log(err)
        })


}