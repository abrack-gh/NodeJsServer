const Product = require("../models/product");
const json = require("../data/products.json");


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
    Product.fetchAll((products) => {

        res.render('admin/shop', {
            pageTitle: 'Shop',
            prods: products, path: '/',
            hasProducts: json != null,
            activeShop: true, productCSS: true
        });

    });
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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, title, imageUrl, price, description);
    product.save();
    res.redirect('/products');
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
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
    const updatedProduct = new Product(prodId, updatedTitle, updatedPrice,
        updatedImage, updatedDesc);
    updatedProduct.save();
    res.redirect('/admin/shop');
};