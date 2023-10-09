const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-products',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            activeProduct: true,
            productCSS: true
        });
}

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title,
        price: req.body.price,
        descr: req.body.descr});
    res.redirect('/');
}

exports.getShopData = (req, res, next) => {
    res.render('shop', {pageTitle: 'Shop',
        prods: products, path:'/',
        hasProducts: products.length > 0,
        activeShop: true, productCSS: true});
};

