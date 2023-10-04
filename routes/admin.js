const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');


const router = express.Router();

router.use;


//HTTP GET REQUEST => /admin/add
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//Filters only for post requests
//HTTP POST REQUEST => /admin/product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

