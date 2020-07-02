const express = require('express');


const router = express.Router();



router.get('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="add-product" method="POST"><input type="text" name="title"><button>Add Product</button></form>')

});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')

});

module.exports = router;