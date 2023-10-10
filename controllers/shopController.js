exports.getCart = (req, res, next) => {
    res.render('../views/shop/cart',
        {
            pageTitle: 'Your Cart',
            path: 'shop/cart',
            activeProduct: true,
            productCSS: true
        })
}

exports.getCheckout = (req, res, next) => {
    res.render('../views/shop/checkout',
        {
            pageTitle: 'Checkout',
            path: 'shop/checkout',
            activeProduct: true,
            productCSS: true
        })
}

exports.getIndex = (req, res, next) => {
    res.render('../views/shop/index',
        {
            pageTitle: 'Shop - Home',
            path: 'shop/index',
            activeProduct: true,
            productCSS: true
        })
}

exports.getProductDetails = (req, res, next) => {
    res.render('../views/shop/product-details',
        {
            pageTitle: ' ',
            path: 'shop/product-details',
            activeProduct: true,
            productCSS: true
        })
}