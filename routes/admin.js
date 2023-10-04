const express = require('express');

const router = express.Router();

router.use;

router.use('/add', (req, res, next) => {
    console.log("Second middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//Filters only for post requests
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;

