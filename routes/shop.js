const express = require('express');

const router = express.Router();

router.use;

module.exports = router;

router.use('/', (req, res, next) => {
    console.log("This middleware always runs!");
    next();
});

router.use('/', (req, res, next) => {
    console.log("Third middleware!");
    res.send('<h1>Hello!</h1>');
});