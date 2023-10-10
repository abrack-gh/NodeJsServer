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
    res.render('../views/admin/shop',
        {
            pageTitle: 'Products',
            path: 'admin/shop',
            activeProduct: true,
            productCSS: true
        })
}